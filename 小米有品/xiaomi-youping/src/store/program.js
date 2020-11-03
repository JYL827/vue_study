
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
      tel: '1310000000',
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
  
}

const actions = {
}

export default {
  state,
  getters,
  mutations,
  actions
}