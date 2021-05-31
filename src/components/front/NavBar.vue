<template>
<section>
  <nav :class="{ 'navbar-scroll': isMenuOpen || scrollHeader , 'bg-theme' : togglerBtn }" class="navbar navbar-expand-md py-0">
    <div class="container-fluid container-md align-items-center">
      <h1 class="h3 ml-5 ml-md-0">
        <router-link :to="{ name: 'Home' }" class="navbar-logo">Sebamed</router-link>
      </h1>
      <button class="navbar-toggler" @click="dropdownOpen('togglerBtn')" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
        <div class="position-relative">
          <span class="toggler-bar toggler-bar-top" :class="{ 'toggler-bar-top-rotate' : togglerBtn}"></span>
          <span class="toggler-bar toggler-bar-middle"></span>
          <span class="toggler-bar toggler-bar-bottom" :class="{ 'toggler-bar-bottom-rotate' : togglerBtn}"></span>
        </div>
      </button>
      <div class="collapse navbar-collapse my-4" id="navbarNavDropdown">
        <ul class="navbar-nav ms-auto">
          <li class="nav-item ms-2">
            <a class="nav-link" href="#">最新消息</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link d-flex" @click="dropdownOpen('isProductDropdown')" href="#">
              <span>產品總覽</span>
              <span class="ms-1 arrowDown-pad d-none d-md-block"><i class="fas fa-chevron-down"></i></span>
              <span v-if="isProductDropdown" class="ms-1 addIcon-phone d-md-none d-block ms-auto"><i class="fas fa-minus"></i></span>
              <span v-else class="ms-1 addIcon-phone d-md-none d-block ms-auto"><i class="fas fa-plus"></i></span>
            </a>
            <!-- 手機版 : 手風琴效果 -->
            <ul class="dropdown-open js-product-open d-md-none" :class="{ 'd-block' : isProductDropdown , active : isProductDropdown }">
              <li class="mb-5">
                <a href="#" class="ms-5 text-white">[ 產品列表 ] 肌膚 你不知道的奧秘</a>
              </li>
              <li>
                <a href="#" class="ms-5 text-white">[ 產品列表 ] 肌膚 你不知道的奧秘</a>
              </li>
            </ul>
            <!-- 電腦版 -->
            <ul class="navbar-menu bg-theme p-7 ms-3 d-none d-md-block">
              <li class="mb-5">
                <a href="#">[ 產品列表 ] 肌膚 你不知道的奧秘</a>
              </li>
              <li>
                <a href="#">[ 產品列表 ] 肌膚 你不知道的奧秘</a>
              </li>
            </ul>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link" href="#">購買地點</a>
          </li>
          <li class="nav-item ms-2">
            <a class="nav-link d-flex" @click="dropdownOpen('isSkinDropdown')" href="#">
              <span>美肌顧問</span>
              <span class="ms-1 arrowDown-pad d-none d-md-block"><i class="fas fa-chevron-down"></i></span>
              <span v-if="isSkinDropdown" class="ms-1 addIcon-phone d-md-none d-block ms-auto"><i class="fas fa-minus"></i></span>
              <span v-else class="ms-1 addIcon-phone d-md-none d-block ms-auto"><i class="fas fa-plus"></i></span>
            </a>
            <!-- 手機版 : 手風琴效果 -->
            <ul class="dropdown-open js-skin-open d-md-none" :class="{ 'd-block' : isDropdown , active : isDropdown }">
              <li class="mb-5">
                <a href="#" class="ms-5 text-white">[ 小資美學堂 ] 肌膚 你不知道的奧秘</a>
              </li>
              <li>
                <a href="#" class="ms-5 text-white">[ 小資美學堂 ] 肌膚 你不知道的奧秘</a>
              </li>
            </ul>
            <!-- 電腦版 -->
            <ul class="navbar-menu navbar-skin-menu bg-theme p-7 ms-3 d-none d-md-block">
              <li class="mb-5">
                <a href="#">[ 小資美學堂 ] 肌膚 你不知道的奧秘</a>
              </li>
              <li>
                <a href="#">[ 小資美學堂 ] 肌膚 你不知道的奧秘</a>
              </li>
            </ul>
          </li>
          <li class="nav-item ms-2">
            <router-link to="/login" class="nav-link">
              <span>後台登入</span>
              <span class="ms-1"><i class="fas fa-sign-in-alt"></i></span>
            </router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view />
</section>
</template>

<script>
/* global $ */
export default {
  data () {
    return {
      togglerBtn: false, // RWD 打開下拉式選單
      isSkinDropdown: false, // RWD 選單內的第二層 Skin 下拉式選單
      isProductDropdown: false, // RWD 選單內的第二層 Product 下拉式選單
      scrollHeader: false,
      isMenuOpen: false,
      routerName: this.$route.name
    }
  },
  methods: {
    dropdownOpen (isOpen) {
      if (isOpen === 'togglerBtn') {
        this[isOpen] = !this[isOpen]
        $('.toggler-bar-middle').toggleClass('d-none')
      }
      if (isOpen === 'isProductDropdown') {
        this[isOpen] = !this[isOpen]
        $('.js-product-open').slideToggle()
      }
      if (isOpen === 'isSkinDropdown') {
        this[isOpen] = !this[isOpen]
        $('.js-skin-open').slideToggle()
      }
    },
    scrollPage () {
      const vm = this
      const scrollTop = $(window).scrollTop()
      const { routerName } = this
      switch (true) {
        case routerName === 'Home' && scrollTop > 0:
          window.addEventListener('scroll', vm.scrollPage)
          vm.scrollHeader = true
          break
        case routerName === 'Home':
          window.addEventListener('scroll', vm.scrollPage)
          vm.scrollHeader = false
          break
        default:
          window.removeEventListener('scroll', vm.scrollPage)
          vm.scrollHeader = true
          break
      }
    }
  },
  watch: {
    $route (to, from) {
      const vm = this
      if (to.path !== from.path) {
        vm.routerName = to.name
        vm.isMenuOpen = false
        vm.scrollPage()
      }
    }
  },
  created () {
    this.scrollPage()
  }
}
</script>
