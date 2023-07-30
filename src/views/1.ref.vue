<template>
  <div class='ref'>
    <h3>1.ref函数</h3>
    <p>不使用ref</p>
    <p>
      <span>当前交通工具：{{ noRefType }}</span>
      <button @click="changeNoRefType">修改交通工具</button>
    </p>
    <p>----------------------------------------------------------</p>
    <p>使用ref</p>
    <p>
      <span>当前交通工具：{{ refType }}</span>
      <button @click="changeRefType">修改交通工具</button>
    </p>
    <p>----------------------------------------------------------</p>
    <p>Boolean值</p>
    <p>
      <span>当前Boolean值：{{ refBoolean }}</span>
      <button @click="changeRefBoolean">修改Boolean值</button>
    </p>
    <p>----------------------------------------------------------</p>
    <p>Object值</p>
    <p>
      <span>当前Object值：{{ refObject }}</span>
      <button @click="changeRefObject">修改Object值</button>
    </p>
  </div>
</template>

<script>
import { defineComponent, ref, reactive, toRefs } from 'vue'
export default defineComponent({
  setup() {
    let noRefType = "汽车";
    const changeNoRefType = () => {
      console.log('----修改交通工具noRefType----');
      noRefType = '火车';
      console.log('noRefType:', noRefType);

    }


    let refType = ref("汽车");
    const changeRefType = () => {
      console.log('----修改交通工具refType----');
      // refType = '火车';
      refType.value = '飞机'
      console.log('refType:', refType);
    }

    let refBoolean = ref(true)
    const changeRefBoolean = () => {
      console.log('----修改Boolean值----');
      refBoolean.value = false
      console.log('refBoolean:', refBoolean);
    }

    let refObject = ref({
      brand: '宝马'
    })
    const changeRefObject = () => {
      console.log('----修改Object值----');
      refObject.value.brand = '大众'
      console.log('refObject:', refObject);
    }


    return {
      noRefType,
      refType,
      refBoolean,
      refObject,
      changeNoRefType,
      changeRefType,
      changeRefBoolean,
      changeRefObject
    }
  }


})
</script>

<style lang='scss' scoped></style>
