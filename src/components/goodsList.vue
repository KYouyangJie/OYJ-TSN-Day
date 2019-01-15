<template>
	<div class="goodsList">
		<ul>
			<li v-for="item in classify()">
				<div class="leftContent">
					<img :src="item.img" />
				</div>
				<div class="rightContent">
					<P>{{item.name}}</P>
					<P>¥{{item.price}}</P>
					<P>{{item.sales}}人付款</P>
					<button @click="add(item)">＋</button>
				</div>
			</li>
		</ul>
		<router-link to="/shoppingCart"><img src="../assets/imgs/shoppingcart_26px_41848_easyicon.net.png"></router-link>
	</div>

</template>
<style>
	@import "../assets/css/goodsList.css"
</style>

<script>
	import { setStore, getStore, deleteStore } from "@/assets/js/store.js"
	import Bus from "@/assets/js/bus.js"

	export default {
		name: "goodsList",
		data: function() {
			return {
				goods: [{
					id: 1,
					name: 'Beats EP头戴式耳机',
					price: 558,
					type: 4,
					stock: 128,
					sales: 1872,
					isSelected: false,
					num: 1,
					img: 'http://img11.360buyimg.com/n1/s528x528_jfs/t3109/194/2435573156/46587/e0e867ac/57e10978N87220944.jpg!q70.jpg'
				}, {
					id: 2,
					name: '雀巢（Nestle）高钙成人奶粉',
					price: 60,
					type: 3,
					stock: 5,
					sales: 2374,
					isSelected: false,
					num: 1,
					img: 'http://m.360buyimg.com/babel/jfs/t5197/28/400249159/97561/304ce550/58ff0dbeN88884779.jpg!q50.jpg.webp'
				}, {
					id: 3,
					name: '煎炒烹炸一锅多用',
					price: 216,
					type: 5,
					stock: 2,
					sales: 351,
					ishot: true,
					isSelected: false,
					num: 1,
					img: 'http://gw.alicdn.com/tps/TB19OfQRXXXXXbmXXXXL6TaGpXX_760x760q90s150.jpg_.webp'
				}, {
					id: 4,
					name: 'ANNE KLEIN 潮流经典美式轻奢',
					price: 585,
					type: 2,
					stock: 465,
					sales: 8191,
					isSelected: false,
					num: 1,
					img: 'http://gw.alicdn.com/tps/TB1l5psQVXXXXcXaXXXL6TaGpXX_760x760q90s150.jpg_.webp'
				}, {
					id: 5,
					name: '乐高EV3机器人积木玩具',
					price: 3099,
					type: 1,
					stock: 154,
					sales: 165,
					isSelected: false,
					num: 1,
					img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t6490/168/1052550216/653858/9eef28d1/594922a8Nc3afa743.jpg!q50.jpg'
				}, {
					id: 6,
					name: '全球购 路易威登（Louis Vuitton）新款女士LV印花手袋 M41112',
					price: 10967,
					type: 2,
					stock: 12,
					sales: 6,
					isSelected: false,
					num: 1,
					img: 'https://m.360buyimg.com/n1/s220x220_jfs/t1429/17/1007119837/464370/310392f4/55b5e5bfN75daf703.png!q70.jpg'
				}, {
					id: 7,
					name: 'Kindle Paperwhite3 黑色经典版电纸书',
					price: 805,
					type: 4,
					stock: 3,
					sales: 395,
					isSelected: false,
					num: 1,
					img: 'http://img12.360buyimg.com/n1/s528x528_jfs/t4954/76/635213328/51972/ec4a3c3c/58e5f717N4031d162.jpg!q70.jpg'
				}, {
					id: 8,
					name: 'DELSEY 男士双肩背包',
					price: 269,
					type: 2,
					stock: 18,
					sales: 69,
					ishot: true,
					isSelected: false,
					num: 1,
					img: 'http://gw.alicdn.com/tps/LB1HL0mQVXXXXbzXVXXXXXXXXXX.png'
				}, {
					id: 9,
					name: '荷兰 天赋力 Herobaby 婴儿配方奶粉 4段 1岁以上700g',
					price: 89,
					type: 1,
					stock: 36,
					sales: 1895,
					isSelected: false,
					num: 1,
					img: 'http://m.360buyimg.com/babel/s330x330_jfs/t4597/175/4364374663/125149/4fbbaf21/590d4f5aN0467dc26.jpg!q50.jpg.webp'
				}, {
					id: 10,
					name: '【全球购】越南acecook河粉牛肉河粉特产 速食即食方便面粉丝 牛肉河粉米粉65克*5袋',
					price: 19.9,
					type: 3,
					stock: 353,
					sales: 3041,
					ishot: true,
					isSelected: false,
					num: 1,
					img: 'https://m.360buyimg.com/mobilecms/s357x357_jfs/t3169/228/5426689121/95568/d463e211/586dbf56N37fcd503.jpg!q50.jpg'
				}, {
					id: 11,
					name: '正品FENDI/芬迪女包钱包女长款 百搭真皮钱夹 女士小怪兽手拿包',
					price: 3580,
					type: 2,
					stock: 5,
					sales: 18,
					isSelected: false,
					num: 1,
					img: 'http://img.alicdn.com/imgextra/i3/TB16avCQXXXXXcsXpXXXXXXXXXX_!!0-item_pic.jpg_400x400q60s30.jpg_.webp'
				}],
				storeData: getStore(),
				classifyGoods: [],
				type: 0,
				sortType: 1,
				priceSort:"default"
			}

		},
		methods: {
			add: function(item) {
				
				for(var i = 0; i < this.storeData.length; i++) {
					if(this.storeData[i].id == item.id) {
						item.num++
						setStore(this.storeData)
						return
					}
				}
				this.storeData.push(item)
				setStore(this.storeData)
			},
			classify: function() {
				let arr = [];
				let goods = this.goods.slice();
				let priceASC = true

				goods.forEach(item => {
					if(item.type == this.type) {
						arr.push(item)
					}
				})

				if(!this.type) {
					arr = goods
				}
				if(this.sortType == 1 && !this.type) {

					arr = goods

				} else if(this.sortType == 2) {

					for(let i = 0; i < arr.length - 1; i++) {
						for(let j = 0; j < arr.length; j++) {
							if(j == arr.length - 1) {
								continue
							}
							if(arr[j].sales < arr[j + 1].sales) {

								var obj = arr[j];
								arr[j] = arr[j + 1]
								arr[j + 1] = obj
							}
						}

					}

				} else {

					for(let i = 0; i < arr.length - 1; i++) {
						for(let j = 0; j < arr.length; j++) {
							if(j == arr.length - 1) {
								continue
							}
							if(this.priceSort=="priceASC") {

								if(arr[j].price > arr[j + 1].price) {

									var obj = arr[j];
									arr[j] = arr[j + 1]
									arr[j + 1] = obj
								}
							} else {

								if(arr[j].price < arr[j + 1].price) {

									var obj = arr[j];
									arr[j] = arr[j + 1]
									arr[j + 1] = obj
								}
							}

						}

					}



				}

				return arr
			},

		},
		mounted: function() {
			var vm = this
			Bus.$on("val", data => {

				vm.type = data
			})
			Bus.$on("sort", data => {
				vm.sortType = data
			})
			Bus.$on("priceSort",data=>{
				vm.priceSort = data
			})
		}

	}
</script>