<!-- 发现精选文章 -->
<template>
    <div class='findArtical'>
        <p class="title">精选文章</p>
        <ul class="find-ul">
            <li>
                <div class="find-img">
                    
                </div>
                <div class="find-msg">
                    <p>谷型糖尿病密切相关病密切相关</p>
                    <div>
                        <span>作者：王益平</span>
                        <span>2018-11-28</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="find-img">
                    
                </div>
                <div class="find-msg">
                    <p>谷胱甘肽与2型糖尿病密切相关病密切谷胱甘肽与2型糖尿病密切相关病密切相关</p>
                    <div>
                        <span>作者：王益平</span>
                        <span>2018-11-28</span>
                    </div>
                </div>
            </li>
            <li>
                <div class="find-img">
                    
                </div>
                <div class="find-msg">
                    <p>谷型糖尿病密切相关病密切相关</p>
                    <div>
                        <span>作者：王益平</span>
                        <span>2018-11-28</span>
                    </div>
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
@import '~common/mixins.styl'
    .findArtical
        padding 27px 16px 50px 16px
        .title
            font-size 19px
            font-weight bold
            padding-bottom 25px
        .find-ul
            font-size 12px
            color #999DA5
            li
                height 92px
                position relative
                margin-bottom 15px
                .find-img
                    background #D5E1FC
                    width 84px
                    height 84px
                    border-radius 15px
                .find-msg
                    height 84px
                    box-shadow:0px 5px 10px 0px rgba(12,17,55,0.07);
                    position absolute
                    bottom 0
                    left 10px
                    right 0
                    z-index -1
                    border-radius 15px
                    padding-left 85px
                    padding-right 12px
                    p 
                        font-size 14px
                        color #202028
                        padding 12px 0px 0px 0
                        line-height 20px
                        height 36px
                        ellipsisMany(2)
                    div
                        display flex
                        align-items center
                        justify-content space-between
                        padding-top 10px
                        

</style>
