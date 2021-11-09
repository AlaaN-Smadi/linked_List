'use strict'

function printReverse(LL){
    let current = LL.head
    if(!current){
        return "Exception Error"
    }
    let result = ''

    let reverseFunction = (node) =>{
        if(node.next){
            reverseFunction(node.next)
        }
        result = `${result + ' => ' + node.value}`
    }
    reverseFunction(current)

    return result
}

module.exports = printReverse