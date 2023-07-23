<template>
  <div class="flex justify-between font-headers mt-40">
    <div class="uppercase w-[480px]">
      <h1 class="text-6xl">What my</h1>
      <h1 class="text-6xl mb-5">Clients <span class="capitalize text-[#DB574D]">Say</span></h1>
      <p class="mb-10 text-2xl">
        Worked with Over <span class="text-[#DB574D]"> 50 clients </span> <br />
        around the world
      </p>
      <button
        class="flex justify-center items-center w-52 h-14 rounded-full border border-[#DB574D] text-[#DB574D] px-5 py-4 gap-2"
      >
        Work With Me
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="1em"
          viewBox="0 0 512 512"
          class="fill-[#DB574D]"
        >
          <path
            d="M502.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-128-128c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L402.7 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l370.7 0-73.4 73.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l128-128z"
          />
        </svg>
      </button>
    </div>
    <div class="space-y-12">
      <cilents-page-contents
        imgLink="https://i.imgur.com/jGh5gFp.png"
        textFirst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
            labore et dolore magna aliqua."
        textSecond="Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra. Laoreet sit amet
            cursus sit amet dictum sit amet justo."
        name="Michelle Lindstrøm - Photoshoot"
      />
      <hr />
      <cilents-page-contents
        imgLink="https://i.imgur.com/LIILLGu.png"
        textFirst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."
        name="Jannis Jackson - Art Direction"
      />
      <hr />
      <cilents-page-contents
        imgLink="https://i.imgur.com/icqoFW9.png"
        textFirst="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Enim lobortis scelerisque fermentum dui faucibus in ornare quam viverra."
        name="Jannis Jackson - Art Direction"
      />
    </div>
  </div>
</template>

<script>
import CilentsPageContents from '@/components/CilentsPageContents.vue'

export default {
  name: 'CilentsPage',
  components: {
    CilentsPageContents
  }
}
</script>
