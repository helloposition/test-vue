<template>
  <mt-tabbar v-model="message" class='msg'>
    <mt-tab-item id="1">
      <img slot="icon" :src="this.atabs[0]">
      患者
    </mt-tab-item>
    <mt-tab-item id="2">
      <img slot="icon" :src="this.atabs[1]">
      工作室
    </mt-tab-item>
    <mt-tab-item id="3">
      <img slot="icon" :src="this.atabs[2]">
      发现
    </mt-tab-item>
    <mt-tab-item id="4">
      <img slot="icon" :src="this.atabs[3]">
      我的
    </mt-tab-item>
  </mt-tabbar>
</template>

<script>
export default {
  name:'tabber',
  data () {
    return {
      message: this.selected,
      atabs:this.tabs
    }
  },
  props:{
    selected:String,
    tabs:Array
  },
  watch:{
    message:function(val,oldVal){
      switch(val){
        case'1':
          this.$router.push('/');
        break;
        case'2':
          this.$router.push('/work');
        break;
        case'3':
          this.$router.push('/find');
        break;
        case'4':
          this.$router.push('/mine');
        break;
      }
    }
  }
}
</script>

<style scoped lang='stylus'>
.msg
  position fixed
  bottom 0
  right 0
  left 0
</style>
