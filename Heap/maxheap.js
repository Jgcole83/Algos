class MaxHeap {
    constructor() {
      this.heap = [];
    }
  
    // 📥 Insert a new value
    insert(value) {
      this.heap.push(value);
      this.bubbleUp();
    }
  
    // 🔼 Maintain max-heap property after insert
    bubbleUp() {
      let index = this.heap.length - 1;
  
      while (index > 0) {
        let parentIndex = Math.floor((index - 1) / 2);
  
        if (this.heap[index] <= this.heap[parentIndex]) break;
  
        // 🔁 Swap if child > parent
        [this.heap[index], this.heap[parentIndex]] =
          [this.heap[parentIndex], this.heap[index]];
  
        index = parentIndex;
      }
    }
  
    // 🗑️ Remove and return max value
    extractMax() {
      if (this.heap.length === 0) return null;
      if (this.heap.length === 1) return this.heap.pop();
  
      const max = this.heap[0];
      this.heap[0] = this.heap.pop(); // Move last to root
      this.sinkDown();                // Restore heap order
  
      return max;
    }
  
    // 🔽 Move root down to correct position
    sinkDown() {
      let index = 0;
      const length = this.heap.length;
  
      while (true) {
        let left = 2 * index + 1;
        let right = 2 * index + 2;
        let largest = index;
  
        if (left < length && this.heap[left] > this.heap[largest]) {
          largest = left;
        }
  
        if (right < length && this.heap[right] > this.heap[largest]) {
          largest = right;
        }
  
        if (largest === index) break;
  
        [this.heap[index], this.heap[largest]] =
          [this.heap[largest], this.heap[index]];
  
        index = largest;
      }
    }
  
    // 🖨️ Optional: Print heap
    printHeap() {
      console.log(this.heap);
    }
  }
  