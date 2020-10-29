<template>
  <div class="address-wrap">
    <div class="address-head">
      <img class="return" @click="returnTo" src="https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/icons/icon_arrow_left_black.png" alt="">
      <div class="address-title">收货地址</div>
    </div>
    <div class="address-edit">
      <van-address-list
      v-model="chosenAddressId"
      :list="addressList"
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
import { mapGetters } from 'vuex'

Vue.use(AddressList);

export default {
  data() {
    return {
      chosenAddressId: '1'
    };
  },
  computed: {
    ...mapGetters(['addressList'])
  },
  methods: {
    returnTo() {
      this.$router.push({path: './self'})
    },
    onAdd() {
      this.$router.push({ path: './addressEdit' })
    },
    onEdit() {
      this.$router.push({path: './addressEdit'})
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