<!-- 工作室业务 -->
<template>
    <div class="work-service">
        <p class="title">工作室咨询业务</p>
        <ul class="list">
            <li>
                <div class="list-left">
                    <img :src="require('@/assets/images/work/gzs_icon_tw.png')" alt="">
                    <span>图文咨询</span>
                </div>
                <div class="list-right">
                    已开通 >
                </div>
            </li>
            <li>
                <div class="list-left">
                    <img :src="require('@/assets/images/work/gzs_icon_dh.png')" alt="">
                    <span>电话咨询</span>
                </div>
                <div class="list-right">
                    立即开通 >
                </div>
            </li>
            <li>
                <div class="list-left">
                    <img :src="require('@/assets/images/work/gzs_icon_sp.png')" alt="">
                    <span>视频咨询</span>
                </div>
                <div class="list-right">
                    立即开通 >
                </div>
            </li>
        </ul>
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
.work-service
    padding 0 16px
    padding-bottom 50px
    background #ffffff
    .title
        font-size 19px
        font-weight bold
        color #363A43
        padding-bottom 25px
    .list
        li 
            height 70px
            width 343px
            display flex
            align-items center
            justify-content space-between
            box-shadow:0px 0px 16px 0px rgba(12,17,55,0.1);
            border-radius 5px
            margin-bottom 15px
            .list-left
                font-size 16px
                padding-left 10px
                display flex
                align-items center
                img 
                    width 31px 
                    height 31px
                    margin-right 10px
            .list-right
                padding-right 10px
                font-size 16px
                color #999DA5
</style>
