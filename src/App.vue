<template>
  <div id="app">
  	<div class="flex-container pos-f top0 left0 right0 text-white padding20 fs-14" style="background: rgba(0,0,0,.4)">
  		<div><router-link to="/" class="text-white">返回</router-link></div>
  		<div>dudu 2 岁了</div>
  		<div>导航</div>
  	</div>
  	<div>
  		<router-view/>
  	</div>
  </div>
</template>

<script>

export default {
  name: 'App'
}
</script>

<style>
body{
  background: #333;
}
</style>
