<template>
  <div>
    <findSwiper></findSwiper>
    <find-menu></find-menu>
    <find-artical></find-artical>
    <tabber :selected='selected' :tabs='tabs'></tabber>
  </div>
</template>
<script>
import tabber from '../components/tabber'
import findSwiper from '../components/find/findSwiper'
import findMenu from '../components/find/findMenu'
import findArtical from '../components/find/findArtical'
export default {
  name: 'Patient',
  components:{
      tabber,
      findSwiper,
      findMenu,
      findArtical
  },
  data () {
    return {
      selected: '3',
      tabs:[require('@/assets/images/tabar_patient_normal.png'),require('@/assets/images/tabar_team_normal.png'),require('@/assets/images/tabar_find_selected.png'),require('@/assets/images/tabar_mine_normal.png')]
    }
  },
}
</script>
<style scoped lang='stylus'>
@import '~common/mixins.styl'
@import '~common/varibles.styl'
</style>
