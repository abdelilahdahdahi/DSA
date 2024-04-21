class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.size = 0;
    }

    // 1- Insert first node
    insertFirst(data) {
        this.head = new Node(data, this.head);
        this.size ++;
    }

    // 2- Insert last node
    insertLast(data) {
        let node = new Node(data);
        let current;

        // if empty, insert as head
        if (this.head == null) {
            this.head = node;
        } else {
            current = this.head;

            while (current.next) {
                current = current.next;
            }

            current.next = node;
        }
        this.size ++;
    }

    // 3- Insert at index
    insertAt(data, index) {

        // if index is out of range
        if (index > 0 && index > this.size) {
            return;
        }

        // if first index
        if (index === 0) {
            this.insertFirst(data)
            return;
        }

        const node = new Node(data);
        let current, previous;

        current = this.head;
        let count = 0;

        while (count < index) {
            previous = current; // node before index
            count ++;
            current = current.next; // node after index
        }

        node.next = current;
        previous.next = node;

        this.size ++;
    }

    // Get at index

    // Remove at index

    // Clear list 

    // Print list data
    printListData() {
        let current = this.head;

        while(current) {
            console.log(current.data);
            current = current.next;
        }
    }
}

// TESTING 
const linkedList = new LinkedList();

linkedList.insertFirst(100);
linkedList.insertFirst(200);
linkedList.insertFirst(300);
linkedList.insertAt(500, 0);
linkedList.printListData();