<!-- <template>
  <div v-if="loggedIn">
    <button @click="logout">Logout</button>
    <h2>The name is: {{ user.name }}</h2>
    <h2>The email is: {{ user.email }}</h2>
    <img :src="user.picture" alt="#" />
  </div>
  <div v-else>
    <googleLogin :callback="callback" />
  </div>
</template>
<script>
import { decodeCredential, googleLogout } from 'vue3-google-login'

export default {
  data() {
    return {
      loggedIn: false,
      user: null,
      callback: (response) => {
        console.log('logged in')
        this.loggedIn = true
        console.log(response)
        //console.log(decodeCredential(response.credential))
        this.user = decodeCredential(response.credential)
        console.log(user)
      }
    }
  },
  methods: {
    logout() {
      googleLogout()
      this.loggedIn = false
    }
  }
}
</script> -->

<template>
  <div>
    <div v-if="isAuthenticated">
      <button @click="logout">Logout</button>
      <h2>{{ user.name }}</h2>
      <h2>{{ user.email }}</h2>
      <h2>{{ user.picture }}</h2>

      <img :src="user.picture" alt="" />
    </div>
    <div v-else>
      <button @click="login">Login</button>
    </div>
  </div>
</template>

<script>
import { useAuth0 } from '@auth0/auth0-vue'

export default {
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
