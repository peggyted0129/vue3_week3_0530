<template>
<section>
  <div class="py-20 text-theme fw-bolder">
    <div class="container">
      <div class="text-end mb-8">
        <button class="btn btn-hgray btn-md h5" @click="openModal('new')" type="button">建立新產品</button>
      </div>
      <table class="table table-hover">
        <thead>
          <tr>
            <th scope="col" width="150">分類</th>
            <th scope="col">產品名稱</th>
            <th scope="col" width="100">原價</th>
            <th scope="col" width="100">售價</th>
            <th scope="col" width="180">是否啟用</th>
            <th scope="col" width="160">編輯</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item) in products" :key="item.id">
            <td>{{ item.category }}</td>
            <td>{{ item.title }}</td>
            <td class="text-end">{{ item.origin_price }}</td>
            <td class="text-end">{{ item.price }}</td>
            <td>
              <span v-if="item.is_enabled" class="text-lgreen">啟用</span>
              <span v-else>未啟用</span>
            </td>
            <td>
              <button class="btn btn-outline-theme btn-sm me-4 fw-bolder" @click="openModal('edit', item)" type="button">編輯</button>
              <button class="btn btn-outline-danger btn-sm fw-bolder" @click="openModal('delete', item)" type="button">刪除</button>
            </td>
          </tr>
        </tbody>
      </table>
      <Pagination :pages="pagination" @get-product="getProductsA" class="mt-10"></Pagination>
    </div>
    <!-- Modal -->
    <div id="productModal" data-bs-backdrop="static" ref="productModal" class="modal fade" tabindex="-1" aria-labelledby="productModalLabel"
      aria-hidden="true">
      <div class="modal-dialog modal-xl">
        <div class="modal-content border-0">
          <div class="modal-header bg-hgray text-white">
            <h5 id="productModalLabel" class="modal-title fw-bolder">
              <span v-if="isNew">新增產品</span>
              <span v-else>編輯產品</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body mb-5">
            <div class="row">
              <div class="col-sm-4">
                <div class="form-group">
                  <label for="imageUrl">主要圖片</label>
                  <input v-model="tempProduct.imageUrl" type="text" class="form-control my-3" placeholder="請輸入圖片連結">
                </div>
                <div class="form-group">
                  <label for="customFile">或 上傳圖片
                    <i class="fas fa-spinner fa-spin" v-if="fileUploading"></i>
                  </label>
                  <input type="file" id="customFile" class="form-control my-4" ref="files" @change="uploadFile">
                </div>
                <img class="img-fluid" :src="tempProduct.imageUrl">
                <div class="mb-1">多圖新增</div>
                <div v-if="Array.isArray(tempProduct.imagesUrl)">
                  <div class="mb-1" v-for="(image, key) in tempProduct.imagesUrl" :key="key">
                    <div class="form-group">
                      <label for="imageUrl">圖片網址</label>
                      <input v-model="tempProduct.imagesUrl[key]" type="text" class="form-control"
                        placeholder="請輸入圖片連結">
                    </div>
                    <img class="img-fluid" :src="image">
                  </div>
                  <div
                    v-if="!tempProduct.imagesUrl.length || tempProduct.imagesUrl[tempProduct.imagesUrl.length - 1]">
                    <button class="btn btn-hgray btn-sm d-block w-100 my-3"
                      @click="tempProduct.imagesUrl.push('')">
                      新增圖片
                    </button>
                  </div>
                  <div v-else>
                    <button class="btn btn-outline-danger btn-sm d-block w-100" @click="tempProduct.imagesUrl.pop()">
                      刪除圖片
                    </button>
                  </div>
                </div>
                <div v-else>
                  <button class="btn btn-outline-hgray btn-sm d-block w-100"
                    @click="createImages">
                    新增陣列圖片
                  </button>
                </div>
              </div>
              <div class="col-sm-8">
                <div class="form-group">
                  <label for="title">標題</label>
                  <input id="title" v-model="tempProduct.title" type="text" class="form-control my-3" placeholder="請輸入標題">
                </div>

                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="category">分類</label>
                    <input id="category" v-model="tempProduct.category" type="text" class="form-control my-3"
                      placeholder="請輸入分類">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="unit">單位</label>
                    <input id="unit" v-model="tempProduct.unit" type="text" class="form-control my-3" placeholder="請輸入單位">
                  </div>
                </div>

                <div class="row">
                  <div class="form-group col-md-6">
                    <label for="origin_price">原價</label>
                    <input id="origin_price" v-model.number="tempProduct.origin_price" type="number" min="0"
                      class="form-control my-3" placeholder="請輸入原價">
                  </div>
                  <div class="form-group col-md-6">
                    <label for="price">售價</label>
                    <input id="price" v-model.number="tempProduct.price" type="number" min="0" class="form-control my-3"
                      placeholder="請輸入售價">
                  </div>
                </div>
                <hr>

                <div class="form-group">
                  <label for="description">產品描述</label>
                  <textarea id="description" v-model="tempProduct.description" type="text" class="form-control my-3"
                    placeholder="請輸入產品描述">
                </textarea>
                </div>
                <div class="form-group">
                  <label for="content">說明內容</label>
                  <textarea id="content" v-model="tempProduct.content" type="text" class="form-control my-3"
                    placeholder="請輸入說明內容">
                </textarea>
                </div>
                <div class="form-group mt-5">
                  <div class="form-check form-switch">
                    <input class="form-check-input" v-model="tempProduct.is_enabled" :true-value="1" :false-value="0" type="checkbox" id="tempProduct.id">
                    <label class="form-check-label" for="tempProduct.id">是否啟用 :</label><span class="ms-3">{{ tempProduct.is_enabled ? '啟用' : '未啟用' }}</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-danger fw-bolder" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-hgray text-white fw-bolder" @click="updateProduct">
              確認
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- del Modal -->
    <div id="delProductModal" ref="delProductModal" class="modal fade" tabindex="-1"
      aria-labelledby="delProductModalLabel" aria-hidden="true" data-bs-backdrop="static">
      <div class="modal-dialog">
        <div class="modal-content border-0">
          <div class="modal-header bg-danger text-white">
            <h5 id="delProductModalLabel" class="modal-title">
              <span>刪除產品</span>
            </h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
          </div>
          <div class="modal-body my-7">
            是否刪除
            <strong class="text-danger">{{ tempProduct.title }}</strong> 商品(刪除後將無法恢復)。
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-outline-secondary" data-bs-dismiss="modal">
              取消
            </button>
            <button type="button" class="btn btn-danger" @click="delProduct">
              確認刪除
            </button>
          </div>
        </div>
      </div>
    </div>
    <!-- Modal -->
  </div>
