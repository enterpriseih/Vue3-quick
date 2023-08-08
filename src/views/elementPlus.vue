<template>
  <div class='elementPlus'>
    <h3>Element Plus</h3>
    <h4>一.安装</h4>
    <code>
                  npm install element-plus --save
                </code>
    <code>
                  cnpm install element-plus --save
                </code>
    <h4>二.引用</h4>
    <p>1.全量引用，mian.js</p>
    <code>
                  import 'element-plus/dist/index.css'
                </code>
    <code>
                  import App from './App.vue'
                </code>
    <p>2.按需引用</p>
    <code>
                  npm install -D unplugin-vue-components unplugin-auto-import
                </code>


    <el-row>
      <el-col :span="24">
        <div class="grid-content bg-purple-dark"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="12">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="12">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="8">
        <div class="grid-content bg-purple"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="6">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple"></div>
      </el-col>
      <el-col :span="4">
        <div class="grid-content bg-purple-light"></div>
      </el-col>
    </el-row>

    <el-row>
      <el-button>默认按钮</el-button>
      <el-button type="primary">主要按钮</el-button>
      <el-button type="success">成功按钮</el-button>
      <el-button type="info">信息按钮</el-button>
      <el-button type="warning">警告按钮</el-button>
      <el-button type="danger">危险按钮</el-button>
    </el-row>
    <div style="font-size: 20px;">
      <!-- SVG icon 自身不带任何属性，你需要额外提供属性。-->
      <edit style="width: 1em; height: 1em; margin-right: 8px;" />
      <share style="width: 1em; height: 1em; margin-right: 8px;" />
      <delete style="width: 1em; height: 1em; margin-right: 8px;" />
      <search style="width: 1em; height: 1em; margin-right: 8px;" />


    </div>
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

<style lang='scss' scoped>
.elementPlus {
  .el-row {
    margin-bottom: 20px
  }
}
</style>
