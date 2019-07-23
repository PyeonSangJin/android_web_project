<template>
  <div class="users">
    <ul>
      <li :key="img" v-for="img in list">
        <img v-lazy="img.src">
        <a v-bind:href="img.src" download><button>이미지 다운로드</button></a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  created () {
    this.$http.get('http://localhost:3001/api/gallery/1')
    .then((response) => {
      this.list= response.data
      console.log(this.list);
    })
  },
  data () {
    return {
      list:[]
    }
  }
}
</script>