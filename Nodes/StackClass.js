// Linked list node structure (used internally by LinkedList)
class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  // A simple LinkedList to power the Stack
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addToHead(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  
    removeHead() {
      if (!this.head) return null;
      const removed = this.head;
      this.head = this.head.next;
      return removed.data;
    }
  }
  
  // Stack class built using LinkedList
  class Stack {
    constructor(maxSize = Infinity) {
      this.stack = new LinkedList();  // Internal storage
      this.maxSize = maxSize;         // Optional max size (defaults to unlimited)
      this.size = 0;                  // Track current number of elements
    }
  
    // ✅ Check if there’s room to add more items
    hasRoom() {
      return this.size < this.maxSize;
    }
  
    // ✅ Check if stack is empty
    isEmpty() {
      return this.size === 0;
    }
  
    // ✅ Push item to top of the stack
    push(value) {
      if (this.hasRoom()) {
        this.stack.addToHead(value); // Add to beginning of the list
        this.size++;                 // Increase size tracker
      } else {
        throw new Error('Stack is full');
      }
    }
  
    // ✅ Pop item from top of the stack
    pop() {
      if (!this.isEmpty()) {
        const value = this.stack.removeHead(); // Remove from head
        this.size--;                           // Decrease size tracker
        return value;                          // Return popped value
      } else {
        console.log('Stack is empty!');
        return null;
      }
    }
  
    // ✅ Peek at the top item without removing
    peek() {
      if (!this.isEmpty()) {
        return this.stack.head.data;
      }
      return null;
    }
  }
  