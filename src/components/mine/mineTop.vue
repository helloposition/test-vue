<template>
    <div class='mineTop'>
        <div class='notice'>
            <p>
                <span></span>
                <img :src="require('@/assets/images/mine/mine_icon_messeage.png')" alt="">
            </p>
        </div>
        <div class='center'>
            <div class='center-left'>
                <img :src="require('@/assets/images/mine/mine_icon_edit.png')" alt="">
                <div class='headerImg'>
                    <img :src="require('@/assets/images/mine/mine_img_tx.png')" alt="">
                </div>
            </div>
            <div class='center-middle'>
                <p class='name'>张三<span>未认证</span></p>
                <div class='hospital'>东大肛肠医院</div>
                <div class='subject'>肛肠科-主治医师</div>
            </div>
            <div class='center-bottom'>
                <img :src="require('@/assets/images/mine/mine_icon_qrcode.png')" alt="">
            </div>
        </div>
        <ul class='bottom'>
            <li>
                <img :src="require('@/assets/images/mine/myorder_icon_all.png')" alt="">
                <span>全部订单</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/myorder_icon_ing.png')" alt="">
                <span>咨询中</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/myorder_icon_wait.png')" alt="">
                <span>待接受</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/myorder_icon_done.png')" alt="">
                <span>已完成</span>
            </li>
            <li>
                <img :src="require('@/assets/images/mine/myorder_icon_close.png')" alt="">
                <span>已关闭</span>
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
.mineTop
    background url('~@/assets/images/mine/mine_img_background.png')center center no-repeat
    background-size 100% 100%
    height 213px
    padding 20px 16px 0 16px
    .notice
        text-align right 
        padding-bottom 18px
        p 
            display inline-block
            position relative
            span 
                width 7px
                height 7px
                display inline-block
                border-radius 50%
                background #E43E3E
                position absolute
                right -2px
                top -2px
            img 
                width 20px
                height 15px
    .center
        display flex
        align-items center
        justify-content space-between
        .center-left
            width 72px
            height 72px
            position relative
            &>img 
                width 14px
                height 14px
                position absolute
                right 3px
                top 1px
            .headerImg
                width 72px
                height 72px
                border-radius 50%
                overflow hidden
                img 
                    width 72px
                    height 72px
        .center-middle
            flex 1
            padding-left 10px
            color #ffffff
            font-size 14px
            .name
                font-size 18px
                padding-bottom 10px
                span 
                    margin-left 10px
                    display inline-block
                    background #FF723D
                    font-size 12px
                    padding 3px 4px
                    position relative
                    top -3px
                    border-radius 2px
            .hospital
                padding-bottom 6px
        .center-bottom
            img 
                width 25px
                height 25px
    .bottom
        height 110px
        width 343px
        background #ffffff
        border-radius 15px
        position relative
        top 50px
        box-shadow 0px 0px 16px 0px rgba(12,17,55,0.15)
        display flex
        align-items center
        justify-content space-around
        font-size 12px
        li 
            text-align center
            img 
                width 27px
                height 29px
            span 
                display block
                text-align center
                padding-top 11px
</style>
