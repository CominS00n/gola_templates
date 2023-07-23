<!-- eslint-disable vue/multi-word-component-names -->
<template>
  <div class="grid grid-cols-6 w-[700px] h-[130px] font-headers mt-10">
    <div class="col-start-1 text-3xl text-[#DB574D]">{{ num }}</div>
    <div class="col-start-2 col-span-5">
      <p class="text-3xl uppercase">{{ title }}</p>
      <p class="mt-4">{{ text }}</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'SerVices',
  props: {
    num: String,
    title: String,
    text: String
  }
}
</script>

