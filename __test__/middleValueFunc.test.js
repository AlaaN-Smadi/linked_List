'use strict'

const middleValueFunc = require('../function/middleNode')
const Linked_List = require('../linkedList/linkedList')

let myLinkedList = new Linked_List

myLinkedList.insert('a')
myLinkedList.insert('b')
myLinkedList.insert('c')

let mySecondLinkedList = new Linked_List
// 1 -> 3 -> 5 -> 7 -> 9 -> 11
mySecondLinkedList.insert(1)
mySecondLinkedList.insert(3)
mySecondLinkedList.insert(5)
mySecondLinkedList.insert(7)
mySecondLinkedList.insert(9)
mySecondLinkedList.insert(11)

let emptyLinkedList = new Linked_List


describe('Testing Middle Node Function', () => {
    test('Middle value in linked list', () => {

        expect(middleValueFunc(myLinkedList)).toStrictEqual('b');
        expect(middleValueFunc(mySecondLinkedList)).toStrictEqual(7);
        expect(middleValueFunc(emptyLinkedList)).toBe('exception error');
        
    });

});