'use strict'

let kthFromEnd = (LL, Kth) =>{
    if(Kth<0){
        return('minus K-th index')
    }
    let current = LL.head
    if(current == null){
        return "Exception Erro"
    }
    let k = 0
    let returnItem
    let insertionFun = (node) => {
        if(node.next){
            insertionFun(node.next)
        }
        if(k!==Kth){
            k++
        }else{
            k++
            returnItem = node.value
        }
    }
    insertionFun(current)
    return (returnItem)
}

module.exports = kthFromEnd