<template>
<section>
  <Alert />
  <NavBar />
  <footer class="bg-theme">
    <div class="container text-streak text-md-end text-center px-4 py-4">
      <small>版權所有 ⓒ 2021 僅為作品用無商業用途</small>
    </div>
  </footer>
  <!-- scroll-top -->
  <div class="scroll-top position-fixed">
    <a href="#" @click.prevent="scrollToTop" class="scroll-up h2 d-flex justify-content-center align-items-center">
      <i class="fa fa-angle-up"></i>
    </a>
  </div>
</section>
</template>
<script>
import Alert from '../AlertMessage' // 注意路徑位置
import NavBar from './NavBar'

export default {
  components: {
    Alert,
    NavBar
  },
  methods: {
    scrollToTop () {
      window.scrollTo(0, 0)
    },
    ScrollHeight () {
      const scrollTop =
        window.pageYOffset ||
        document.documentElement.scrollTop ||
        document.body.scrollTop
      if (scrollTop > 300) {
        document.querySelector('.scroll-top').style.opacity = '1'
      } else {
        document.querySelector('.scroll-top').style.opacity = '0'
      }
    }
  },
  mounted () {
    window.addEventListener('scroll', this.ScrollHeight)
  },
  unmounted () {
    window.removeEventListener('scroll', this.ScrollHeight)
  }
}
</script>
