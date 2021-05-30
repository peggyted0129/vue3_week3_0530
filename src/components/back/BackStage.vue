<template>
  <div class="container-fluid px-0">
    <BackNavbar />
    <Alert />
    <router-view />
  </div>
</template>
<script>
import Alert from '@/components/AlertMessage.vue'
import BackNavbar from '@/components/back/BackNavbar.vue'

export default {
  data () {
    return {
    }
  },
  components: {
    Alert,
    BackNavbar
  },
  created () {
    const vm = this
    const token = document.cookie.replace(/(?:(?:^|.*;\s*)vue3Token\s*=\s*([^;]*).*$)|^.*$/, '$1')
    vm.$http.defaults.headers.common.Authorization = token
    // console.log('BackStage 回傳', token)
  }
}
</script>
