<!-- 发现菜单栏 -->
<template>
    <ul class='findMenu'>
        <li>
            <img :src="require('@/assets/images/find/found_icon_wztg.png')" alt="">
            <p>文章投稿</p>
        </li>
         <li>
            <img :src="require('@/assets/images/find/found_icon_yyzs.png')" alt="">
            <p>用药助手</p>
        </li>
         <li>
            <img :src="require('@/assets/images/find/found_icon_yxjsq.png')" alt="">
            <p>医学计算器</p>
        </li>
         <li>
            <img :src="require('@/assets/images/find/found_icon_pthd.png')" alt="">
            <p>平台活动</p>
        </li>
    </ul>
</template>

<script>
export default {
 data () {
 return {
 }
 }
}

</script>

<style lang='stylus' scoped>
.findMenu
    display flex
    align-items center
    justify-content space-between
    padding 23px 0
    li  
        width 25%
        text-align center
        img 
            width 61px
            height 61px
        p 
            font-size 13px
            text-align center
            position relative
            top -4px
</style>
