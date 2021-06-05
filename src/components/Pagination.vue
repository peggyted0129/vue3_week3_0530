<template>
<nav aria-label="Page navigation example">
  <ul class="pagination text-theme">
    <li class="page-item" :class="{ 'disabled' : !pages.has_pre}">
      <a class="page-link" @click.prevent="$emit('get-product', pages.current_page - 1)" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="item in pages.total_pages" :key="item" class="page-item">
      <a class="page-link" @click.prevent="$emit('get-product', item)" :class="{ 'active' : item === pages.current_page }" href="#">{{ item }}</a>
    </li>
    <li class="page-item" :class="{ 'disabled' : !pages.has_next}">
      <a class="page-link" @click.prevent="$emit('get-product', pages.current_page + 1)" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>
<script>
export default {
  data () {
    return {
    }
  },
  props: ['pages']
}
</script>
