<template>
  <div data-aos="flip-down" class="grid grid-cols-6 gap-8 items-center h-auto py-14">
    <div class="col-start-1">
      <img :src="imgLink" alt="#" class="img" />
    </div>
    <div class="col-start-2 col-span-3 space-y-3">
      <p class="capitalize">{{ title }}</p>
      <h1 class="text-3xl uppercase">
        {{ textFirst }} <span class="capitalize text-[#DB574D]">{{ textSecond }}</span>
      </h1>
      <p>
        {{ details }}
      </p>
    </div>

    <!-- Link to buy ticket page -->
    <router-link to="">
      <div class="col-start-5 flex justify-center text-[#DB574D] space-x-3 items-center">
        <p class="capitalize">buy ticket</p>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          class="fill-[#DB574D] -rotate-45"
        >
          <path
            d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
          />
        </svg>
      </div>
    </router-link>
    <div class="col-start-6 text-end text-[#DB574D]">
      <p class="capitalize text-xl">{{ month }}</p>
      <span class="text-7xl">{{ day }}</span>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ExhibitionsContent',
  props: {
    imgLink: String,
    title: String,
    textFirst: String,
    textSecond: String,
    details: String,
    month: String,
    day: String
  }
}
</script>

<style scoped>
.img {
  transition: scale 1s;
}

.img:hover {
  scale: 1.2;
}
</style>
