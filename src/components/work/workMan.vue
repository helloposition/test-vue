<!-- 工作室成员 -->
<template>
    <div class="work-man">
        <div class="work-title">
            <p class="title">工作室成员</p>
            <span>查看全部<img :src="require('@/assets/images/hz_icon_triangle.png')" alt=""></span>
        </div>
        <ul class="list">
            <li>
                <div class="list-img">
                    <img class='leader-img' :src="require('@/assets/images/work/gzs_img_lxzj.png')" alt="">
                </div>
                <div class="list-msg">
                    <p class="list-name">廖化样</p>
                    <span>儿科</span>
                    <p class="list-subject">副主任医师</p>
                </div>
            </li>
            <li>
                <div class="list-img">
                    
                </div>
                <div class="list-msg">
                    <p class="list-name">廖化样</p>
                    <span>儿科</span>
                    <p class="list-subject">副主任医师</p>
                </div>
            </li>
            <li>
                <div class="list-img">
                    
                </div>
                <div class="list-msg">
                    <p class="list-name">廖化样</p>
                    <span>儿科</span>
                    <p class="list-subject">副主任医师</p>
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
.work-man
    background #ffffff
    padding 0px 16px 40px 16px
    .work-title
        display flex
        align-items center
        justify-content space-between
        padding-bottom 25px
        .title
            font-size 19px
            color #363A43
            font-weight bold
        span 
            color #0052D4
            img 
                width 6px
                height 10px
                margin-left 7px
    .list
        display flex
        align-items center
        justify-content space-between
        li 
            height 180px
            width 105px
            font-size 12px
            .list-img
                background #D9EEFF
                border-radius 10px 10px 0px 0px
                height 105px
                position relative
                .leader-img
                    width 29.5px
                    height 49.5px
                    position absolute
                    top -7px
                    left 5.5px
            .list-msg
                border-radius 0px 0px 10px 10px
                border 1px solid #EDEDED
                border-top none
                height 75px
                text-align center
                .list-name
                    font-size 15px
                    font-weight bold
                    padding-top 11px
                span 
                    display inline-block
                    padding 6px 0
                .list-subject
                    color #999DA5
</style>
