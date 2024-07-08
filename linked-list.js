import { Node } from "./node.js";

export class LinkedList {
    constructor() {
        this.head = null;
    }

    append(value) {
        const newNode = new Node(value);

        if (this.head === null) {
            this.head = newNode;
            return;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        current.next = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.next = this.head;
        this.head = newNode;
    }

    size() {
        let total = 0;
        let current = this.head;

        while (current !== null) {
            current = current.next;
            total++;
        }

        return total;
    }

    head() {
        return this.head;
    }

    tail() {
        if (this.head === null) {
            return null;
        }

        let current = this.head;

        while (current.next !== null) {
            current = current.next;
        }

        return current;
    }

    at(index) {
        if (index < 0 || index >= this.size()) {
            return null;
        }

        let current = this.head;
        let currentIndex = 0;

        while (currentIndex < index) {
            current = current.next;
            currentIndex++;
        }

        return current;
    }

    pop() {
        if (this.head === null) {
            return null;
        }

        if (this.head.next === null) {
            const node = this.head;
            this.head = null;
            return node;
        }

        let current = this.head;
        let prev = null;

        while (current.next !== null) {
            prev = current;
            current = current.next;
        }

        const node = current;
        if (prev !== null) {
            prev.next = null;
        }

        return node;
    }

    contains(value) {
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return true;
            }

            current = current.next;
        }

        return false;
    }

    find(value) {
        let index = 0;
        let current = this.head;

        while (current !== null) {
            if (current.value === value) {
                return index;
            }

            current = current.next;
            index++;
        }

        return null;
    }

    toString() {
        let linkedString = '';
        let current = this.head;

        while (current !== null) {
            linkedString += '( ' + current.value + ' ) -> ';
            current = current.next;
        }

        linkedString += 'null';

        return linkedString;
    }
}