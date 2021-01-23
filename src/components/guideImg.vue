<template>
    <div class='guideImg'>
        <router-link :to='{path:"/useHelp"}'>
            <div class='guide-bg'>不清楚怎么使用？点我查看使用帮助</div>
        </router-link>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang='stylus'>
.guideImg
    .guide-bg
        width 100%
        height 56px
        background url('~@/assets/images/hz_img_help.png') no-repeat
        background-size 100% 100%
        display flex
        align-items center
        justify-content center
        color #ffffff
        font-size 17px
</style>


