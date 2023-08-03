<!--
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-07-31 09:47:07
 * @LastEditors: 于振友
 * @LastEditTime: 2023-07-31 11:05:16
-->
<template>
  <div class='proxy'>
    <h3>11.toRaw 与 markRaw</h3>
    <h4>当前求和为：{{ sum }}</h4>
    <button @click="sum++">点我++</button>
    <hr>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <h3 v-show="person.car">座驾信息：{{ person.car }}</h3>
    <button @click="name += '~'">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
    <button @click="showRawPerson">输出最原始的person</button>
    <button @click="addCar">给人添加一台车</button>
    <button @click="changePrice">换价格</button>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, toRefs,toRaw , markRaw } from 'vue'
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

    const showRawPerson = () => {
      const p = toRaw(person)
      p.age++
      console.log(p)
    }

    const addCar = () => {
      let car = { name: '奔驰', price: 40 }
      person.car = markRaw(car)
    }

    const changePrice = () => {
      person.car.price++
      console.log(person.car.price)
    }

    //返回一个对象（常用）
    return {
      sum,
      person,
      ...toRefs(person),
      showRawPerson,
      addCar,
      changePrice
    }
  }
})
</script>

<style lang='scss' scoped></style>
