class Node {
    constructor(data) {
      this.data = data;
      this.next = null;
    }
  }
  
  class LinkedList {
    constructor() {
      this.head = null;
    }
  
    addToHead(data) {
      const newNode = new Node(data);
      newNode.next = this.head;
      this.head = newNode;
    }
  }
  
  class HashMap {
    constructor(size = 10) {
      this.hashmap = new Array(size).fill(null).map(() => new LinkedList());
    }
  
    hash(key) {
      let hashCode = 0;
      for (let i = 0; i < key.length; i++) {
        hashCode += hashCode + key.charCodeAt(i);
      }
      return hashCode % this.hashmap.length;
    }
  
    assign(key, value) {
      const arrayIndex = this.hash(key);
      const linkedList = this.hashmap[arrayIndex];
      console.log(`Storing ${value} at index ${arrayIndex}`);
  
      let current = linkedList.head;
      while (current) {
        if (current.data.key === key) {
          current.data = { key, value }; // update existing key
          return;
        }
        if (!current.next) break;
        current = current.next;
      }
  
      // Key not found; add new node
      if (!linkedList.head) {
        linkedList.addToHead({ key, value });
      } else {
        current.next = new Node({ key, value });
      }
    }
  
    retrieve(key) {
      const arrayIndex = this.hash(key);
      let current = this.hashmap[arrayIndex].head;
  
      while (current) {
        if (current.data.key === key) {
          console.log(`\nRetrieving ${current.data.value} from index ${arrayIndex}`);
          return current.data.value;
        }
        current = current.next;
      }
      return null;
    }
  }
  