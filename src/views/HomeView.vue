<script setup lang="ts">
import { RouterLink } from 'vue-router'
</script>

<template>
  <header class="container flex justify-between mx-auto items-center bg-white h-20 w-full font-headers">
    <div class="flex gap-2">
      <div class="font-medium">gola</div>
      <div class="pt-2">
        <div class="h-2.5 w-2.5 bg-[#EBFB48]"></div>
      </div>
      <div class="text-gray-400">templates</div>
    </div>
    <div class="flex gap-1">
      <div class="underline font-inter font-light">
        <a href="https://templates.gola.io/"> templates.gola.io </a>
      </div>
      <div class="flex rotate-45">
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 384 512">
          <path
            d="M214.6 9.4c-12.5-12.5-32.8-12.5-45.3 0l-128 128c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L160 109.3V480c0 17.7 14.3 32 32 32s32-14.3 32-32V109.3l73.4 73.4c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3l-128-128z"
          />
        </svg>
      </div>
    </div>
  </header>
  <body class="overflow-hidden">
    <div class="w-full bg-[#fafafa]">
      <div class="flex justify-center items-center h-[273px] pt-60">
        <div class="grid grid-rows-2 h-72 gab-8 items-center font-inter font-light">
          <div class="text-5xl font-Headers">
            Check out my other <br />
            Webflow Templates
          </div>
          <div class="flex justify-center z-10">
            <RouterLink to="/about">
              <button
                class="transition duration-300 ease-in-out  rounded py-5 px-6 w-56 h-[69px] bg-blue-600 text-white font-inter font-light underline"
              >
                See all Templates
              </button>
            </RouterLink>
          </div>
        </div>
      </div>
      <div class="container mx-auto relative h-[576px] flex justify-center max-lg:h-[500px]">
        <div class="imgPhoto1 absolute z-10 bottom-0 left-0 w-[600px] max-lg:w-[300px]">
          <img src="https://i.imgur.com/eJgQhPD.png" alt="Photo" />
        </div>
        <div class="imgPhoto2 absolute z-10 bottom-0 right-0 w-[660px] max-lg:w-[360px]">
          <img src="https://i.imgur.com/546BIQ8.png" alt="Photo" />
        </div>
        <div class="imgPhoto3 absolute z-10 bottom-0 w-[800px] max-lg:w-[500px]">
          <img src="https://i.imgur.com/KvZAaDZ.png" alt="Photo" />
        </div>
      </div>
    </div>
  </body>
</template>

<style scoped>
.imgPhoto1 {
  animation: imgPhoto1 1s;
}

.imgPhoto2 {
  animation: imgPhoto2 1s;
}

.imgPhoto3 {
  animation: imgPhoto3 1s ;
}

@keyframes imgPhoto1 {
  0% {left: -30rem}
}

@keyframes imgPhoto2 {
  0% {right: -30rem}
}

@keyframes imgPhoto3 {
  0% {bottom: -30rem}
}
</style>
