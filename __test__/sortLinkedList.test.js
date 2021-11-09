'use strict'

const sortLinkedList = require('../function/sortLinkedList')
const Linked_List = require('../linkedList/linkedList')

let myLinkedList = new Linked_List

myLinkedList.insert('c')
myLinkedList.insert('b')
myLinkedList.insert('z')
myLinkedList.insert('x')
myLinkedList.insert('a')

let mySecondLinkedList = new Linked_List

mySecondLinkedList.insert(3)
mySecondLinkedList.insert(1)
mySecondLinkedList.insert(2)
mySecondLinkedList.insert(50)
mySecondLinkedList.insert(1000)


let emptyLinkedList = new Linked_List


describe('Testing Sort Function', () => {
    test('Sort linked list', () => {

        expect(myLinkedList.toString()).toStrictEqual('c => b => z => x => a => Null');
        expect(sortLinkedList(myLinkedList)).toStrictEqual('a => b => c => x => z => Null');
        expect(sortLinkedList(emptyLinkedList)).toBe('Exception Error');
        
    });

    test('Sort linked list', () => {

        expect(mySecondLinkedList.toString()).toStrictEqual('3 => 1 => 2 => 50 => 1000 => Null');
        expect(sortLinkedList(mySecondLinkedList)).toStrictEqual('1 => 2 => 3 => 50 => 1000 => Null');
        
    });

});