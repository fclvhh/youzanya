const mutations = {
  addCart(state, info) {
    console.log(info);
    // 1.查看是否添加过
    // 1.1 find 函数 
    // 1.2 返回第一个 相同的iid的 state对象
    const oldInfo = state.cartList.find(item => item.iid === info.iid)

    // 2.+1或者新添加
    if (oldInfo) {
      oldInfo.count += 1
    } else {
      info.count = 1
      info.checked = true
      state.cartList.push(info)
    }
  }
}

export default mutations

