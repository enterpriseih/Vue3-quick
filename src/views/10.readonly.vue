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
    <h4>当前求和为：{{ sum }}</h4>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>

  </div>
</template>

<script>
import { defineComponent, reactive, toRef, ref,toRefs, watch, readonly, shallowReadonly } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    //数据
    let sum = ref(0)
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    person = readonly(person)
    // person = shallowReadonly(person)
    // sum = readonly(sum)
    // sum = shallowReadonly(sum)

    //返回一个对象（常用）
    return {
      sum,
      ...toRefs(person)
    }
  }
})
</script>

<style lang='scss' scoped></style>
