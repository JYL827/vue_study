<template>
  <div class="edit-wrap">
    <v-Navbar title="新增地址"></v-Navbar>
    <van-address-edit
    :area-list="areaList"
    show-delete
    show-set-default
    :search-result="searchResult"
    :area-columns-placeholder="['请选择', '请选择', '请选择']"
    @save="onSave"
    @delete="onDelete"
    @change-detail="onChangeDetail"
    />
    <div class="empty"></div>
  </div>
</template>

<script>
import Vue from 'vue';
import { AddressEdit} from 'vant';
import { Toast } from 'vant';
import NavBar from '@/components/NavBar.vue'
import Area from '../../assets/area/area'
Vue.use(AddressEdit)

export default {
  data() {
    return {
      areaList: {...Area}
    }
  },
  methods: {
    onSave() {
      Toast('save');
    },
    onDelete() {
      Toast('delete');
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: '黄龙万科中心',
            address: '杭州市西湖区',
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  components: {
    'v-Navbar': NavBar
  }
};
</script>

<style lang="stylus" scoped>
.empty
  width 100vw
  height 50px
  background-color #fff
  z-index 999
  position fixed
  bottom 0
</style>