<!--
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-07-31 09:47:07
 * @LastEditors: 于振友
 * @LastEditTime: 2023-07-31 11:05:16
-->
<template>
  <div class='proxy'>
    <h3>4.计算属性computed</h3>
    <p>当前交通工具品牌：{{ brand }}</p>
    <p>当前交通工具：{{ type }}</p>
    <p>当前交通工具品牌+类型：{{ brandType }}</p>
    <button @click="changeType">修改品牌信息</button>
    <p>----------------------------------------------------------</p>
    <p>当前交通工具品牌：{{ brand1 }}</p>
    <p>当前交通工具：{{ tools }}</p>
    <p>当前交通工具品牌+类型：{{ brandTools }}</p>

    <button @click="changeTools">修改品牌和类型信息</button>

  </div>
</template>

<script>
import { defineComponent, reactive, ref, computed } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup() {
    let brand = ref('宝马');
    let type = ref('汽车');
    let brandType = computed(() => {
      return brand.value + '-' + type.value
    })
    const changeType = () => {
      brand.value = '大众'
      console.log('brandType:', brandType)
    }

    let brand1 = ref('奔驰');
    let tools = ref('汽车');
    let brandTools = computed(() => {
      return brand1.value + '-' + tools.value
    })
    const changeTools = () => {
      brand1.value = '和谐号';
      tools.value = '高铁'
      console.log('brandTools:', brandTools)
    }

    return {
      brand,
      brand1,
      type,
      tools,
      brandType,
      brandTools,
      changeType,
      changeTools
    }
  }
})
</script>

<style lang='scss' scoped></style>
