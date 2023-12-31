// Multiple Pointers
/*
Write a function called averagePair. 
Given a sorted array of integers and a target average, 
determine if there is a pair of values in the array where the average of the pair equals the target average. 
There may be more than one pair that matches the average target.
*/
function averagePair(array, target) {
    // add whatever parameters you deem necessary - good luck!
    let left = 0,
        right = array.length - 1;
    if (array.length === 0) return false;
    let average = 0;

    while (left < right) {
        average = (array[left] + array[right]) / 2;
        if (average === target) {
            return true;
        } else if (average < target) {
            left++;
        } else {
            right--;
        }
    }
    return false;
}

console.log(
    averagePair([1, 2, 3], 2.5), // true
    averagePair([1, 3, 3, 5, 6, 7, 10, 12, 19], 8), // true
    averagePair([-1, 0, 3, 4, 5, 6], 4.1), // false
    averagePair([], 4), // false
);
