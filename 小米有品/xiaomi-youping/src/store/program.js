const state = {
  list: [
    {
      id: '1',
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
      id: '2',
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
  ]
}

const getters = {
  addressList: state => state.list
}

const mutations = {
  deleteInfo(state, index) {
    state.list.splice(index, 1)
  },
  saveInfo(state, addressInfo) {
    // 由于vant编辑地址组件中只有addressDetail,所以手动拼接address
    addressInfo.address = addressInfo.province + addressInfo.city + addressInfo.county + addressInfo.addressDetail
    if(addressInfo.id) {
      for(let item of state.list) {
        if(addressInfo.isDefault) {
          item.isDefault = false
        }
        return
      }
      return
    }
    // 设置addressInfo的id
    

    state.list.push(addressInfo)
  },
  // 设置默认地址
  setDefault(state, {index, cur}) {
    state.list[index].isDefault = cur
  }
}

const actions = {
  deleteAddress({ commit }, index) {
    commit('deleteInfo', index)
  },
  saveAddress({ commit }, address) {
    commit('saveInfo', address)
  },
  changeDefault({ commit }, {index, cur}) {
    commit('setDefault', {index, cur})
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}