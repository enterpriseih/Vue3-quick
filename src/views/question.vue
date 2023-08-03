<template>
  <div class='question'>
    <h3>问题</h3>
    <h4>使用vue框架有什么好处，如何构建一个vue项目工程</h4>
    <h4>1.Vue3中ref和reactive的作用与区别?</h4>
    <h4>2.Vue3中响应式是如何实现的，解决了Vue2中哪些问题</h4>
    <h4>3.computed和watch有什么区别，都在什么情况下使用？</h4>
    <h4>4.Vue3中常用的生命周期有哪些，有哪些变化</h4>
    <h4>5.Vue3中hooks函数有什么作用，好处是什么？</h4>
    <h4>6.Vue还知道哪些常用的组合式API</h4>
    <h4>7.学习完Vue3之后有什么收获，对前端开发有什么新认识，有什么启发</h4>
  </div>
</template>

<script>
import { defineComponent, reactive, toRefs } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    let state = reactive({

    })
    let router = useRouter();
    let stateAsRefs = toRefs(state);

    return {

      ...stateAsRefs,
    }
  }
})
</script>

<style lang='scss' scoped></style>
