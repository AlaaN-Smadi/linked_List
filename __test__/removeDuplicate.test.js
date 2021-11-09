'use strict'

const removeDuplicate = require('../function/removeDuplicate')
const Linked_List = require('../linkedList/linkedList')

let myLinkedList = new Linked_List

myLinkedList.insert('a')
myLinkedList.insert('b')
myLinkedList.insert('c')
myLinkedList.insert('c')
myLinkedList.insert('d')

let mySecondLinkedList = new Linked_List

mySecondLinkedList.insert(1)
mySecondLinkedList.insert(2)
mySecondLinkedList.insert(2)
mySecondLinkedList.insert(2)
mySecondLinkedList.insert(3)
mySecondLinkedList.insert(3)
mySecondLinkedList.insert(4)
mySecondLinkedList.insert(5)

let emptyLinkedList = new Linked_List


describe('Testing Remove Function', () => {
    test('Remove Duplicate Values', () => {

        expect(removeDuplicate(myLinkedList)).toStrictEqual('a => b => c => d => Null');
        expect(removeDuplicate(emptyLinkedList)).toBe('Exception Error');
        
    });
    test('Remove Duplicate Values', () => {

        expect(removeDuplicate(mySecondLinkedList)).toStrictEqual('1 => 2 => 3 => 4 => 5 => Null');
        
    });

});