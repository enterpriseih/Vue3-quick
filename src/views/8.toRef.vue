<!--
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-07-31 09:47:07
 * @LastEditors: 于振友
 * @LastEditTime: 2023-07-31 11:05:16
-->
<template>
  <div class='proxy'>
    <h3>8.toRef与toRefs</h3>
    <h4>{{ person }}</h4>
    <h2>姓名：{{ name }}</h2>
    <h2>年龄：{{ age }}</h2>
    <h2>薪资：{{ job.j1.salary }}K</h2>
    <button @click="changeName">修改姓名</button>
    <button @click="age++">增长年龄</button>
    <button @click="job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { defineComponent, reactive, toRef, toRefs, watch } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {

    //数据
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })
    const changeName = () => {
      person.name += '~'
      console.log('name1:', name1)
      console.log('name2:', name2)

    }


    const name1 = person.name
    console.log('name1:', name1)

    const name2 = toRef(person, 'name')
    console.log('name2:', name2)

    const x = toRefs(person)
    console.log('******', x)

    //返回一个对象（常用）
    return {
      person,
      // name:toRef(person,'name'),
      // age:toRef(person,'age'),
      // salary:toRef(person.job.j1,'salary'),
      ...toRefs(person),
      changeName
    }
  }
})
</script>

<style lang='scss' scoped></style>
