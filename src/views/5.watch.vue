<!--
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-07-31 09:47:07
 * @LastEditors: 于振友
 * @LastEditTime: 2023-07-31 11:05:16
-->
<template>
  <div class='proxy'>
    <h3>5.监听watch</h3>

    <h4>当前值为：{{ sum }}</h4>
    <button @click="sum++">++</button>
    <hr>
    <h2>当前的信息为：{{ msg }}</h2>
    <button @click="msg += '！'">修改信息</button>
    <hr>
    <h2>姓名：{{ person.name }}</h2>
    <h2>年龄：{{ person.age }}</h2>
    <h2>薪资：{{ person.job.j1.salary }}K</h2>
    <button @click="person.name += '!'">修改姓名</button>
    <button @click="person.age++">增长年龄</button>
    <button @click="person.job.j1.salary++">涨薪</button>
  </div>
</template>

<script>
import { defineComponent, reactive, ref, computed, watch } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    //数据
    let sum = ref(0)
    let msg = ref('你好啊')
    let person = reactive({
      name: '张三',
      age: 18,
      job: {
        j1: {
          salary: 20
        }
      }
    })

    //情况一：监视ref所定义的一个响应式数据
    watch(sum, (newValue, oldValue) => {
      console.log('sum变了', newValue, oldValue)
    })

    //情况二：监视ref所定义的多个响应式数据
    watch([sum, msg], (newValue, oldValue) => {
      console.log('sum或msg变了', newValue, oldValue)
    }, { immediate: true })

    /* 
      情况三：监视reactive所定义的一个响应式数据的全部属性
          1.注意：此处无法正确的获取oldValue
          2.注意：强制开启了深度监视（deep配置无效）
    */
    watch(person, (newValue, oldValue) => {
      console.log('person变化了', newValue, oldValue)
    }, { deep: false }) //此处的deep配置无效

    //情况四：监视reactive所定义的一个响应式数据中的某个属性
    watch(() => person.name, (newValue, oldValue) => {
      console.log('person的name变化了', newValue, oldValue)
    })

    //情况五：监视reactive所定义的一个响应式数据中的某些属性
    watch([() => person.name, () => person.age], (newValue, oldValue) => {
      console.log('person的name或age变化了', newValue, oldValue)
    })

    //特殊情况
    /* watch(()=>person.job,(newValue,oldValue)=>{
      console.log('person的job变化了',newValue,oldValue)
    },{deep:true}) //此处由于监视的是reactive定义的对象中的某个属性，所以deep配置有效 */


    //返回一个对象（常用）
    return {
      sum,
      msg,
      person
    }
  }
})
</script>

<style lang='scss' scoped></style>
