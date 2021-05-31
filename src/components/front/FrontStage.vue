<template>
<section>
  <Alert />
  <NavBar />
  <!-- footer-list -->
  <div class="bg-theme js-footerHide">
    <div class="container py-12">
      <div class="row">
        <!-- 左側邊攔 -->
        <div class="col-lg-4 col-md-6 mb-9">
          <h1 class="h3 px-5 px-sm-0">
            <a href="#" class="footer-logo text-white">Sebamed</a>
          </h1>
          <p class="pe-5 px-5 px-sm-0 pt-5 text-streak">pH5.5原創領導品牌 | 德國NO.1醫學潔護品牌美麗來自健康肌膚 Science for healthy skin.</p>
        </div>
        <!-- 中間邊攔 home-footer-link-->
        <div class="col-lg-4 col-md-6 mb-9">
          <ul class="px-5 px-sm-0 px-md-5">
            <li class="pb-3 border-bottom"><h4 class="text-white">關注我們</h4></li>
            <li>
              <a href="#" class="text-streak pt-8 d-flex footer-list-link">
                <span class="me-2"><i class="fas fa-chevron-right"></i></span>
                <span>產品總覽</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-streak pt-5 d-flex footer-list-link">
                <span class="me-2"><i class="fas fa-chevron-right"></i></span>
                <span>產品總覽</span>
              </a>
            </li>
            <li>
              <a href="#" class="text-streak pt-5 d-flex footer-list-link">
                <span class="me-2"><i class="fas fa-chevron-right"></i></span>
                <span>產品總覽</span>
              </a>
            </li>
          </ul>
        </div>
        <!-- 右間邊攔 -->
        <div class="col-lg-4 col-md-6 mt-lg-0">
          <ul class="px-5 px-sm-0">
            <li class="pb-3 border-bottom"><h4 class="text-white">聯絡我們</h4></li>
            <li class="pt-8">
              <h6 class="text-streak">Sebamed 股份有限公司</h6>
            </li>
            <li class="d-flex text-streak pt-5">
              <a href="tel:0800-000-123">
                <span class="material-icons me-3 text-sgreen">call</span>
                <span class="footer-contact">0800-000-123</span>
              </a>
            </li>
            <li class="d-flex text-streak pt-5">
              <span class="material-icons me-3 text-sgreen">camera_outdoor</span>
              <span>9:00-12:00 l 13:30-17:30 (國定與例假日除外)</span>
            </li>
            <li class="d-flex text-streak pt-5">
              <span class="material-icons me-3 text-sgreen">email</span>
              <a href="mailto:service@nature.com.tw" class="footer-contact">service@nature.com.tw</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  </div>
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
  watch: {
    $route (to, from) {
      const vm = this
      console.log('routerName', vm.$route.name)
      console.log('to.name', to.name)
      if (to.name === 'Login' && vm.$route.name === 'Login') {
        document.querySelector('.js-footerHide').style.display = 'none'
      } else {
        document.querySelector('.js-footerHide').style.display = 'block'
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
