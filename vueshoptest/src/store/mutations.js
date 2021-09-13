export default{
    //mutations 唯一的目的就是修改state中状态
    //mutations 中的每个方法尽可能完成的事件比较单一 一点; 
    addCounter(state , obj){
        obj.count++ //这两个事件分开写
    },  // 就能更好的追踪 它们的变化
    addToCart(state , newObj){
        newObj.isCheck = true
        state.cartList.push(newObj)
    }
}