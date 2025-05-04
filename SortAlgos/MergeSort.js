function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr; // base case
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    const result = [];
    let i = 0, j = 0;

    // Compare elements from both halves and merge in sorted order
    while (i < left.length && j < right.length) {
        if (left[i] < right[j]) {
            result.push(left[i]);
            i++;
        } else {
            result.push(right[j]);
            j++;
        }
    }

    // Add any remaining elements
    return result.concat(left.slice(i)).concat(right.slice(j));
}

// Example usage
const array = [5, 3, 8, 4, 2];
const sortedArray = mergeSort(array);
console.log(sortedArray); // [2, 3, 4, 5, 8]
