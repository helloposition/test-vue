<template>
    <div class='patient'>
        <search></search>
        <guideImg></guideImg>
        <patientList></patientList> 
        <div class='patient-bg'></div>
        <consulting></consulting>
        <tabber :selected='selected' :tabs='tabs'></tabber>
    </div>
</template>

<script>
import tabber from '../components/tabber'
import search from '../components/search'
import guideImg from '../components/guideImg'
import patientList from '../components/patientList'
import consulting from '../components/consulting'
export default {
  name: 'patient',
  components:{
      tabber,
      search,
      guideImg,
      patientList,
      consulting
  },
  data () {
    return {
      selected: '1',
      tabs:[require('@/assets/images/tabar_patient_selected.png'),require('@/assets/images/tabar_team_normal.png'),require('@/assets/images/tabar_find_normal.png'),require('@/assets/images/tabar_mine_normal.png')]
    }
  },
}
</script>
<style scoped lang='stylus'>
@import '~common/mixins.styl'
@import '~common/varibles.styl'
  .patient
    padding 16px
    .patient-bg
      background #F7F9FA
      width 100%
      padding 0 16px
      position relative
      left -16px
      height 10px
</style>
