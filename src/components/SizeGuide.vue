<template>
  <div class=" pb-6 uppercase w-40">
    <h3 class="pb-3">size guide</h3>
    <ul class="pb-3">
      <li
        v-for="(size, name) in props.guide"
        :key="name"
        class="flex"
      >
        <div class="w-6">{{ name }}</div>
        <div v-for="(num, part) in size" :key="part" class="flex px-2">
          {{ num }}
        </div>
      </li>
    </ul>
    <p class="text-sm normal-case">sizes may rarely vary in the range of 5%</p>
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
