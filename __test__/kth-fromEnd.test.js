'use strict'

const kthFromEnd = require('../function/kthFromEnd')
const Linked_List = require('../linkedList/linkedList')

let myLinkedList = new Linked_List

myLinkedList.insert('a')
myLinkedList.insert('b')
myLinkedList.insert('c')

let emptyLinkedList = new Linked_List



describe('Testing Linked List methods', () => {
    test('Test includes method', () => {

        expect(kthFromEnd(myLinkedList, 0)).toStrictEqual('c');
        expect(kthFromEnd(myLinkedList, 1)).toStrictEqual('b');
        expect(kthFromEnd(myLinkedList, 2)).toStrictEqual('a');

        expect(kthFromEnd(emptyLinkedList, 2)).toStrictEqual('Exception Erro');
        expect(kthFromEnd(emptyLinkedList, -2)).toStrictEqual('minus K-th index');
        
    });

});