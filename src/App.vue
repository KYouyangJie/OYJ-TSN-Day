<template>
  <div id="app">
		<router-view />
  </div>
</template>

<script>

export default {
  name: 'App',
  data(){
  	return {
  		
  	}
  },

}
</script>

<style>
h1,p,div,body,html,ul,li,header,main{
	margin: 0;
	padding: 0;
}
html{
	font-size: 62.5%;
}
a{
	text-decoration: none;
}
html,body,#app{
	height: 100%;
}

</style>
