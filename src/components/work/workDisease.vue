<!-- 擅长病症 -->
<template>
    <div class="workDisease">
        <div class="work-title">
            <p class="title">擅长病症</p>
            <span>编辑</span>
        </div>
        <ul class="disease">
            <li>
                心dfwf脏病
            </li>
            <li>
                心ww脏病
            </li>
            <li>
                心eee脏病
            </li>
            <li>
                心tttt脏病
            </li>
            <li>
                心ccc脏病
            </li>
            <li>
                心脏病
            </li>
        </ul>
    </div>
</template>

<script>
export default {
 data () {
 return {
 }
 },
 components:{
 }
}

</script>

<style lang='stylus' scoped>
.workDisease
    background #ffffff
    padding 23px 16px 0 16px
    .work-title
        display flex
        align-items center
        justify-content space-between
        .title
            font-size 19px
            color #363A43
            font-weight bold
        span 
            color #0052D4
    .disease
        padding 25px 0px 10px 0px
        display flex
        flex-wrap wrap
        align-items center
        li 
            color #765AFF
            font-size 15px
            background #E2E8FF
            padding 4px 14px
            margin-right 15px
            border-radius 12px
            margin-bottom 15px
</style>
