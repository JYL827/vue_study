<template>
  <div class="home">
    <v-header title="豆瓣电影" :leftArrow="false"></v-header>
    <movie-list :section="test"></movie-list>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from '@/components/Header.vue'
import MovieList from '@/components/Movielist.vue'
import { ref } from 'vue'

export default {
  name: 'Home',
  components: {
    'v-header': Header,
    MovieList
  },
  setup() {
    const test = ref({
      movies: [
        {image:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=171802053,4042922941&fm=26&gp=0.jpg', title:'金刚川', rating: { stars: [1, 1, 1, 0, 0], score: 6.5}},
        {image:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=171802053,4042922941&fm=26&gp=0.jpg', title:'金刚川', rating: { stars: [1, 1, 1, 0, 0], score: 6.5}},
        {image:'https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=171802053,4042922941&fm=26&gp=0.jpg', title:'金刚川', rating: { stars: [1, 1, 1, 0, 0], score: 6.5}}
      ]
    })

    return {
      test
    }
  }
}
</script>
