<template>
    <div class='search'>
        <input type="text" placeholder="请输入患者姓名、备注信息查找"/>
        <img :src="require('@/assets/images/icon_searh.png')" alt="">
    </div>
</template>
<script>
export default {
   data(){
       return{
           
       }
   }
}
</script>
<style lang='stylus' scoped>
.search
    width 343px
    height 44px
    background #F7F9FA
    border-radius 22px
    display flex
    align-items  center
    justify-content space-between
    margin-bottom 20px
    input 
        background none 
        font-size 15px
        border none 
        flex 1
        outline none
        padding-left 15px
        &::placeholder
            color #999999
    img 
        width 20px
        height 20px
        margin-right 15px
        margin-left 15px
</style>



