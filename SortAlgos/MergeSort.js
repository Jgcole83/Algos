const mergeSort = (startArray) => {
    // Base case: if array has only one element, return it
    const length = startArray.length;
    if (length === 1) {
      return startArray;
    }
  
    // Split the array into two halves
    const mid = Math.floor(length / 2);
    const leftArray = startArray.slice(0, mid);
    const rightArray = startArray.slice(mid, length);
  
    // Recursively sort both halves and merge them
    return merge(mergeSort(leftArray), mergeSort(rightArray));
  };
  
  const merge = (left, right) => {
    // Initialize empty array to store merged result
    const result = [];
  
    // While both arrays have elements, compare and push the smaller
    while (left.length && right.length) {
      result.push(left[0] < right[0] ? left.shift() : right.shift());
    }
  
    // Concatenate the remaining elements (if any)
    return result.concat(left, right);
  };
  
  // Sample input array
  const inputArr = [3, 5, 2, 90, 4, 7];
  
  // Output the sorted array
  console.log(mergeSort(inputArr));
  
  module.exports = {
    mergeSort
  };
  