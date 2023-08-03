<!--
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-07-31 09:47:07
 * @LastEditors: 于振友
 * @LastEditTime: 2023-07-31 11:05:16
-->
<template>
  <div class='proxy'>
    <h3>13.provide 与 inject</h3>
    <h2>我是App组件（祖），{{ name }}--{{ price }}</h2>
    <Child />

  </div>
</template>

<script>
import { defineComponent, reactive, provide, toRefs } from 'vue'
import Child from './components/Child.vue'
export default defineComponent({
  components: { Child },
  setup() {

    let car = reactive(
      {
        name: '奔驰',
        price: '40W'
      })

    provide('car', car) //给自己的后代组件传递数据

    return {
      ...toRefs(car)
    }

  }
})
</script>

<style lang='scss' scoped></style>
