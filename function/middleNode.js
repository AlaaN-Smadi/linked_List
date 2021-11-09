'use strict'

function middleValueFunc(LL) {
    let tailPointer = LL.head
    let middlePointer = LL.head
    if (!tailPointer) {
        return ('exception error')
    }

    let comparisonVariable = tailPointer.next
    while (comparisonVariable) {
        tailPointer = tailPointer.next.next
        middlePointer = middlePointer.next

        if (tailPointer) {
            comparisonVariable = tailPointer.next
        }else{
            comparisonVariable = tailPointer
        }
    }

    return middlePointer.value
}

module.exports = middleValueFunc