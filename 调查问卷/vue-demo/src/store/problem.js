
const state = {
  problem: [
    {
      number: '题目1',
      choice: [
        '答案A',
        '错误答案',
        '错误答案',
        'aaaaaaa'
      ]
    },
    {
      number: '题目2',
      choice: [
        '答案A',
        '错误答案',
        '错误答案',
        'bbbbb'
      ]
    },
    {
      number: '题目3',
      choice: [
        '答案A',
        '错误答案',
        '错误答案',
        'cccc'
      ]
    },
    {
      number: '题目4',
      choice: [
        '答案A',
        '错误答案',
        '错误答案',
        'dddd'
      ]
    },
    {
      number: '题目5',
      choice: [
        '答案A',
        '错误答案',
        '错误答案',
        'eeeee'
      ]
    }
  ],
  index: 0,
  icons: ['A', 'B', 'C', 'D']
}

const getters = {
  problemList: state => state.problem[state.index].choice,
  problemTitle: state => state.problem[state.index].number,
  iconList: state => state.icons,
  isOver: state => state.index >= state.problem.length -1
}

const mutations = {
  nextProblem(state) {
    state.index++
  }
}

const actions = {

}

export default {
  state,
  getters,
  mutations,
  actions
}