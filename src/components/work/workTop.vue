<!-- 工作室顶部信息 -->
<template>
    <div class="workTop">
        <div class='work-name'>
            <div class="work-name-left">
                <span>廖华洋专家团队</span>
                <img :src="require('@/assets/images/work/gzs_icon_bj.png')" alt="">
            </div>
            <div class="work-name-right">
                <img :src="require('@/assets/images/work/gzs_icon_change.png')" alt="">
                <span>切换团队</span>
            </div>
        </div>
        <div class="work-msg">
            <p :class="isOk?'active-msg':''" ref="msg">{{msg}}</p>
            <img :class="isOk?'':'active-rotate'" @click="showMsg()" v-if="imgShow" :src="require('@/assets/images/work/gzs_icon_open.png')" alt="">
        </div>
    </div>
</template>

<script>
export default {
 data () {
    return {
        imgShow:false,
        isOk:true,
        msg:'简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介简介介简介简介简介简介'
    }
 },
 mounted(){
     this.workSet()
 },
 methods:{
     workSet(){
         let height = this.$refs.msg.offsetHeight
         let scrollHeight = this.$refs.msg.scrollHeight
         if(scrollHeight>height){
             this.imgShow = true
         }
    
     },
     showMsg(){
         if(this.isOk){
            this.isOk = false
         }else{
             this.isOk = true
         }
         
     }
 }
}

</script>

<style lang='stylus' scoped>
@import '~common/mixins.styl';
    .workTop
        color #ffffff
        padding 0 16px
        .work-name
            display flex
            align-items center
            justify-content space-between
            padding-bottom 25px
            .work-name-left
                font-size 19px
                img 
                    width 18px
                    height 18px
                    margin-left 6px
                    position relative
                    top 2px
            .work-name-right
                font-size 15px
                display flex
                align-items center
                img 
                    width 14px
                    height 14px
                    margin-right 6px
        .work-msg
            font-size 14px
            text-align center
            p
                text-align justify
                line-height 20px
            img 
                width 15px
                height 10px
                padding-top 8px
.active-msg
    ellipsisMany(2)
.active-rotate
    transform rotate(180deg)
    padding-bottom 8px
    padding-top 0px
</style>
