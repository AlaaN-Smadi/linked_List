'use strict'

function reverseLinkedList(LL) {
    let current = LL.head
    if (!current) {
        return "Exception Error"
    }

    let reverseFunction = (node) => {
        if (node.next) {
            reverseFunction(node.next)
        }
        if (node.next == null) {
            LL.head = node
            current = node

        } else {
            node.next = null
            current.next = node
            current = node

        }
    }
    reverseFunction(current)
    return(LL.toString())

}

module.exports = reverseLinkedList