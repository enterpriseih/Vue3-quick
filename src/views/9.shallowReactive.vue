<!--
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-07-31 09:47:07
 * @LastEditors: 于振友
 * @LastEditTime: 2023-07-31 11:05:16
-->
<template>
  <div class='proxy'>
    <h3>9.shallowReactive 与 shallowRef</h3>
    <h4>{{ person }}</h4>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
    <hr>
    <h2>当前数值：{{ number }}</h2>
    <button @click="changeNumber">数字++</button>
    <hr>
    <h2>当前obj：{{ obj }}</h2>
    <button @click="changeObj">修改obj</button>

  </div>
</template>

<script>
import { defineComponent, reactive, toRef, toRefs, watch, shallowReactive, shallowRef } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {

    //数据
    let person = shallowReactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    let number = shallowRef(100)

    let obj = shallowRef({
      type: 'number',
      value: 100
    })


    const changeName = () => {
      person.name += '~'
    }

    const changeNumber = () => {
      console.log(number)
      number.value++
    }
    const changeObj = () => {
      console.log(obj)
      obj.type = 'string'
    }


    //返回一个对象（常用）
    return {
      person,
      number,
      changeName,
      changeNumber,
      changeObj,
      obj,
      ...toRefs(person)
    }
  }
})
</script>

<style lang='scss' scoped></style>
