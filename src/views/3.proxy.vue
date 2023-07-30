<template>
	<div class='proxy'>
		<h3>3.响应式原理</h3>
		<p>Object.defineProperty</p>
		<button @click="changeValue">修改person信息</button>
		<p>----------------------------------------------------------</p>
		<p>Proxy对象</p>
	</div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
	setup() {
		let person = {
			name: '张三',
			age: 20
		}
		let p = {

		}
		Object.defineProperty(p, 'name', {
			get() {
				console.log('监听到getter:', person.name)
				return person.name
			},
			set(value) {
				console.log('监听到setter:', value)
				person.name = value
			}
		})

		const changeValue = () => {
			// p.name
			// p.name = '李四';
			p.job = 'web'
		}






		return {
			changeValue
		}
	}
})
</script>

<style lang='scss' scoped></style>
