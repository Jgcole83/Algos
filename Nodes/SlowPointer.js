class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    // Add a node to the head of the list
    addToHead(value) {
      const newNode = new Node(value);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    // Find the middle node using slow and fast pointers
    findMiddle() {
      let slowPointer = this.head;
      let fastPointer = this.head;
  
      // Traverse the list with slow and fast pointers
      while (fastPointer !== null && fastPointer.next !== null) {
        slowPointer = slowPointer.next;           // Move slow pointer by 1 step
        fastPointer = fastPointer.next.next;      // Move fast pointer by 2 steps
      }
  
      // At the end of the loop, slowPointer will be at the middle node
      return slowPointer ? slowPointer.value : null;
    }
  }
  
  // Test the code
  const list = new LinkedList();
  for (let i = 1; i <= 5; i++) {
    list.addToHead(i);  // Add 1, 2, 3, 4, 5 to the linked list
  }
  
  console.log("Middle node value:", list.findMiddle()); // Should print the middle node
  