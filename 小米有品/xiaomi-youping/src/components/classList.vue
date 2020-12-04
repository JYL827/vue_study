<template>
  <div>
    <div class="classlist-content" :classData="classData">
      <img :src="classData.img" style="height:76px;border-radius:10px;margin-top:10px;">
      <div class="classlist-block" v-for="(item, index) of classData.content" :key="index">
        <div class="block-title">{{item.title}}</div>
        <div class="class-list">
          <div class="class-detail" v-for="(itemDetail, index) of item.detail" :key="index">
            <img :src="itemDetail.special" class="special" v-if="itemDetail.special">
            <img :src="itemDetail.pic" style="width:76px;height:76px;">
            <div class="class-name">{{itemDetail.name}}</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    classData: {
      type: Object,
      value: {}
    }
  }
}
</script>

<style lang="stylus" scoped>
.classlist-content
    width 262px
    margin 45px 10px 50px 103px
    padding-bottom 11px
    .classlist-block
      background-color #fff
      margin-top 10px
      border-radius 10px
      font-size 12px
      overflow: hidden;
      color #666666
      .block-title
        height 17.6px
        font-size 13px
        font-weight bold
        color #333333
        margin 10px 0 0 10px
      .class-list
        display flex
        flex-wrap wrap
        justify-content space-around
        align-content space-between
        &::after
          content ''
          width 30%
        .class-detail
          position relative
          width 76px
          height 98px
          text-align center
          margin 12px 0 10px 0
          .special
            position absolute
            top 0
            left 0
            width 25px
            height 25px
          .class-name
            margin-top 6px
</style>