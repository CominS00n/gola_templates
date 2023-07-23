<template>
  <page-loader />
  <router-view />
</template>

<script>
import PageLoader from '@/views/PageLoader.vue'

export default {
  name: "App",
  components: {
    PageLoader
  }
}
</script>
