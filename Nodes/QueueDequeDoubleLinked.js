// 📌 1. Node Class
// Represents a single node in the list
class Node {
    constructor(data) {
      this.data = data;     // Value of the node
      this.next = null;     // Pointer to next node
      this.prev = null;     // Pointer to previous node
    }
  
    // Utility methods to set and get pointers
    setNextNode(node) {
      this.next = node;
    }
  
    setPreviousNode(node) {
      this.prev = node;
    }
  
    getNextNode() {
      return this.next;
    }
  
    getPreviousNode() {
      return this.prev;
    }
  }
  
  // 📌 2. Queue Class
  // Implements Queue using a doubly linked list (FIFO)
  class Queue {
    constructor() {
      this.head = null; // Front of the queue
      this.tail = null; // Rear of the queue
    }
  
    // 🔹 2.1 Enqueue: Add to Tail (Rear of the queue)
    enqueue(data) {
      const newNode = new Node(data);
      if (this.tail) {
        this.tail.setNextNode(newNode); // Link current tail to new node
        newNode.setPreviousNode(this.tail); // Set previous pointer for new node
      }
      this.tail = newNode; // Move the tail to the new node
      if (!this.head) {
        this.head = newNode; // Set head if the queue was empty
      }
    }
  
    // 🔹 2.2 Dequeue: Remove from Head (Front of the queue)
    dequeue() {
      if (!this.head) return null; // Queue is empty
      const removedData = this.head.data;
      this.head = this.head.getNextNode(); // Move head to next node
      if (this.head) {
        this.head.setPreviousNode(null); // Remove reference to the old head
      }
      if (!this.head) {
        this.tail = null; // If the queue becomes empty, set tail to null
      }
      return removedData; // Return the removed data
    }
  
    // 🔹 2.3 Print Queue
    printQueue() {
      let currentNode = this.head;
      let output = '<front> ';
      while (currentNode !== null) {
        output += currentNode.data + ' ';
        currentNode = currentNode.getNextNode();
      }
      output += '<rear>';
      console.log(output);
    }
  }
  
  // 📌 3. Deque Class
  // Implements Deque using a doubly linked list (Allowing operations at both ends)
  class Deque {
    constructor() {
      this.head = null; // Front of the deque
      this.tail = null; // Rear of the deque
    }
  
    // 🔹 3.1 Add to Front
    addFront(data) {
      const newNode = new Node(data);
      if (this.head) {
        this.head.setPreviousNode(newNode); // Link current head to new node
        newNode.setNextNode(this.head); // Set next pointer for new node
      }
      this.head = newNode; // Move the head to the new node
      if (!this.tail) {
        this.tail = newNode; // Set tail if the deque was empty
      }
    }
  
    // 🔹 3.2 Add to Rear (Tail)
    addRear(data) {
      const newNode = new Node(data);
      if (this.tail) {
        this.tail.setNextNode(newNode); // Link current tail to new node
        newNode.setPreviousNode(this.tail); // Set previous pointer for new node
      }
      this.tail = newNode; // Move the tail to the new node
      if (!this.head) {
        this.head = newNode; // Set head if the deque was empty
      }
    }
  
    // 🔹 3.3 Remove from Front
    removeFront() {
      if (!this.head) return null; // Deque is empty
      const removedData = this.head.data;
      this.head = this.head.getNextNode(); // Move head to next node
      if (this.head) {
        this.head.setPreviousNode(null); // Remove reference to old head
      }
      if (!this.head) {
        this.tail = null; // If the deque becomes empty, set tail to null
      }
      return removedData; // Return the removed data
    }
  
    // 🔹 3.4 Remove from Rear
    removeRear() {
      if (!this.tail) return null; // Deque is empty
      const removedData = this.tail.data;
      this.tail = this.tail.getPreviousNode(); // Move tail to previous node
      if (this.tail) {
        this.tail.setNextNode(null); // Remove reference to old tail
      }
      if (!this.tail) {
        this.head = null; // If the deque becomes empty, set head to null
      }
      return removedData; // Return the removed data
    }
  
    // 🔹 3.5 Print Deque
    printDeque() {
      let currentNode = this.head;
      let output = '<front> ';
      while (currentNode !== null) {
        output += currentNode.data + ' ';
        currentNode = currentNode.getNextNode();
      }
      output += '<rear>';
      console.log(output);
    }
  }
  
  // 📌 4. Example Usage
  
  // Queue Operations
  console.log('Queue Example:');
  const queue = new Queue();
  queue.enqueue(10); // Queue: 10
  queue.enqueue(20); // Queue: 10 → 20
  queue.enqueue(30); // Queue: 10 → 20 → 30
  queue.printQueue(); // Output: <front> 10 20 30 <rear>
  console.log('Dequeued:', queue.dequeue()); // Dequeued: 10
  queue.printQueue(); // Output: <front> 20 30 <rear>
  
  // Deque Operations
  console.log('\nDeque Example:');
  const deque = new Deque();
  deque.addFront(10); // Deque: 10
  deque.addRear(20);  // Deque: 10 → 20
  deque.addFront(5);  // Deque: 5 → 10 → 20
  deque.addRear(25);  // Deque: 5 → 10 → 20 → 25
  deque.printDeque(); // Output: <front> 5 10 20 25 <rear>
  console.log('Removed from Front:', deque.removeFront()); // Removed from Front: 5
  deque.printDeque(); // Output: <front> 10 20 25 <rear>
  console.log('Removed from Rear:', deque.removeRear()); // Removed from Rear: 25
  deque.printDeque(); // Output: <front> 10 20 <rear>
  