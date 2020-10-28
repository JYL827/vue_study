<template>
  <div class="edit-wrap">
    <div class="address-head">
      <img class="return" src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_arrow_left_black.png" alt="">
      <div class="address-title">新增地址</div>
    </div>
    <van-address-edit
    :area-list="areaList"
    show-postal
    show-delete
    show-set-default
    show-search-result
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
import { AddressEdit } from 'vant';

Vue.use(AddressEdit);
import { Toast } from 'vant';

export default {
  data() {
    return {
      areaList: {
        province_list: {
          110000: '北京市',
          120000: '天津市'
        },
        city_list: {
          110100: '北京市',
          120100: '天津市'
        },
        county_list: {
          110101: '东城区',
          110102: '西城区',
          110105: '朝阳区',
          110106: '丰台区',
          120101: '和平区',
          120102: '河东区',
          120103: '河西区',
          120104: '南开区',
          120105: '河北区',
          // ....
        }
      },
      searchResult: [],
    };
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
};
</script>

<style lang="stylus" scoped>
.address-head
  background-color #f1f1f1
  display flex
  align-items center
  .return
    width 39px
    height 48px
  .address-title
    flex 1
    margin-left 115px
.empty
  width 100vw
  height 50px
  background-color #fff
  z-index 999
  position fixed
  bottom 0
</style>