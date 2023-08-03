<template>
	<div class="son">
		<h3>我是Son组件（孙），{{ car.name }}--{{ car.price }}</h3>
		<button @click="changeName">修改信息</button>
	</div>
</template>

<script>
import { inject, provide } from 'vue'
export default {
	name: 'Son',
	setup() {
		let car = inject('car')
		const changeName = () => {
			car.name = '宝马'
		}
		return { car, changeName }
	}
}
</script>

<style>
.son {
	background-color: orange;
	padding: 10px;
}
</style>