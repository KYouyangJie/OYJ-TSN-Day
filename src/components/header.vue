<template>
	<div class="header">
		<h1>商品列表</h1>
		<div class="nav">
			<div class="wrap">
				<a v-for="item in type" :class="{active:item.isActive}" :key="item.id" href="javascript:void(0)" @click="classify(item)">{{item.name}}</a>
			</div>

		</div>
		<div class="sort">
			<a href="javascript:void(0)" v-for="item in sortType" :class="{sortActive:item.isActive}" @click="sort(item,$event)">{{item.name}}</a>
		</div>
	</div>
</template>

<script>
	import Bus from "@/assets/js/bus.js"
	export default {
		name: "shopHeader",
		data() {
			return {
				type: [{
					id: 0,
					name: "推荐",
					isActive: true
				}, {
					id: 1,
					name: "母婴",
					isActive: false
				}, {
					id: 2,
					name: "鞋包饰品",
					isActive: false
				}, {
					id: 3,
					name: "食品",
					isActive: false
				}, {
					id: 4,
					name: "数码家电",
					isActive: false
				}, {
					id: 5,
					name: "居家百货",
					isActive: false
				}, ],
				sortType: [{
					id: 1,
					name: "综合排序",
					isActive: true
				}, {
					id: 2,
					name: "销量优先",
					isActive: false
				}, {
					id: 3,
					name: "价格",
					isActive: false
				}]
			}
		},
		methods: {
			classify: function(item) {
				this.type.forEach(item => {
					item.isActive = false
				})
				item.isActive = !item.isActive
				Bus.$emit("val", item.id)
			},
			sort: function(item, event) {

				this.sortType.forEach(item => {
					item.isActive = false
				})
				item.isActive = !item.isActive
				Bus.$emit("sort", item.id)

				if(item.id == 3) {

					if(event.target.className.indexOf("up") != -1) {
						Bus.$emit("priceSort", "priceDESC")
						setTimeout(function() {
							event.target.className = "isActive down"
						}, 0)

					} else {
						Bus.$emit("priceSort", "priceASC")
						setTimeout(function() {
							event.target.className = "isActive up"
						}, 0)

					}
				}
			}
		}
	}
</script>

<style scoped>
	.header {
		height: 22%;
		max-height: 146.73px;
	}
	
	h1 {
		height: 30%;
		font-weight: normal;
		background: #fff;
		font-size: 1.6rem;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	
	.nav .active {
		background: #9A51FF;
	}
	
	.nav {
		background: #5D4285;
		height: 43%;
		overflow: hidden;
	}
	
	.nav .wrap {
		height: 68px;
		overflow: auto;
		white-space: nowrap;
		font-size: 0;
	}
	
	.sort .sortActive {
		color: #7B57C5;
	}
	
	.nav .wrap a {
		height: 100%;
		color: #FFFFFF;
		text-align: center;
		display: inline-block;
		width: 22%;
		font-size: 1.5rem;
		line-height: 5rem;
	}
	
	.sort {
		height: 27%;
	}
	
	.sort a {
		float: left;
		width: 33.3%;
		height: 100%;
		display: flex;
		align-items: center;
		justify-content: center;
		color: #000;
		font-size: 1.4rem;
	}
	
	.sort a:last-of-type {
		background: url(../assets/imgs/arrow-default.png) 70% 50% no-repeat;
	}
	
	.up {
		background: url(../assets/imgs/arrow-up.png) 70% 50% no-repeat!important
	}
	
	.down {
		background: url(../assets/imgs/arrow-down.png) 70% 50% no-repeat!important;
	}
</style>