//Fibonacci warmup - iteration & recursion
function fibs(number) {
    let fibArray = [];
    let a = 0;
    let b = 1;
  
    for (let i = 0; i < number; i++) {
        fibArray.push(a);
        let temp = a;
        a = b;
        b = temp + b;
    }
    console.log(fibArray);
}

function fibsRec(number, a = 0, b = 1 , fibArray = []) {    
    if (number == 0) {
        return fibArray;
    } 

    fibArray.push(a);
    return fibsRec(number - 1, b, a + b, fibArray); 
}


//merge sort

function mergeSort(listArray) {
    //base case
    if (listArray.length <= 1) {
        return listArray;
    }
    
    //split the list in half into 2 separate lists
    let middle = Math.floor(listArray.length / 2);
    let leftHalf = listArray.slice(0, middle);
    let rightHalf = listArray.slice(middle);


    //split lists recursively until each list has length of 1
    let splitLeftHalf = mergeSort(leftHalf);
    let splitRightHalf = mergeSort(rightHalf);
    
    //once lists only contain 1 element each, run through merge function to sort and then merge back to final output
    return merge(splitLeftHalf,splitRightHalf);
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    //compare elements of left and right arrays starting at index 0; lower value goes first into result array
    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex), right.slice(rightIndex));
}

let unsortedArray = [9, 2, 5, 1, 3, 15, 2, 7];
let sortedArray = mergeSort(unsortedArray);
console.log(sortedArray);