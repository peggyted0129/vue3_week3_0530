<template>
  <header class="home">
    <!-- 輪播 -->
    <div id="carouselExampleIndicators" class="carousel slide carousel-fade" data-bs-ride="carousel">
      <div class="carousel-indicators">
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="1" aria-label="Slide 2"></button>
        <button type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide-to="2" aria-label="Slide 3"></button>
      </div>
      <div class="carousel-inner">
        <div class="carousel-item active" data-bs-interval="2000">
          <img src="../../assets/img/banner14.jpg" class="d-block w-100 vh-100" alt="img_oil">
          <div class="carousel-caption carousel-item-txt">
            <h5 class="h1">來自醫生的保養建議</h5>
            <p class="h4">更好的呵護你的肌膚</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../../assets/img/banner1.jpg" class="d-block w-100 vh-100" alt="img_dark">
          <div class="carousel-caption carousel-item-txt">
            <h5 class="h1">認明台灣總代理</h5>
            <p class="h4">健康肌膚的領導品牌</p>
          </div>
        </div>
        <div class="carousel-item" data-bs-interval="2000">
          <img src="../../assets/img/banner13.jpg" class="d-block w-100 vh-100" alt="img_color">
          <div class="carousel-caption carousel-item-txt">
            <h5 class="h1">精選歐盟法規認證成分</h5>
            <p class="h4">在台銷售超過 320 萬瓶</p>
          </div>
        </div>
      </div>
      <button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="prev">
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button class="carousel-control-next" type="button" data-bs-target="#carouselExampleIndicators" data-bs-slide="next">
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
    <!-- 最新消息 -->
    <main class="container">
      <div class="news my-md-16 my-10">
        <h2 class="fw-bolder text-center position-relative mb-12">最新消息</h2>
        <div class="row">
          <div class="col-lg-4 col-md-6 col-12 mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="100">
            <div class="card mews-card">
              <img src="../../assets/img/banner3.jpg" class="card-img-top" alt="...">
              <div class="card-body mx-5" style="height: 155px">
                <h5 class="card-title fw-bolder">在家安心購物，宅配免費</h5>
                <p class="card-text">防疫有你有我！宅在家也能安心購物</p>
                <p class="my-5"><small class="text-lgreen">發佈日期 | 2021-05-26</small></p>
              </div>
              <div class="card-footer mx-5">
                <a href="#" class="btn btn-hgray hvr-bounce-to-right">了解更多</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12 mb-6" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="400">
            <div class="card mews-card">
              <img src="../../assets/img/banner3.jpg" class="card-img-top" alt="...">
              <div class="card-body mx-5" style="height: 155px">
                <h5 class="card-title fw-bolder">粉絲真心告白認證</h5>
                <p class="card-text">粉絲大聲說 ....， 肌膚真的改善了</p>
                <p class="my-5"><small class="text-lgreen">發佈日期 | 2021-05-26</small></p>
              </div>
              <div class="card-footer mx-5">
                <a href="#" class="btn btn-hgray hvr-bounce-to-right">了解更多</a>
              </div>
            </div>
          </div>
          <div class="col-lg-4 col-md-6 col-12" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="700">
            <div class="card mews-card">
              <img src="../../assets/img/banner3.jpg" class="card-img-top" alt="...">
              <div class="card-body mx-5" style="height: 155px">
                <h5 class="card-title fw-bolder">限量品 - 好評回歸上市</h5>
                <p class="card-text">[ 香氛沐浴乳 ] 全台百貨櫃位、官方購物限量販售!</p>
                <p class="my-5"><small class="text-lgreen">發佈日期 | 2021-05-26</small></p>
              </div>
              <div class="card-footer mx-5">
                <a href="#" class="btn btn-hgray hvr-bounce-to-right">了解更多</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
    <!-- 首頁 footer -->
    <footer class="home-footer bg-theme">
      <div class="container py-12">
        <div class="row">
          <!-- 左側邊攔 -->
          <div class="col-lg-4 col-md-6 mb-9">
            <h1 class="h3 px-5 px-sm-0">
              <a href="#" class="footer-logo text-white">Sebamed</a>
            </h1>
            <p class="pe-5 px-5 px-sm-0 pt-5 text-streak">pH5.5原創領導品牌 | 德國NO.1醫學潔護品牌美麗來自健康肌膚 Science for healthy skin.</p>
          </div>
          <!-- 中間邊攔 -->
          <div class="col-lg-4 col-md-6 mb-9">
            <ul class="px-5 px-sm-0 px-md-5">
              <li class="pb-3 border-bottom"><h4 class="text-white">關注我們</h4></li>
              <li>
                <a href="#" class="text-streak pt-8 d-flex home-footer-link">
                  <span class="me-2"><i class="fas fa-chevron-right"></i></span>
                  <span>產品總覽</span>
                </a>
              </li>
              <li>
                <a href="#" class="text-streak pt-5 d-flex home-footer-link">
                  <span class="me-2"><i class="fas fa-chevron-right"></i></span>
                  <span>產品總覽</span>
                </a>
              </li>
              <li>
                <a href="#" class="text-streak pt-5 d-flex home-footer-link">
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
    </footer>
  </header>
</template>
<script>
import AOS from 'aos'
import 'aos/dist/aos.css'

export default {
  mounted () {
    AOS.init({
      offset: 120,
      duration: 400
    })
  }
}
</script>
