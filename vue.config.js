/*
 * @Description: 
 * @Author: 于振友
 * @Date: 2023-08-07 17:30:16
 * @LastEditors: 于振友
 * @LastEditTime: 2023-08-07 17:45:58
 */
// 引入插件
const AutoImport = require('unplugin-auto-import/webpack')
const Components = require('unplugin-vue-components/webpack')
const { ElementPlusResolver } = require('unplugin-vue-components/resolvers')

module.exports = {
  // configureWebpack为vue.config.js里的webpack配置
  configureWebpack: {
    devServer: {
      port: 8080,
      open: true
    },
    // plugins配置里加下面的代码
    plugins: [
      AutoImport({
        resolvers: [ElementPlusResolver()]
      }),
      Components({
        resolvers: [ElementPlusResolver()]
      })
    ]
  }
}
