<!--个人中心底部 -->
<template>
    <div class='mineBottom'>
        <div class='title'>常用功能</div>
        <ul>
            <li>
                <img :src="require('@/assets/images/mine/mine_icon_income.png')" alt="">
                <span>我的收入</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/mine_icon_survice.png')" alt="">
                <span>服务设置</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/mine_icon_disease.png')" alt="">
                <span>擅长病症</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/mine_icon_card.png')" alt="">
                <span>申请名片</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/mine_icon_time.png')" alt="">
                <span>门诊时间</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/mine_icon_collection.png')" alt="">
                <span>我的收藏</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/mine_icon_conact.png')" alt="">
                <span>联系客服</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/mine_icon_system.png')" alt="">
                <span>系统设置</span>
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
.mineBottom
    padding 90px 0px 50px 0px
    .title
        color #363A43
        font-size 19px
        font-weight bold
        padding 0 16px 25px 16px
    ul
        display flex
        align-items center
        justify-content space-between
        flex-wrap wrap
        font-size 13px
        li 
            width 25%
            display flex
            flex-direction column
            margin-bottom 25px
            justify-content center
            align-items center
            img 
                width 37px
                height 32px
            span 
                padding-top 10px
</style>
