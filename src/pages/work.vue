<template>
  <div class="work">
    <work-top></work-top>
    <work-menu></work-menu>
    <work-disease></work-disease>
    <work-man></work-man>
    <work-service></work-service>
    <tabber :selected='selected' :tabs='tabs'></tabber>
  </div>
</template>

<script>
import tabber from '../components/tabber'
import workTop from '../components/work/workTop'
import workMenu from '../components/work/workMenu'
import workDisease from '../components/work/workDisease'
import workMan from '../components/work/workMan'
import workService from '../components/work/workService'
export default {
  name: 'Patient',
  components:{
      tabber,
      workTop,
      workMenu,
      workDisease,
      workMan,
      workService
  },
  data () {
    return {  
      selected: '2',
      tabs:[require('@/assets/images/tabar_patient_normal.png'),require('@/assets/images/tabar_team_selected.png'),require('@/assets/images/tabar_find_normal.png'),require('@/assets/images/tabar_mine_normal.png')]
    }
  },
}
</script>
<style scoped lang='stylus'>
@import '~common/mixins.styl'
@import '~common/varibles.styl'
  .work
    background url('~@/assets/images/work/gzs_img_background.png') center center no-repeat
    background-size 100% 100%
    height 667px
    padding 43px 0px 0px 0px
</style>
