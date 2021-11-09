'use strict';

const printReverse = require('../function/printReverse')
const Linked_List = require('../linkedList/linkedList')

let myLinkedList = new Linked_List

myLinkedList.insert('a')
myLinkedList.insert('b')
myLinkedList.insert('c')

let emptyLinkedList = new Linked_List


describe('Testing Reverse Function', () => {
    test('reverse linked list', () => {

        expect(printReverse(myLinkedList)).toStrictEqual(' => c => b => a');
        expect(printReverse(emptyLinkedList)).toBe('Exception Error');
        
    });

});