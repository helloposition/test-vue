<!-- 工作室菜单栏 -->
<template>
    <div class="workMenu">
        <ul class="workMenu-ul">
            <li>
                <img :src="require('@/assets/images/work/gzs_icon_tztz.png')" alt="">
                <p>停诊通知</p>
            </li>
            <li>
                <img :src="require('@/assets/images/work/gzs_icon_tjhz.png')" alt="">
                <p>添加患者</p>
            </li>
            <li>
                <img :src="require('@/assets/images/work/gzs_icon_tjsy.png')" alt="">
                <p>推荐使用</p>
            </li>
        </ul>
        <div class="workMenu-bg"></div>
    </div>
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
.workMenu
    height 142px
    position relative
    padding 0 16px
    .workMenu-ul
        width 343px
        height 110px
        background #ffffff
        box-shadow 0px 0px 16px 0px rgba(12,17,55,0.15)
        border-radius 10px
        position relative
        z-index 2
        top 16px
        display flex
        align-items center
        justify-content space-between
        li
            width 33.33%
            text-align center
            img 
                width 39px
                height 40px
            p 
                font-size 13px
                padding-top 8px
                text-align center
    .workMenu-bg
        position absolute
        z-index 1
        width 100%
        background #ffffff
        left 0px
        bottom 0
        height 77px
</style>
