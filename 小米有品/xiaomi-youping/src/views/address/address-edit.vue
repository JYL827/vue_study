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
      @change-default="onChangeDefault"
    />
    <div class="empty"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { Toast } from 'vant'
import { AddressEdit } from "vant";
import NavBar from "@/components/NavBar.vue";
import Area from "../../assets/area/area";
import { mapActions, mapGetters } from "vuex";
Vue.use(AddressEdit);

export default {
  data() {
    return {
      areaList: { ...Area },
      addressInfo: {},
      title: '新增地址'
    }
  },
  methods: {
    // 引用vuex中的方法
    ...mapActions(['deleteAddress','saveAddress', 'changeDefault']),
    onSave(content) {
      this.saveAddress(content)
      Toast('保存更改成功')
      console.log(content);
      this.$router.go(-1)
    },
    onDelete() {
      let i = this.$route.query.id
      this.deleteAddress(i)
      this.$router.go(-1)
    },
    onChangeDefault(value) {
      // console.log(value);
      let i = this.$route.query.id
      // mutation传参数时要以key: value的形式传值
      this.changeDefault({index: i, cur: value})
    }
  },
  computed: {
    ...mapGetters(["addressList"]),
    
  },
  components: {
    "v-Navbar": NavBar,
  },
  mounted() {
    // 接收address传的id标识，判断点击的是哪个地址
    let i = this.$route.query.id
    this.addressInfo = this.addressList[i]
    if(i) this.title = '编辑地址'
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
.empty {
  width: 100vw;
  height: 50px;
  background-color: #fff;
  z-index: 999;
  position: fixed;
  bottom: 0;
}
</style>