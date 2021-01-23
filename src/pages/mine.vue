<template>
    <div>
        <mineTop></mineTop>
        <mineBottom></mineBottom>  
        <tabber :selected='selected' :tabs='tabs'></tabber>
    </div>
</template>

<script>
import tabber from '../components/tabber'
import mineTop from '../components/mine/mineTop'
import mineBottom from '../components/mine/mineBottom'
export default {
  name: 'Patient',
  components:{
      tabber,
      mineTop,
      mineBottom
  },
  data () {
    return {
      selected: '4',
      tabs:[require('@/assets/images/tabar_patient_normal.png'),require('@/assets/images/tabar_team_normal.png'),require('@/assets/images/tabar_find_normal.png'),require('@/assets/images/tabar_mine_selected.png')]
    }
  },
}
</script>
<style scoped lang='stylus'>
@import '~common/mixins.styl'
@import '~common/varibles.styl'
</style>
