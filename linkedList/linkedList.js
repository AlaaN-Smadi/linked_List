'use strict'

const { MODULEDECLARATION_TYPES } = require('@babel/types')
const Node = require('../node/node')

class Linked_List {
    constructor() {
        this.head = null
    }

    insert = (value) => {
        const newNode = new Node(value)

        let current = this.head
        if (current == null){
            this.head = newNode
            return
        }
        while(current.next !== null){
            current = current.next
        }
        current.next = newNode
        return

    }

    includes = (value) => {
        let current = this.head
        if(current == null){
            return('exception error')
        }
        while(current !== null){
            if(current.value == value){
                return(true)
            }
            current = current.next
        }
        return(false)
    }

    toString = () => {
        let current = this.head
        if(!current){
            return('exception error')
        }
        let result = ''
        while (current) {
            result = `${result + current.value} => `
            current = current.next
        }
        result = `${result}Null`
        
        return(result)
    }
}

module.exports = Linked_List
// UGC45314