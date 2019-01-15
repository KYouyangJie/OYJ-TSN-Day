<template>
	<div class="shopping">
		<header>
			<p @click="goBack">返回</p>
			<h1>购物清单</h1>
			<p @click="notEdit=!notEdit">编辑</p>
		</header>
		<main>
			<div v-for="item in goods" :key="item.id">
				<p><span @click="select(item)" :class="{active:item.isSelected}"></span></p>
				<p><img :src="item.img" /></p>
				<p><span>{{item.name | limitNum}}</span><span>¥{{item.price}}<br /></span><span>库存{{item.stock}}</span></p>
				<p><button @click="increment(item)">+</button><span>{{item.num}}</span><button @click="decrement(item)">-</button></p>
			</div>
		</main>
		<footer>
			<div><span :class="{active:computePrice()}" @click="allSelected"></span><span>全选</span></div>
			<div v-if="notEdit"><span>合计:</span><span>¥ {{totalPrice}}</span><span>去结算({{totalNum()}})</span></div>
			<div v-else="notEdit" class="delete"><span @click="deleteGoods">删除({{totalNum()}})</span></div>
		</footer>
	</div>
</template>

<script>
	import { getStore, setStore, deleteStore } from "@/assets/js/store"

	export default {
		name: "shoppingCart",
		data: function() {
			return {
				goods: getStore(),
				isAllSelected: false,
				totalPrice: 0,
				notEdit: true
			}
		},
		methods: {
			goBack: function() {
				this.$router.go(-1)
			},
			select: function(item) {
				item.isSelected = !item.isSelected

				setStore(this.goods)
			},
			computePrice: function() {
				var num = 0;
				let totalPrice = 0;

				for(var i = 0; i < this.goods.length; i++) {
					if(this.goods[i].isSelected) {
						totalPrice += this.goods[i].price * this.goods[i].num
						num++;
					}
				}
				this.totalPrice = totalPrice;
				if(num == this.goods.length && num) {
					this.isAllSelected = true
				} else {
					this.isAllSelected = false
				}
				return this.isAllSelected
			},
			increment: function(item) {
				item.num++
					setStore(this.goods)

			},
			decrement: function(item) {
				item.num--
					this.goods.forEach((item, index) => {
						if(!item.num) {
							this.goods.splice(index, 1)
						}
					})
				setStore(this.goods)
			},
			allSelected: function() {

				this.isAllSelected = !this.isAllSelected
				this.goods.forEach(item => {
					if(this.isAllSelected) {
						item.isSelected = true
					} else {
						item.isSelected = false
					}
				})
				setStore(this.goods)
			},
			totalNum: function() {
				let num = 0;
				this.goods.forEach(item => {
					if(item.isSelected) {
						num += item.num
					}

				})
				return num
			},
			deleteGoods: function() {
				let newGoods = []
				this.goods.forEach((item, index) => {

					if(!item.isSelected) {
						newGoods.push(item)
					}
				})
				this.goods = newGoods;

				setStore(this.goods)

			}
		}

	}
</script>

<style>
	@import "../assets/css/shoppingCart.css"
</style>