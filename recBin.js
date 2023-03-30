function recursiveBinarySearch(arr, target) {
    return search(arr, target, 0, arr.length - 1)
  }
  
  function search(arr, target, lindex,rindex) {
    if (lindex >rindex) {
      return -1
    }
  
    let mindex = Math.floor((lindex +rindex) / 2)
    if (target === arr[mindex]) {
      return mindex
    }
  
    if (target < arr[mindex]) {
      return search(arr, target, lindex, mindex - 1)
    } else {
      return search(arr, target, mindex + 1,rindex)
    }
  }
  
  console.log(recursiveBinarySearch([-5, 2, 4, 6, 10], 10))