import mdParser from 'mpvue-markdown-parser'

Component({
  /**
   * 组件的属性列表
   */
  properties: {
    md: {
      type: String,
      value: '',
      observer(val) {
        this.setData({
          nodes: mdParser(val)
        })
      }
    },
  },

  /**
   * 组件的初始数据
   */
  data: {
    nodes: []
  },
})
