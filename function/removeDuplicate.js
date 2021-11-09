'use strict'

let removeDuplicate = (LL) =>{
    let current = LL.head
    if(!current){
        return("Exception Error")
    }
    while(current.next){
        
        while(current.value == current.next.value){
            current.next = current.next.next
        }
        current = current.next
    }

    return(LL.toString())
}

module.exports = removeDuplicate