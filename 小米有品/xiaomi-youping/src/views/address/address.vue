<template>
  <div class="address-wrap">
    <div class="address-head">
      <img class="return" src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_arrow_left_black.png" alt="">
      <div class="address-title">收货地址</div>
    </div>
    <div class="address-edit">
      <van-address-list
      v-model="chosenAddressId"
      :list="list"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      add-button-text="+ 添加地址"
      />
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { AddressList } from 'vant';

Vue.use(AddressList);

export default {
  data() {
    return {
      chosenAddressId: '1',
      list: [
        {
          id: '1',
          name: '张三',
          tel: '13000000000',
          address: '浙江省杭州市西湖区文三路 138 号东方通信大厦 7 楼 501 室',
          isDefault: true,
        },
        {
          id: '2',
          name: '李四',
          tel: '1310000000',
          address: '浙江省杭州市拱墅区莫干山路 50 号',
        },
      ]
    };
  },
  methods: {
    onAdd() {

    },
    onEdit() {

    },
  },
};
</script>

<style lang="stylus" scoped>
.address-head
  display flex
  align-items center
  .return
    width 39px
    height 48px
  .address-title
    flex 1
    margin-left 115px
</style>