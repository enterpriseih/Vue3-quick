<!--
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-07-31 09:47:07
 * @LastEditors: 于振友
 * @LastEditTime: 2023-07-31 11:05:16
-->
<template>
  <div class='proxy'>
    <h3>10.readonly 与 shallowReadonly</h3>
    <input type="text" v-model="keyword">
    <h2>{{ keyword }}</h2>
  </div>
</template>

<script>
import { defineComponent, customRef, ref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    // let keyword = ref('hello') //使用Vue准备好的内置ref
    //自定义一个myRef
    const myRef = (value, delay) => {
      let timer
      //通过customRef去实现自定义
      return customRef((track, trigger) => {
        return {
          get() {
            track() //告诉Vue这个value值是需要被“追踪”的
            return value
          },
          set(newValue) {
            clearTimeout(timer)
            timer = setTimeout(() => {
              value = newValue
              trigger() //告诉Vue去更新界面
            }, delay)
          }
        }
      })
    }
    let keyword = myRef('hello', 500) //使用程序员自定义的ref
    return {
      keyword
    }
  }
})
</script>

<style lang='scss' scoped></style>
