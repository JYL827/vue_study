const state = {
  addressList: [],
  hasLogin: false,
  hotTitle: [
    '女包',
    '有品',
    '耳机',
    '香水'
  ]
}

const getters = {
  addressList: state => state.addressList,
  hasLogin: state => state.hasLogin,
  hotWords: state => state.hotTitle
}

const mutations = {
  // 删除地址
  deleteInfo(state, index) {
    state.addressList.splice(index, 1)
  },
  // 保存地址
  saveInfo(state, { addressInfo, index }) {
    // 把编辑地址组件中的详细地址addressDetail和省市区拼接成最终地址address
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
      state.addressList[index] = addressInfo
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
  changeLoginInfo(state) {
    state.hasLogin = !state.hasLogin
  }
}

const actions = {
  deleteAddress({ commit }, index) {
    commit('deleteInfo', index)
  },
  saveAddress({ commit }, address) {
    commit('saveInfo', address)
  },
  changeLogin({ commit }) {
    commit('changeLoginInfo')
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}