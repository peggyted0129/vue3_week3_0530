<template>
<section class="back-navbar">
  <loading v-model:active="isLoading"></loading>
  <nav class="navbar navbar-expand-md navbar-scroll">
    <div class="container-fluid container-md">
      <h1 class="h2">
        <router-link :to="{ name: 'Home' }" class="navbar-logo">Nature</router-link>
      </h1>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNavDropdown">
        <ul class="navbar-nav ms-15">
          <li class="nav-item ms-2">
            <router-link to="/admin/products" class="nav-link h5">產品列表</router-link>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link h5" href="#">訂單列表</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link h5" href="#">模擬頁面</a>
          </li>
        </ul>
        <div class="ms-auto">
          <a href="#" @click.prevent="signout" class="nav-link d-flex align-items-center">
            <span class="me-5 h5">登出</span>
            <span style="font-size: 24px"><i class="fas fa-sign-out-alt"></i></span>
          </a>
        </div>
      </div>
    </div>
  </nav>
</section>
</template>
<script>
export default {
  data () {
    return {
      isLoading: false
    }
  },
  methods: {
    signout () {
      const vm = this
      vm.isLoading = true
      const api = `${process.env.VUE_APP_APIPATH}/logout`
      vm.$http.post(api).then((res) => {
        if (res.data.success) {
          vm.isLoading = false
          vm.$router.push('/login')
        }
      })
    }
  }
}
</script>
