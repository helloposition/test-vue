<!-- 发现轮播图 -->
<template>
    <div class='wrapper'>
        <swiper :options="swiperOption" class="swiper-container" >
            <!-- slides -->
            <swiper-slide class="swiper-item" v-for='item of swiperList' :key='item.id'>
                <img class='swiper-img' :src='item.imgUrl' alt="" />
            </swiper-slide>
            <!-- Optional controls ,显示小点-->
            <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
    </div>
</template>

<script>
export default {
 data () {
 return {
     swiperOption:{
                // 参数选项,显示小点
                pagination:'.swiper-pagination',
                //循环
                loop:true,
                //每张播放时长3秒，自动播放
                autoplay:2000,
                //滑动速度
                speed:1000,
                // delay:1000
            },
            //三张轮播，使用变量循环
            swiperList:[
                {
                    id:'001',
                    imgUrl:require('@/assets/images/find/found_img_banner.png')
                },
                {
                    id:'002',
                    imgUrl:require('@/assets/images/find/found_img_banner.png')
                },
                {
                    id:'003',
                    imgUrl:require('@/assets/images/find/found_img_banner.png')
                }
            ]
    }
 }
}

</script>

<style lang='stylus' scoped>
    // >>>穿透作用，因为swiper-pagination-bullet-active类在组件内部定义的，想要wrapper也能作用到，可以用>>>
    .wrapper >>>.swiper-pagination-bullet
        height 5px
        background #ffffff
        width 5px
    .wrapper >>>.swiper-pagination-bullet-active
        background:linear-gradient(90deg,rgba(0,82,212,1) 0%,rgba(67,100,247,1) 100%);
        width 11px
        border-radius 3px
        height 5px
    .wrapper
        overflow:hidden
        width 100%
        height:184px
        background :#f0f0f0
        .swiper-item
            width:100%
            .swiper-img
                width:100%
                height 184px
</style>
