<template>
  <div class="grid grid-cols-3 w-[700px] mb-12">
    <div class="col-start-1">
      <img :src="imgLink" alt="" />
    </div>
    <div class="col-start-2 col-span-2">
      <div class="flex items-center h-[72px] gap-2 mb-5">
        <h1 class="text-[180px] pt-24 text-[#DB574D]">‘‘</h1>
        <h1 class="text-2xl">
          I Really Enjoyed Working <br />
          With Jacob
        </h1>
      </div>
      <p class="mb-5 text-sm">
        {{ textFirst }}
      </p>
      <p class="mb-5 text-sm">
        {{ textSecond }}
      </p>
      <p class="text-sm">
        {{ name }}
      </p>
    </div>
  </div>
</template>
<script>
export default {
  name: 'CilentsPageContents',
  props: {
    textFirst: String,
    textSecond: String,
    name: String,
    imgLink: String
  }
}
</script>
