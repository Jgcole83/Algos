class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  addToHead(value) {
    const newNode = new Node(value);
    newNode.next = this.head;
    this.head = newNode;
  }

  nthLastNode(n) {
    let mainPointer = this.head;
    let referencePointer = this.head;

    for (let i = 0; i < n; i++) {
      if (referencePointer === null) {
        return null; // n is larger than the size of the list
      }
      referencePointer = referencePointer.next;
    }

    while (referencePointer !== null) {
      mainPointer = mainPointer.next;
      referencePointer = referencePointer.next;
    }

    return mainPointer; // This is the nth last node
  }
}

// Test code (outside the class)
const testLinkedList = new LinkedList();
for (let i = 1; i <= 50; i++) {
  testLinkedList.addToHead(i);
}

// Example usage:
const nthLastNode = testLinkedList.nthLastNode(5);
console.log(nthLastNode ? nthLastNode.value : "null"); // Should print 5

// Export for use in other files
module.exports = testLinkedList;
