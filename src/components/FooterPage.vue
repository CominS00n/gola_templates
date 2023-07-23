<template>
  <div class="container mx-auto mt-40 font-headers">
    <div class="grid grid-cols-3 justify-items-center">
      <div class="flex flex-col">
        <p class="text-7xl capitalize text-[#DB574D]">Jacob <br> Grønberg</p>
        <p class="text-center">Photograph & Visual Artist</p>
      </div>
      <div>
        <h1 class="text-3xl uppercase mb-14 text-[#DB574D]">menu</h1>
        <ul class="space-y-4 capitalize">
            <li><router-link to="/">home</router-link></li>
            <li><router-link to="">projects</router-link></li>
            <li><router-link to="">exhibitions</router-link></li>
            <li><router-link to="">about</router-link></li>
            <li><router-link to="">contact</router-link></li>
        </ul>
      </div>
      <div>
        <h1 class="text-3xl uppercase mb-14 text-[#DB574D]">info</h1>
        <ul class="space-y-4 capitalize">
            <li><a href="">Styleguide</a></li>
            <li><a href="">Licensing</a></li>
            <li><a href="">Changelog</a></li>
        </ul>
      </div>
    </div>
    <div class="flex justify-between mt-20 pb-10 text-sm">
        <div class="capitalize"><p>&copy; Made by Pawel Gola - Powered by Webflow</p></div>
        <div>
            <ul class="space-x-5 uppercase">
                <il><a href="" target="_blank">Twitter</a></il>
                <il><a href="" target="_blank">Instagram</a></il>
                <il><a href="https://www.facebook.com/sitthichai.puckpoo/" target="_blank">Facebook</a></il>
            </ul>
        </div>

    </div>
  </div>
</template>

<script>
export default {
  name: 'FooterPage'
}
</script>
