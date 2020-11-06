const state = {
  list: [
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
  ]
}

const getters = {
  addressList: state => state.list
}

const mutations = {
  deleteInfo(state, index) {
    state.list.splice(index, 1)
  },
  saveInfo(state, { addressInfo, index }) {
    // 由于vant编辑地址组件中只有addressDetail,所以手动拼接address
    addressInfo.address = addressInfo.province + addressInfo.city + addressInfo.county + addressInfo.addressDetail
    if(index) {
      if(addressInfo.isDefault) {
        for(let item of state.list) {
          if(item.isDefault) {
            item.isDefault = false
          }
        }
        state.list[index].isDefault = true
      }else if(!addressInfo.isDefault) {
        state.list[index].isDefault = false
      }
    } 
    else if(addressInfo.isDefault) {
      for(let item of state.list) {
        item.isDefault = false
      }
      state.list.push(addressInfo)
    }
  }
}

const actions = {
  deleteAddress({ commit }, index) {
    commit('deleteInfo', index)
  },
  saveAddress({ commit }, address) {
    commit('saveInfo', address)
  }
}

export default {
  state,
  getters,
  mutations,
  actions
}