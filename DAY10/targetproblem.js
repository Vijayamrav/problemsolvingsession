/* write a program to print the elements which matches the target
input=[2,5,13,7,4]
target=9
output:(2,7)  (5,4)*/

arr=[2,5,13,7,4];
target=9;

for(i=0;i<arr.length;i++){
    for(j=i+1;j<arr.length;j++){
        if(arr[i]+arr[j]==target){
            console.log(`(${arr[i]},${arr[j]})`);
        }
    }

}