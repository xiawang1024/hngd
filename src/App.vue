<template>
  	<div id="app">    
		<transition name="fade">
    		<router-view/>    
		</transition>
  	</div>
</template>

<script>
export default {
  	name: 'App'
}
</script>

<style>
#app{
	width: 750px;
	margin:0 auto;
	overflow-x: hidden;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity .5s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
  opacity: 0;
}
</style>
