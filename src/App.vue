<template>
  <page-loader />
  <div class="fixed bottom-3 right-5 z-50">
    <div v-if="isAuthenticated">
      <button @click="logout">
        <img :src="user.picture" alt="" class="rounded-full w-16 shadow-xl shadow-gray-400" />
      </button>
    </div>
    <div v-else>
      <button @click="login">
        <box-icon type="logo" name="google" size="lg" class="shadow-xl shadow-gray-400 rounded-full"></box-icon>
      </button>
    </div>
  </div>
  <router-view />
</template>

<script>
import PageLoader from '@/views/PageLoader.vue'
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  name: 'App',
  components: {
    PageLoader
  },
  setup() {
    const { loginWithPopup, user, isAuthenticated, logout } = useAuth0()

    return {
      login: () => {
        loginWithPopup()
      },
      logout: () => {
        logout()
      },
      user,
      isAuthenticated
    }
  }
}
</script>
