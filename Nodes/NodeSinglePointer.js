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
      let length = 0;
      let current = this.head;
  
      // First pass to find the length of the list
      while (current !== null) {
        length++;
        current = current.next;
      }
  
      // If n is greater than the length, return null
      if (n > length) {
        return null;
      }
  
      // Second pass to get (length - n)th node
      let targetIndex = length - n;
      current = this.head;
      for (let i = 0; i < targetIndex; i++) {
        current = current.next;
      }
  
      return current;
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
  