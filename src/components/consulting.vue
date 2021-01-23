<template>
    <div class='consulting'>
        <div class='title'>
            <p>咨询中</p>
            <span>全部订单<img :src="require('@/assets/images/hz_icon_triangle.png')" alt=""></span>
        </div>
        <ul class='list'>
            <li>
                <div class='list-top'>
                    <div>
                        <span></span>
                        <p>术后康复</p>
                    </div>
                    <img :src="require('@/assets/images/hz_img_card_studio.png')" alt="">
                </div>
                <div class='list-bottom'>
                    <div class='patient-img'>
                        <span></span>
                        <img :src="require('@/assets/images/register_img_tx.png')" alt="">
                    </div>
                    <div class='patient-msg'>
                        <div>
                            <p>王麻子</p>
                            <span>{{time|dataTime}}</span>
                        </div>
                        <p>医生你好医生你好医生你好医生你好医医生你好医生你好医生你好医生你好医</p>
                    </div>
                </div>
                <div class='list-time'>
                    <img :src="require('@/assets/images/hz_icon_card_time.png')" alt="">
                    <span>04-15 15:00至04-18 15:00 共3天</span>
                </div>
            </li>
             <li>
                <div class='list-top list-top-normal'>
                    <div>
                        <span></span>
                        <p>术后康复</p>
                    </div>
                </div>
                <div class='list-bottom'>
                    <div class='patient-img'>
                        <span></span>
                        <img :src="require('@/assets/images/register_img_tx.png')" alt="">
                    </div>
                    <div class='patient-msg'>
                        <div>
                            <p>王麻子</p>
                            <span>04-18 15:00</span>
                        </div>
                        <p>医生你好医生你好医生你好医生你好医医生你好医生你好医生你好医生你好医</p>
                    </div>
                </div>
                <div class='list-time'>
                    <img :src="require('@/assets/images/hz_icon_card_time.png')" alt="">
                    <span>04-15 15:00至04-18 15:00 共3天</span>
                </div>
            </li>
        </ul>
    </div>
</template>
<script>
//时间过滤插件
import moment from 'moment'
export default {
    data(){
        return{
            time:'2020-04-18 15:00'
        }
    },
    filters:{
        dataTime(e){
            return moment(e).format("YYYY年MM月DD日")
        }
    }
}
</script>
<style lang="stylus" scoped>
@import '~common/mixins.styl'
.consulting
    .title
        display flex
        align-items center
        justify-content space-between
        padding 30px 0 25px 0px
        p
            font-weight bold
            font-size 19px
        span
            color #0052D4
            img 
                width 6px
                height 10px
                margin-left 7px
    .list
        padding-bottom 30px
        li
            width 343px
            height 167px
            box-shadow:0px 0px 16px 0px rgba(12,17,55,0.1)
            border-radius 15px
            margin-bottom 25px
            .list-top
                background url('~@/assets/images/hz_img_card_team.png') no-repeat
                background-size 100% 100%
                height 45px
                display flex
                align-items center
                justify-content space-between
                padding 0 10px
                div
                    color #ffffff
                    display flex
                    align-items center
                    flex 1
                    p
                        ellipsis()
                        max-width 260px
                    span
                        display inline-block
                        width 4px
                        height 14px
                        background #ffffff
                        margin-right 5px
                img 
                    width 30px
                    height 30px
                    margin-left 10px
            .list-top-normal
                background url('~@/assets/images/hz_img_card_normal.png') no-repeat
                background-size 100% 100%
            .list-bottom
                padding 15px 10px 13px 10px
                display flex
                align-items center
                justify-content space-between
                .patient-img
                    width 53px
                    height 53px
                    border-radius 50%
                    position relative
                    span 
                        width 12px
                        height 12px
                        display inline-block
                        position absolute
                        right 0
                        top 0
                        background #E43E3E
                        border-radius 50%
                    img
                        width 53px
                        height 53px
                .patient-msg
                    flex 1
                    margin-left 12px
                    div
                        display flex
                        align-items center
                        justify-content space-between
                        padding-bottom 13px
                        p 
                            font-size 16px
                            color #202028
                        span 
                            font-size 12px
                            color #999DA5
                    p 
                        font-size 14px
                        color #999DA5
                        ellipsis()
                        max-width 260px
            .list-time
                font-size 14px
                color #B8BCC1
                display flex
                align-items center
                padding-left 10px
                padding-top 14px
                img 
                    width 14px
                    height 14px
                    margin-right 7px

</style>


