<template>
  <div
    class="mx-auto max-w-lg pb-12 font-redhat"
    :class="{ 'opacity-40': submitLoading }"
  >
    <div class="mt-8 text-center text-2xl font-bold uppercase text-purple-700">
      update & delete
    </div>
    <div class="mt-8 rounded border-2 border-teal-500 p-2">
      <span class="iconify text-3xl text-teal-500" data-icon="gg:add"></span>
      <h3
        class="flex flex-col items-center pt-8 text-xl font-medium uppercase text-teal-600 sm:pt-0"
      >
        gig update
      </h3>
      <div class="flex flex-col text-lg text-teal-500">
        <label for="venue" class="p-5"
          ><span class="uppercase">地點 / venue</span>
          <input
            type="text"
            v-model="venue"
            class="w-full border-2 p-1 outline-none"
            required
          />
        </label>
        <label for="city" class="p-5"
          ><span class="uppercase">城市 / city</span>

          <input
            type="text"
            v-model="city"
            class="w-full border-2 p-1 outline-none"
            required
          />
        </label>
        <label for="showTime" class="p-5"
          ><span class="uppercase">時間 / time</span>

          <input
            type="date"
            v-model="showTime"
            class="w-full border-2 p-1 outline-none"
            required
          />
        </label>
        <label for="eventUrl" class="p-5"
          ><span class="uppercase">網址 / url</span>

          <p class="p-2 text-sm normal-case text-teal-700">
            購票網址或活動相關連結
          </p>
          <input
            type="text"
            v-model="eventUrl"
            class="w-full border-2 p-1 outline-none"
          />
        </label>
        <label for="banner" class="p-5"
          ><span class="uppercase">event banner</span>
          <p class="p-2 text-sm text-teal-700">
            檔名規定格式：
            <span class="font-medium">2022-01-01.jpg </span>
          </p>
          <p class="p-2 text-sm text-teal-700">
            檔案大小在
            <span class="font-medium">1MB (1024KB) </span>以內為佳
          </p>
          <p class="px-2 text-sm capitalize">線上圖片處理:</p>
          <ul class="p-2 text-sm text-teal-700">
            <li>
              <a href="https://compressjpeg.com/">compress jpeg 壓縮檔案大小</a>
            </li>
            <li>
              <a href="https://imageresizer.com/"
                >image resizer 重設檔案解析度</a
              >
            </li>
          </ul>
          <input
            type="file"
            ref="fileInput"
            class="w-full border-2 p-1 text-base outline-none"
          />
        </label>
        <input
          type="submit"
          value="update"
          @click="havePicture"
          class="my-14 mx-auto w-40 rounded-md border py-1 shadow-md"
        />
        <p v-if="uploadComplete" class="py-4 text-2xl font-medium uppercase">
          upload Complete
        </p>
      </div>
    </div>
    <div class="my-8 rounded border-2 border-red-400 p-2">
      <span
        class="iconify mr-2 text-3xl text-red-400"
        data-icon="gg:danger"
      ></span>
      <h3
        class="flex flex-col items-center pt-16 text-xl font-medium uppercase text-red-500 sm:pt-0"
      >
        gig delete
      </h3>
      <div class="flex flex-col text-lg text-red-400">
        <label for="showTime" class="p-5"
          ><p class="pb-4 normal-case">選擇表演時間</p>
          <input
            type="date"
            v-model="delShowTime"
            class="w-full border-2 p-1"
            required
          />
        </label>
        <input
          type="submit"
          value="delete"
          @click="deleteGig"
          class="my-10 mx-auto w-40 rounded-md border py-1 text-red-500 shadow-md"
        />
        <p v-if="deleteComplete" class="py-4 text-2xl font-medium uppercase">
          delete Complete
        </p>
      </div>
    </div>
    <div class="flex justify-center">
      <button
        class="rounded border-2 border-purple-900 py-2 px-4 text-xl font-bold uppercase text-purple-700 shadow"
        @click="quitPage"
      >
        logout
      </button>
    </div>
  </div>
</template>
<script>
import { ref } from 'vue'
import { supabase } from '@/supabase.js'
import { storeUserAuth } from '@/stores/user'
import { useRouter } from 'vue-router'

export default {
  name: 'GigUpdate',
  setup() {
    const router = useRouter()

    const delShowTime = ref('')
    const showTime = ref('')
    const venue = ref('')
    const city = ref('')
    const eventUrl = ref('')
    const fileInput = ref(null)
    const uploadComplete = ref(false)
    const deleteComplete = ref(false)
    const submitLoading = ref(false)

    const getGigBanner = (date) => {
      const { publicURL, error } = supabase.storage
        .from('gigs')
        .getPublicUrl(`banners/${date}.jpg`)
      return publicURL
    }

    async function updateGigInfo(date, withPicture) {
      const { data, error } = await supabase.from('gigs').insert([
        {
          show_time: showTime.value,
          venue: venue.value,
          city: city.value,
          event_url: eventUrl.value || null,
          banner: withPicture ? getGigBanner(date) : null,
        },
      ])
      if (data.length) {
        showTime.value = ''
        venue.value = ''
        city.value = ''
        eventUrl.value = ''
        fileInput.value = null
        uploadComplete.value = true
        submitLoading.value = false
      }
    }

    async function uploadBanner(date) {
      const { data, error } = await supabase.storage
        .from('gigs')
        .upload(`banners/${date}.jpg`, fileInput.value.files[0])
      if (error) console.log(error)
      if (data) updateGigInfo(date, true)
    }

    async function havePicture() {
      submitLoading.value = true
      uploadComplete.value = false
      if (fileInput.value.files.length) {
        uploadBanner(showTime.value)
      } else {
        updateGigInfo()
      }
    }

    async function deleteGig() {
      if (delShowTime.value) {
        submitLoading.value = true
        const { data, error } = await supabase
          .from('gigs')
          .delete()
          .eq('show_time', delShowTime.value)
        if (data.length) {
          submitLoading.value = false
          deleteComplete.value = true
        }
      }
    }

    async function quitPage() {
      await supabase.auth.signOut().then((_) => {
        storeUserAuth().$patch((state) => {
          state.user = ''
        })
        router.push({ name: 'Home' })
      })
    }

    return {
      delShowTime,
      showTime,
      venue,
      city,
      eventUrl,
      fileInput,
      uploadComplete,
      deleteComplete,
      submitLoading,
      havePicture,
      deleteGig,
      quitPage,
    }
  },
}
</script>
