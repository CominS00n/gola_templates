<template>
  <header class="pt-12">
    <div class="container flex justify-between mx-auto top-12">
      <div class="uppercase">jacob gronberg</div>
      <div>
        <svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512">
          <path
            d="M0 96C0 78.3 14.3 64 32 64H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H32C14.3 128 0 113.7 0 96zM64 256c0-17.7 14.3-32 32-32H480c17.7 0 32 14.3 32 32s-14.3 32-32 32H96c-17.7 0-32-14.3-32-32zM448 416c0 17.7-14.3 32-32 32H32c-17.7 0-32-14.3-32-32s14.3-32 32-32H416c17.7 0 32 14.3 32 32z"
          />
        </svg>
      </div>
    </div>
  </header>
  <body>
    <div class="container mx-auto">
      <div class="flex relative mt-20 w-[1400px] h-[1006px]">
        <div class="absolute grid grid-cols-2 items-end right-28 bottom-0 w-32">
          <img src="@/img/Untitled design.png" alt="#" class="text-[#DB574D]" />
          <span class="pb-2">Scroll Down & Explore</span>
        </div>
        <div class="absolute right-0">
          <img src="https://i.imgur.com/Vaz5R7J.png" alt="image" />
        </div>
        <div class="absolute left-[140px] top-[231px] text-[#DB574D]">
          <h1 class="font-headers font-normal text-9xl">
            Jacob <br />
            Gronberg
          </h1>
        </div>
        <div class="absolute uppercase font-headers font-normal left-[270px] top-[500px] text-5xl">
          <p>Photographer</p>
        </div>
        <div class="absolute uppercase font-headers font-normal left-[340px] top-[560px] text-5xl">
          <p>& Visual artist</p>
        </div>
        <div class="absolute bottom-0 left-0">
          <div class="w-[319px] h-[254px]">
            <div class="h-[180px] w-[180px]">
              <img src="@/img/image wrapper.jpg" alt="image" />
              <p class="font-headers">Hi, Im Jacob</p>
            </div>
            <div class="relative flex items-center bottom-3 right-2">
              <div
                class="absolute right-0 rounded-full border border-[#DB574D] w-[160px] h-[160px]"
              ></div>
              <div
                class="absolute left-[150px] rounded-full bg-[#DB574D] w-[140px] h-[140px] uppercase flex items-center justify-center text-lg text-center text-white font-headers"
              >
                work <br />
                with me
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-3 mt-40 px-52">
        <div class="col-start-1 font-headers w-full text-xl mt-10"><p>- Services</p></div>
        <div>
          <ser-vices
            num="01"
            title="Photo Shooting"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut illum deleniti impedit deserunt exercitationem sint pariatur suscipit nam minus!"
            />
          <ser-vices
            num="02"
            title="Video Editing"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut illum deleniti impedit deserunt exercitationem sint pariatur suscipit nam minus!"
          />
          <ser-vices
            num="02"
            title="Art Direction"
            text="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia, ut illum deleniti impedit deserunt exercitationem sint pariatur suscipit nam minus!"
          />
        </div>
      </div>
    </div>
  </body>
</template>

<script>
import SerVices from '@/components/services.vue'

export default {
  name: 'AboutView',
  components: {
    SerVices
  }
}
</script>
