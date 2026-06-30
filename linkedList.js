import { Node } from "./node.js";

export class LinkedList {
    constructor() {
        this.headNode = null;
    }

    toString() {
        let result = "";
        let currentNode = this.headNode;

        while (currentNode !== null) {
            result += "( " + currentNode.value + " ) -> ";
            currentNode = currentNode.nextNode;
        }

        return (result === "") ? "" : result + "null";
    }

    append(value) {
        const newNode = new Node(value);

        if (this.headNode === null) {
            this.headNode = newNode;
            return;
        }

        let currentNode = this.headNode;

        while (currentNode.nextNode !== null) {
            currentNode = currentNode.nextNode;
        }

        currentNode.nextNode = newNode;
    }

    prepend(value) {
        const newNode = new Node(value);
        newNode.nextNode = this.headNode;
        this.headNode = newNode;
    }

    size() {
        let currentNode = this.headNode;
        let count = 0;

        while (currentNode !== null) {
            count++;
            currentNode = currentNode.nextNode;
        }

        return count;
    }

    head() {
        if (this.headNode === null) {
            return undefined;
        }

        return this.headNode.value;
    }

    tail() {
        if (this.headNode === null) {
            return undefined;
        }

        let currentNode = this.headNode;

        while (currentNode !== null) {
            if (currentNode.nextNode === null) {
                return currentNode.value;
            }

            currentNode = currentNode.nextNode;
        }
    }

    at(index) {
        let currentNode = this.headNode;
        let count = 0;

        while (currentNode !== null) {
            if (count === index) {
                return currentNode.value;
            }

            currentNode = currentNode.nextNode;
            count++;
        }

        return undefined;
    }

    pop() {
        if (this.headNode === null) {
            return undefined;
        }

        let currentNode = this.headNode;
        this.headNode = this.headNode.nextNode;

        return currentNode.value;
    }

    contains(value) {
        let currentNode = this.headNode;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return true;
            }

            currentNode = currentNode.nextNode;
        }

        return false;
    }

    findIndex(value) {
        let currentNode = this.headNode;
        let count = 0;

        while (currentNode !== null) {
            if (currentNode.value === value) {
                return count;
            }

            currentNode = currentNode.nextNode;
            count++;
        }

        return -1;
    }
}