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
      @change-detail="onChangeDetail"
    />
    <div class="empty"></div>
  </div>
</template>

<script>
import Vue from "vue";
import { AddressEdit } from "vant";
import { Toast } from "vant";
import NavBar from "@/components/NavBar.vue";
import Area from "../../assets/area/area";
import { mapGetters } from "vuex";
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
    onSave() {
      Toast("save");
    },
    onDelete() {
      Toast("delete");
    },
    onChangeDetail(val) {
      if (val) {
        this.searchResult = [
          {
            name: "黄龙万科中心",
            address: "杭州市西湖区",
          },
        ];
      } else {
        this.searchResult = [];
      }
    },
  },
  computed: {
    ...mapGetters(["addressList"]),
  },
  components: {
    "v-Navbar": NavBar,
  },
  mounted() {
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