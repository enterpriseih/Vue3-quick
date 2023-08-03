<!--
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-07-31 09:47:07
 * @LastEditors: 于振友
 * @LastEditTime: 2023-07-31 11:05:16
-->
<template>
  <div class='proxy'>
    <h3>7.hooks</h3>
    <h4>什么是hook？—— 本质是一个函数，把setup函数中使用的Composition API进行了封装。 </h4>
    <h4>类似于vue2.x中的mixin。 </h4>
    <h4>自定义hook的优势: 复用代码, 让setup中的逻辑更清楚易懂</h4>
    <hr>
    <h2>当前点击时鼠标的坐标为：x：{{ point.x }}，y：{{ point.y }}</h2>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
import usePoint from '../hooks/usePoint'
export default defineComponent({
  setup() {

    const point = usePoint()

    //返回一个对象（常用）
    return {
      point
    }
  }
})
</script>

<style lang='scss' scoped></style>
