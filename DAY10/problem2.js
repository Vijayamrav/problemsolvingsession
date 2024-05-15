/*2)

Input: nums = [3,2,2,3]
Input2: val = 3
Output:[2,2,,]
Explanation: Insert under scores which are equal to occurences of input 2 value */
const prompt=require('prompt-sync')();
arr=[3,2,2,3];
arr1=[];
ele= +prompt('enter the value:');
for(i of arr){
    if(i!=ele){
      arr1.push(i);
    }
}

for(i=0;i<arr.length;i++){
    if(arr1[i]===undefined){
        arr1[i]='_';
    }
}
console.log(arr1);