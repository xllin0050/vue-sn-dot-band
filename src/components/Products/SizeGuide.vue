<template>
  <div class="">
    <div class="flex justify-center">
      <ul class="">
        <li v-for="(size, name) in props.guide" :key="name" class="flex py-2">
          <div class="uppercase w-6">{{ name }}</div>
          <div v-for="(num, part) in size" :key="part" class="flex px-2">
            {{ num }}
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  props: { guide: Object },
  setup(props) {
    return { props }
  },
}
</script>
