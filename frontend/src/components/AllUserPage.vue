<template>
  <div class="users">
    <h1>사용자 목록</h1>
    <div :key="user" v-for="user in users" class="user">
      <div>
        <strong>{{user.name}}</strong>
        <router-link :to="{ name: 'detail', params: { id: user.id }}">더보기</router-link>
      </div>
    </div>


<ul>
  <li :key="img" v-for="img in list">
    <img v-lazy="img.src" >
  </li>
</ul>

  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('/api/files/dd')
    .then((response) => {
      this.users= response.data
    })
  },
  data () {
    return {
      users: [],
      list:[
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        {src: 'http://img.cgv.co.kr/Movie/Thumbnail/Poster/000079/79416/79416_185.jpg'},
        
        ]
    }
  }
}
</script>