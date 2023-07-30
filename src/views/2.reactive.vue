<template>
  <div class='reactive'>
    <h3>2.reactive函数</h3>

    <p>不使用reactive</p>
    <p>
    <p>当前个人信息：</p>
    <p>姓名:{{ person.name }}</p>
    <p>年龄:{{ person.age }}</p>
    <button @click="changePerson">修改person信息</button>
    </p>

    <p>----------------------------------------------------------</p>

    <p>使用reactive</p>
    <p>
    <p>当前个人信息：</p>
    <p>姓名:{{ reactivePerson.name }}</p>
    <p>年龄:{{ reactivePerson.age }}</p>
    <p>工作:{{ reactivePerson.job.type }}</p>
    <p>地点:{{ reactivePerson.job.base }}</p>
    <button @click="changeReactivePerson">修改reactivePerson信息</button>
    </p>


  </div>
</template>

<script>
import { defineComponent, Reactive, reactive, toReactives } from 'vue'
export default defineComponent({
  setup() {
    let person = {
      name: '张三',
      age: 20,
    };
    const changePerson = () => {
      console.log('----修改person信息----');
      person.name = '李四';
      person.age = 30;
      console.log('person:', person);

    }


    let reactivePerson = reactive({
      name: '张三',
      age: 20,
      job: {
        type: 'web前端',
        base: '长春'
      }
    })
    const changeReactivePerson = () => {
      console.log('----修改reactivePerson信息----');
      reactivePerson.name = '李四';
      reactivePerson.age = 30;
      reactivePerson.job.base = '上海';
      console.log('reactivePerson:', reactivePerson);

    }





    return {
      person,
      reactivePerson,
      changePerson,
      changeReactivePerson
    }
  }


})
</script>

<style lang='scss' scoped></style>
