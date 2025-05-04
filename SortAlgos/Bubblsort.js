function bubbleSort(arr) {
    let n = arr.length;
    let swapped;

    do {
        swapped = false;
        for (let i = 0; i < n - 1; i++) {
            if (arr[i] > arr[i + 1]) {
                // Swap
                [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
                swapped = true;
            }
        }
        n--; // Optimization: largest element is in place after each pass
    } while (swapped);

    return arr;
}

// Example usage
const array = [5, 3, 8, 4, 2];
const sortedArray = bubbleSort(array);
console.log(sortedArray); // [2, 3, 4, 5, 8]
