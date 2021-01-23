<template>
    <div class='patientList'>
        <ul name='name'>
            <li >
                <img :src="require('@/assets/images/hz_icon_allpatient.png')" alt="">
                <p>所有患者</p>
            </li>
            <li @click='tap($event)' id="11" string='string字符串'>
                <img :src="require('@/assets/images/hz_icon_patientdata.png')" alt="">
                <p>患教资料</p>
            </li>
            <li>
                <img :src="require('@/assets/images/hz_icon_consultation.png')" alt="">
                <p>问诊表</p>
            </li>
            <li>
                <img :src="require('@/assets/images/hz_icon_schedule.png')" alt="">
                <p>我的日程</p>
            </li>
        </ul>
    </div>
</template>
<script>
export default {
    data(){
        return{

        }
    },
    methods:{
        tap(e){
            // e.target 是你当前点击的元素
            // e.currentTarget 是你绑定事件的元素
            // #获得点击元素的前一个元素
            console.log(e.currentTarget.previousElementSibling.innerHTML)
            
            // #获得点击元素的第一个子元素
            console.log(e.currentTarget.firstElementChild)
            // # 获得点击元素的下一个元素
            console.log(e.currentTarget.nextElementSibling)
            // # 获得点击元素中id为string的元素
            console.log(e.currentTarget.getAttribute('id'))
            // # 获得点击元素的string属性
            console.log(e.currentTarget.getAttribute('string'))
            // # 获得点击元素的父级元素
            console.log(e.currentTarget.parentElement.getAttribute('name'))
            // # 获得点击元素的前一个元素的最后一个子元素的HTML值
            console.log(e.currentTarget.previousElementSibling.lastElementChild.innerHTML)
        }
    }
}
</script>
<style lang="stylus" scoped>
.patientList
    ul
        display flex
        align-items center
        justify-content space-between
        font-size 13px
        padding 30px 0px
        li
            text-align center
            img 
                width 29px
                height 32px
            p
                padding-top 9px
      
      
</style>


