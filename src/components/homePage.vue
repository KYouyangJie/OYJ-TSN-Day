<template>
	<div class="homePage">
		<shopHeader />
		<goodsList />
	</div>

</template>

<script>
	import shopHeader from "@/components/header"
	import goodsList from "@/components/goodsList"

	export default {
		name: 'homePage',
		components: {
			shopHeader,
			goodsList
		}
	}
</script>

<style>
.homePage{
	height: 100%;
}
</style>