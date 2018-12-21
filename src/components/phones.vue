<template>
  <div class="phones bg-white">
    <div v-for="item in duduItem()" style="background-image: url(/static/bg.png);background-size: contain;background-repeat: no-repeat;background-position: center;">
      <img v-lazyload="'/static/year_2/'+item.url" src="/static/blocker.jpg" alt="" style="display:block;width:100%;">
    </div>
  </div>
</template>

<script>
export default {
  name: 'Phones',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  },
  methods: {
    duduItem(){
      let data = this.common.duduData(); //照片列表
      console.log(data.years_2.phonesList)
      return data.years_2.phonesList
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