</section>
</template>
<script>
import * as bootstrap from 'bootstrap'
import Pagination from '@/components/Pagination.vue'

export default {
  components: {
    Pagination
  },
  data () {
    return {
      products: [],
      isNew: false,
      fileUploading: false,
      pagination: {},
      tempProduct: {
        imagesUrl: []
      },
      productModal: {},
      delProductModal: {}
    }
  },
  methods: {
    getProductsA (page = 1) {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/products?page=${page}`
      vm.$http.get(api).then((res) => {
        console.log('產品列表', res.data)
        if (res.data.success) {
          vm.products = res.data.products
          vm.pagination = res.data.pagination
        } else {
          vm.$swal({ title: res.data.message, icon: 'error' })
        }
      })
    },
    updateProduct () {
      const vm = this
      let url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product`
      let http = 'post'
      if (!vm.isNew) {
        url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
        http = 'put'
      }
      vm.$http[http](url, { data: vm.tempProduct }).then((res) => {
        if (res.data.success) {
          vm.$swal({ title: res.data.message, icon: 'success' })
          vm.productModal.hide()
          vm.getProductsA()
        } else {
          vm.$swal({ title: res.data.message, icon: 'error' })
        }
      })
    },
    uploadFile () {
      const vm = this
      const uploadedFile = this.$refs.files.files[0]
      const formData = new FormData()
      formData.append('file-to-upload', uploadedFile)
      const url = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/upload`
      vm.fileUploading = true
      vm.$http.post(url, formData)
        .then((res) => {
          vm.fileUploading = false
          if (res.data.success) {
            console.log(res.data)
            vm.tempProduct.imageUrl = res.data.imageUrl
            vm.$swal({ title: '上傳圖片成功', icon: 'success' })
          }
          if (!res.data.success) {
            vm.$swal({ title: '檔案格式錯誤 or 圖片太大無法上傳', icon: 'error' })
          }
        })
        .catch((err) => {
          vm.fileUploading = false
          console.log(err.response)
        })
    },
    openModal (isNew, item) {
      if (isNew === 'new') {
        this.tempProduct = {
          imagesUrl: []
        }
        this.isNew = true
        this.productModal.show()
      }
      if (isNew === 'edit') {
        this.tempProduct = { ...item }
        this.isNew = false
        this.productModal.show()
      } else if (isNew === 'delete') {
        this.tempProduct = { ...item }
        this.delProductModal.show()
      }
    },
    createImages () {
      this.tempProduct.imagesUrl = ['']
      this.tempProduct.imagesUrl.push('')
    },
    delProduct () {
      const vm = this
      const api = `${process.env.VUE_APP_APIPATH}/api/${process.env.VUE_APP_CUSTOMPATH}/admin/product/${vm.tempProduct.id}`
      vm.$http.delete(api).then((res) => {
        console.log('刪除商品', res.data)
        if (res.data.success) {
          vm.$swal({ title: res.data.message, icon: 'success' })
          vm.delProductModal.hide()
          vm.getProductsA()
        } else {
          vm.$swal({ title: res.data.message, icon: 'error' })
        }
      })
    }
  },
  created () {
    const vm = this
    vm.getProductsA()
  },
  mounted () {
    this.productModal = new bootstrap.Modal(document.getElementById('productModal'), {
      keyboard: false,
      backdrop: 'static'
    })
    this.delProductModal = new bootstrap.Modal(document.getElementById('delProductModal'), {
      keyboard: false,
      backdrop: 'static'
    })
  }
}
</script>
