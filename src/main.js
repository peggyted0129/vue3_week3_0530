import { createApp } from 'vue'

import axios from 'axios'
import VueAxios from 'vue-axios'
import VueLoading from 'vue-loading-overlay'
import 'vue-loading-overlay/dist/vue-loading.css'
import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'
import 'bootstrap'
import jquery from 'jquery'

import App from './App.vue'
import router from './router'
import store from './store'
window.$ = jquery

const options = {
  toast: true,
  position: 'top',
  showConfirmButton: false,
  timer: 1500
}

const app = createApp(App).use(store).use(router)
app.config.productionTip = false
app.use(VueAxios, axios)
app.use(VueLoading)
app.component('loading', VueLoading)
app.use(VueSweetalert2, options)
app.mount('#app')

router.beforeEach((to, from, next) => {
  if (to.meta.requiresAuth) {
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)vue3Token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    axios.defaults.headers.common.Authorization = token
    const api = `${process.env.VUE_APP_APIPATH}/api/user/check`
    axios.post(api).then((res) => {
      console.log(res)
      if (res.data.success) {
        next()
      } else {
        this.$swal({ title: res.data.message, icon: 'error' })
        next({
          path: '/login'
        })
      }
    })
      .catch(err => {
        console.log(err.response)
      })
  } else {
    next()
  }
})
