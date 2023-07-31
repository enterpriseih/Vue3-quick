<!--
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-07-31 09:47:07
 * @LastEditors: 于振友
 * @LastEditTime: 2023-07-31 10:20:24
-->
<template>
  <div class='proxy'>
    <h3>3.响应式原理defineProptery与proxy</h3>
    <p>Object.defineProperty</p>
    <button @click="changeValue">修改person信息</button>
    <p>----------------------------------------------------------</p>
    <p>Proxy对象与Reflect</p>
    <button @click="changeProxyValue">修改Proxy信息</button>
    <p>----------------------------------------------------------</p>
    <!-- <div class="des">
      <h3>reactive对比ref</h3>
      <h4>● 从定义数据角度对比： </h4>
      <p>○ ref用来定义：基本类型数据。</p>
      <p>○ reactive用来定义：对象（或数组）类型数据。</p>
      <p>○ 备注：ref也可以用来定义对象（或数组）类型数据, 它内部会自动通过reactive转为代理对象。</p>
      <h4>● 从原理角度对比：</h4>
      <p>○ ref通过Object.defineProperty()的get与set来实现响应式（数据劫持）。</p>
      <p> ○ reactive通过使用Proxy来实现响应式（数据劫持）, 并通过Reflect操作源对象内部的数据。</p>
      <h4> ● 从使用角度对比：</h4>
      <p>○ ref定义的数据：操作数据需要.value，读取数据时模板中直接读取不需要.value。</p>
      <p> ○ reactive定义的数据：操作数据与读取数据：均不需要.value。</p>
    </div> -->
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
      p.name
      p.name = '李四';
      // p.job = 'web'
    }



    let p1 = new Proxy(person, {
      //有人读取p的某个属性时调用
      get(target, propName) {
        console.log('监听到getter:', propName)
        console.log("target:", target)
        return Reflect.get(target, propName)
      },
      //有人修改p的某个属性、或给p追加某个属性时调用
      set(target, propName, value) {
        console.log('监听到setter:', propName)
        return Reflect.set(target, propName, value)
      },
      //有人删除p的某个属性时调用
      deleteProperty(target, propName) {
        console.log('监听到deleteProperty:', propName)
        return Reflect.deleteProperty(target, propName)
      }
    })




    const changeProxyValue = () => {
      console.log(p1.name)
      p1.name = '李四';
      console.log("person:", person)
      delete p1.name
      console.log("person:", person)
      p1.job = "web";
      console.log("person:", person)
    }



    return {
      changeValue,
      changeProxyValue
    }
  }
})
</script>

<style lang='scss' scoped></style>
