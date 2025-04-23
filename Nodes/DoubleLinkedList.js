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
  
  // 📌 2. DoublyLinkedList Class
  // Manages the list with head and tail pointers
  class DoublyLinkedList {
    constructor() {
      this.head = null;  // First node
      this.tail = null;  // Last node
    }
  
    // 🔹 2.1 Add to Head
    addToHead(data) {
      const newHead = new Node(data);
      const currentHead = this.head;
  
      if (currentHead) {
        currentHead.setPreviousNode(newHead);
        newHead.setNextNode(currentHead);
      }
  
      this.head = newHead;
  
      if (!this.tail) {
        this.tail = newHead;
      }
    }
  
    // 🔹 2.2 Add to Tail
    addToTail(data) {
      const newTail = new Node(data);
      const currentTail = this.tail;
  
      if (currentTail) {
        currentTail.setNextNode(newTail);
        newTail.setPreviousNode(currentTail);
      }
  
      this.tail = newTail;
  
      if (!this.head) {
        this.head = newTail;
      }
    }
  
    // 🔹 2.3 Remove Head
    removeHead() {
      const removedHead = this.head;
      if (!removedHead) return;
  
      this.head = removedHead.getNextNode();
  
      if (this.head) {
        this.head.setPreviousNode(null);
      }
  
      if (removedHead === this.tail) {
        this.tail = null;
      }
  
      return removedHead.data;
    }
  
    // 🔹 2.4 Remove Tail
    removeTail() {
      const removedTail = this.tail;
      if (!removedTail) return;
  
      this.tail = removedTail.getPreviousNode();
  
      if (this.tail) {
        this.tail.setNextNode(null);
      }
  
      if (removedTail === this.head) {
        this.head = null;
      }
  
      return removedTail.data;
    }
  
    // 🔹 2.5 Remove by Data
    removeByData(data) {
      let currentNode = this.head;
  
      while (currentNode !== null) {
        if (currentNode.data === data) {
          const prevNode = currentNode.getPreviousNode();
          const nextNode = currentNode.getNextNode();
  
          if (prevNode) {
            prevNode.setNextNode(nextNode);
          } else {
            this.head = nextNode;
          }
  
          if (nextNode) {
            nextNode.setPreviousNode(prevNode);
          } else {
            this.tail = prevNode;
          }
  
          return currentNode.data; // Data removed
        }
  
        currentNode = currentNode.getNextNode();
      }
  
      return null; // No match found
    }
  
    // 🔹 2.6 Print List
    printList() {
      let currentNode = this.head;
      let output = '<head> ';
  
      while (currentNode !== null) {
        output += currentNode.data + ' ';
        currentNode = currentNode.getNextNode();
      }
  
      output += '<tail>';
      console.log(output);
    }
  }
  
  // 📌 3. Example Usage
  const list = new DoublyLinkedList();
  list.addToHead(10);       // List: 10
  list.addToHead(20);       // List: 20 → 10
  list.addToTail(5);        // List: 20 → 10 → 5
  list.printList();         // Output: <head> 20 10 5 <tail>
  
  list.removeHead();        // Removes 20
  list.printList();         // Output: <head> 10 5 <tail>
  
  list.removeTail();        // Removes 5
  list.printList();         // Output: <head> 10 <tail>
  
  list.removeByData(10);    // Removes 10
  list.printList();         // Output: <head> <tail>
  