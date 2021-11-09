'use strict'

function sortLinkedList(LL) {
    let current = LL.head
    if (!current) {
        return ('Exception Error')
    }
    let index
    while (current) {
        index = current.next
        while (index) {
            if (current.value > index.value) {
                let swapValue = current.value
                current.value = index.value
                index.value = swapValue
            }
            index = index.next
        }
        current = current.next
    }

    return(LL.toString())
}

module.exports = sortLinkedList