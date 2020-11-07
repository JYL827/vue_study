const state = {
  addressList: [
    {
      id: '0',
      name: '张三',
      tel: '13000000000',
      address: '浙江省杭州市西湖区文三路138号东方通信大厦7楼501室',
      addressDetail: '文三路138号东方通信大厦7楼501室',
      province: '浙江省',
      city: '杭州市',
      county: '西湖区',
      areaCode: '330106',
      postCode: '342300',
      isDefault: true
    },
    {
      id: '1',
      name: '李四',
      tel: '13100000000',
      address: '浙江省杭州市拱墅区莫干山路50号',
      addressDetail: '拱墅区莫干山路50号',
      province: '浙江省',
      city: '杭州市',
      county: '拱墅区',
      areaCode: '330105',
      postCode: '342300',
      isDefault: false
    }
  ],
  hasLogin: true,
  userInfo: {
    nickName: '梦间行'
  }
}

const getters = {
  addressList: state => state.addressList,
  hasLogin: state => state.hasLogin,
  nickName: state =>state.userInfo.nickName
}

const mutations = {
  // 删除地址
  deleteInfo(state, index) {
    state.addressList.splice(index, 1)
  },
  // 保存地址
  saveInfo(state, { addressInfo, index }) {
    // 由于vant编辑地址组件中只有addressDetail,所以手动拼接address
    addressInfo.address = addressInfo.province + addressInfo.city + addressInfo.county + addressInfo.addressDetail
    if(index) {
      if(addressInfo.isDefault) {
        for(let item of state.addressList) {
          if(item.isDefault) {
            item.isDefault = false
          }
        }
        state.addressList[index].isDefault = true
      } else {
        state.addressList[index].isDefault = false
      }
    } 
    else if(addressInfo.isDefault) {
      for(let item of state.addressList) {
        item.isDefault = false
      }
      state.addressList.push(addressInfo)
    } else {
      state.addressList.push(addressInfo)
    }
  },
  // 退出登录
  exitLoginInfo(state) {
    state.hasLogin = false
    state.userInfo.nickName = '请登录'
  }
}

const actions = {
  deleteAddress({ commit }, index) {
    commit('deleteInfo', index)
  },
  saveAddress({ commit }, address) {
    commit('saveInfo', address)
  },
  exitLogin({ commit }) {
    commit('exitLoginInfo')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}