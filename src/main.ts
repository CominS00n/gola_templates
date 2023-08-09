import '@/main.css'
import 'aos/dist/aos.css'
import AOS from 'aos'
import 'boxicons'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import vue3GoogleLogin from 'vue3-google-login'
import { createAuth0 } from '@auth0/auth0-vue'

const app = createApp(App)
const CLIENT_ID = '75409933601-8n3jruh4usbe2sfpkn7evgeuq7k1e0l4.apps.googleusercontent.com'

app.use(router)
app.use(AOS.init())
app.use(vue3GoogleLogin, {
  clientId: CLIENT_ID
})
app.use(
  createAuth0({
    domain: 'dev-i41ysj3d7eyat1td.us.auth0.com',
    clientId: '6zQrCcLpVkeZN8GytTLpOGsyhJUWHBK5',
    authorizationParams: {
      redirect_uri: window.location.origin
    }
  })
)
app.mount('#app')
