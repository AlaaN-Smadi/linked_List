'use strict';

const Linked_List = require('../linkedList/linkedList')

let myLinkedList = new Linked_List

myLinkedList.insert('a')
myLinkedList.insert('b')
myLinkedList.insert('c')

let emptyLinkedList = new Linked_List



describe('Testing Linked List methods', () => {
    test('Test includes method', () => {

        expect(myLinkedList.includes('a')).toBe(true);
        expect(myLinkedList.includes('z')).toBe(false);
        expect(emptyLinkedList.includes('a')).toBe('exception error');
        
    });

    test('Test toString method', () => {

        expect(myLinkedList.toString()).toStrictEqual('a => b => c => Null');
        expect(emptyLinkedList.toString()).toBe('exception error');
        
    });

});