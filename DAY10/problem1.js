/*1)

Input: nums = [1,1,2]
Output:[1,2,_]
Explanation: Insert the underscores equal number of duplicates in the array.
Input: nums = [0,0,1,1,1,2,2,3,3,4]
Output: 5, nums = [0,1,2,3,4,,,,,_]
*/

// arr=[0,0,1,1,1,2,2,2,3,3,4];
arr=[0,0,1,1,1,2,2,3,3,4];
arrUnique=[];
for(i of arr){
    if(!arrUnique.includes(i)){
        arrUnique.push(i);
    }
}
for(i=0;i<arr.length;i++){
    if(arrUnique[i]===undefined){
        arrUnique[i]='_';
    }
}
console.log(arrUnique);