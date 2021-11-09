'use strict'

const reverseLinkedList = require('../function/reverseLinkedList')
const Linked_List = require('../linkedList/linkedList')


let myLinkedList = new Linked_List

myLinkedList.insert('c')
myLinkedList.insert('b')
myLinkedList.insert('a')

let mySecondLinkedList = new Linked_List

mySecondLinkedList.insert(3)
mySecondLinkedList.insert(10)
mySecondLinkedList.insert(50)
mySecondLinkedList.insert(100)
mySecondLinkedList.insert(1000)


let emptyLinkedList = new Linked_List


describe('Testing Reverse Function', () => {
    test('reverse linked list', () => {

        expect(myLinkedList.toString()).toStrictEqual('c => b => a => Null');
        expect(reverseLinkedList(myLinkedList)).toStrictEqual('a => b => c => Null');
        expect(reverseLinkedList(emptyLinkedList)).toBe('Exception Error');
        
    });

    test('reverse linked list', () => {

        expect(mySecondLinkedList.toString()).toStrictEqual('3 => 10 => 50 => 100 => 1000 => Null');
        expect(reverseLinkedList(mySecondLinkedList)).toStrictEqual('1000 => 100 => 50 => 10 => 3 => Null');
        
    });

});