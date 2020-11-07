<template>
  <div class="edit-wrap">
    <v-Navbar :title="title"></v-Navbar>
    <van-address-edit
      :area-list="areaList"
      show-delete
      show-set-default
      :address-info="addressInfo"
      :area-columns-placeholder="['请选择', '请选择', '请选择']"
      @save="onSave"
      @delete="onDelete"
    />
  <v-blank></v-blank>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from 'vant'
import { AddressEdit } from "vant";
import NavBar from "@/components/NavBar.vue";
import Blank from "@/components/blank.vue";
import Area from "../../assets/area/area";
import { mapActions, mapGetters } from "vuex";
Vue.use(AddressEdit);

export default {
  data() {
    return {
      areaList: { ...Area },
      addressInfo: {},
      title: '新增地址',
      // 接收address传的id标识，判断点击的是哪个地址
      // 因为要多次复用，所以存给数据源
      index: this.$route.query.id
    }
  },
  methods: {
    // 引用vuex中的方法
    ...mapActions(['deleteAddress', 'saveAddress']),
    onSave(content) {
      this.saveAddress({addressInfo: content, index: this.index})
      Toast('保存更改成功')
      // console.log(content);
      this.$router.go(-1)
    },
    onDelete() {
      this.deleteAddress(this.index)
      this.$router.go(-1)
    }
  },
  computed: {
    ...mapGetters(["addressList"])
  },
  components: {
    "v-Navbar": NavBar,
    "v-blank": Blank,
  },
  mounted() {
    this.addressInfo = this.addressList[this.index]
    if(this.index) this.title = '编辑地址'
  }
};
</script>

<style lang="stylus">
.van-address-item .van-radio__icon--round
  display none
.van-address-item__name
  color #333333
.van-address-item__address
  color #666666
  font-size 12px
.van-switch--on
  background-color red
.van-button--normal
  background-color #fff
  color red
  border-color rgb(132, 93, 50)
.van-button--danger
  background-color rgb(132, 93, 50)
  border none
  color #fff
</style>