<template>
  <div class="h-[1982px] mt-40">
    <div class="flex justify-between">
      <div class="flex text-6xl font-headers">
        <h1 class="uppercase">latest</h1>
        <h1 class="ml-5 text-[#DB574D]">Work</h1>
      </div>

       <!-- Link to all content latest page -->
      <router-link to="">
        <div class="flex items-center gap-3 font-headers">
          <p>View All</p>
          <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
            <path
              d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
            />
          </svg>
        </div>
      </router-link>
    </div>

    <div class="grid grid-cols-2 mt-32 font-headers">
      <div class="space-y-32">
        <div class="grid justify-start">
          <div class="img text-3xl">
            <h1 class="uppercase">
              Dancing in <br />
              Black & <span class="capitalize text-[#DB574D]">White</span>
            </h1>
            <img src="https://i.imgur.com/Vaz5R7J.png" alt="##" class="mt-3" />
            <p class="text-base capitalize mt-3">
              new york <br />
              october 2021
            </p>
          </div>
        </div>
        <div class="grid justify-center">
          <div class="img text-3xl">
            <h1 class="uppercase">week <span class="capitalize text-[#DB574D]">Fashion</span></h1>
            <img src="@/img/weekFashion.png" alt="##" class="mt-3" />
            <p class="text-base capitalize mt-3">
              new york <br />
              october 2021
            </p>
          </div>
        </div>
      </div>
      <div class="space-y-32">
        <div class="grid justify-end mt-9">
          <div class="img text-3xl">
            <h1 class="uppercase">
              style <span class="capitalize text-[#DB574D]">& Fashion</span>
            </h1>
            <img src="@/img/style&fashion.png" alt="##" class="mt-3" />
            <p class="text-base capitalize mt-3">
              new york <br />
              october 2021
            </p>
          </div>
        </div>
        <div class="grid justify-center">
          <div class="img text-3xl">
            <h1 class="uppercase">one <span class="capitalize text-[#DB574D]">Eye</span></h1>
            <img src="@/img/oneEye.png" alt="##" class="mt-3" />
            <p class="text-base capitalize mt-3">
              new york <br />
              october 2021
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'LatestWork'
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
