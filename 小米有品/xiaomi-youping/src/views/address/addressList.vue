<template>
  <div class="address-wrap">
    <v-Navbar title="收货地址"></v-Navbar>
    <div class="address-edit">
      <van-address-list
      v-model="chosenAddressId"
      :list="addressList"
      default-tag-text="默认"
      @add="onAdd"
      @edit="onEdit"
      add-button-text="+ 添加地址"
      />
      <!-- 地址列表为空时 -->
      <v-empty :emptyTip="emptyTip" v-show="addressList.length <= 0"></v-empty>
    </div>
  </div>
</template>

<script>
import Vue from 'vue';
import { AddressList } from 'vant';
import { mapGetters } from 'vuex'
import NavBar from '@/components/NavBar.vue'
import Empty from '@/components/empty.vue'

Vue.use(AddressList)

export default {
  data() {
    return {
      chosenAddressId: '1',
      emptyTip: {
        imgPath: "https://trade.m.xiaomiyoupin.com/youpin/static/m/res/images/no_result/no_result_address.png",
        title: '您还没有收货地址哦，请点击下方+ 新建',
        isShowBtn: false,
        btnName: ''
      }
    };
  },
  computed: {
    ...mapGetters(['addressList'])
  },
  methods: {
    onClickLeft() {
      this.$router.go(-1)
    },
    onAdd() {
      this.$router.push({ path: './addressEdit' })
    },
    onEdit(item, index) {
      this.$router.push({ path: './addressEdit?id=' + index })
    },
  },
  components: {
    'v-Navbar': NavBar,
    'v-empty': Empty
  }
};
</script>
<style lang="stylus" scoped>
.van-button
  height 44px
  border-radius 5px
  background #fff
  color rgb(132, 93, 50)
  border 1px solid rgb(132, 93, 50)
  margin-bottom 15px
</style>