// 🧱 Node-based MinHeap implementation using an array
class MinHeap {
    constructor() {
      // The heap is stored in an array
      this.heap = [];
    }
  
    // 📥 Insert a new value into the heap
    insert(value) {
      this.heap.push(value);      // Step 1: Add value at the end
      this.bubbleUp();            // Step 2: Restore min-heap by bubbling up
    }
  
    // 🔼 Bubble up the newly inserted value
    bubbleUp() {
      let index = this.heap.length - 1;  // Start with last index (new item)
  
      // While the current item is not the root
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2); // Calculate parent index
  
        // ✅ If parent is smaller or equal, heap is valid
        if (this.heap[index] >= this.heap[parentIndex]) break;
  
        // 🔁 Swap child with parent
        [this.heap[index], this.heap[parentIndex]] =
          [this.heap[parentIndex], this.heap[index]];
  
        // Move up the heap
        index = parentIndex;
      }
    }
  
    // 🖨️ Optional: Print heap as an array
    printHeap() {
      console.log(this.heap);
    }
  }
  