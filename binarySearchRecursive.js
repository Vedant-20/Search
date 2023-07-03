function binarySearchRecursive(arr, target, low, high) {
    if (low > high) {
      return -1; // Target not found
    }
  
    const mid = Math.floor((low + high) / 2);
  
    if (arr[mid] === target) {
      return mid; // Found the target, return the index
    } else if (arr[mid] < target) {
      return binarySearchRecursive(arr, target, mid + 1, high); // Target is in the right half of the array
    } else {
      return binarySearchRecursive(arr, target, low, mid - 1); // Target is in the left half of the array
    }
  }
  
  // Example usage:
  const sortedArray = [1, 3, 5, 7, 9, 11, 13, 15];
  const target = 9;
  
  const index = binarySearchRecursive(sortedArray, target, 0, sortedArray.length - 1);
  if (index !== -1) {
    console.log(`Found ${target} at index ${index}`);
  } else {
    console.log(`${target} not found in the array`);
  }
  