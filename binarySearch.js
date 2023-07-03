function binarySearch(arr, target) {
  let low = 0;
  let high = arr.length - 1;

  while (low <= high) {
    const mid = Math.floor((low + high) / 2);

    if (arr[mid] === target) {
      return mid; // Found the target, return the index
    } else if (arr[mid] < target) {
      low = mid + 1; // Target is in the right half of the array
    } else {
      high = mid - 1; // Target is in the left half of the array
    }
  }

  return -1; // Target not found
}

// Example usage:
const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
const target = 9;

const index = binarySearch(sortedArray, target);
if (index !== -1) {
  console.log(`Found ${target} at index ${index}`);
} else {
  console.log(`${target} not found in the array`);
}
