const array = [[2,3,1,3],[5,5,5],[7,88,2,1,7,1,7]];
let count = 0;

for (let subarray of array) {
    subarray.sort((a, b) => a - b); // Sort the subarray
    for (let i = 0; i < subarray.length - 1; i++) {
        if (subarray[i] === subarray[i + 1]) {
            count++; 
            break;
            // Increment count if adjacent elements are equal
        }
    }
}

console.log(count); // Output the total count of duplicates
