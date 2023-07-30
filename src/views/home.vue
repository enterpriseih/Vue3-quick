<template>
  <div class=''> 

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

</style>
