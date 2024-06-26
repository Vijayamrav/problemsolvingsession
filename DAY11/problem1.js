/*1) Find the total numbers of pairs, formed by the given space separated numbers.

Enter numbers: 10 20 10 30 20 20 20
output: 3 pairs

Enter numbers: 10 20 30 50 50 
output: 1 pair */
const prompt=require('prompt-sync')();
arr=prompt().split(" ").map(Number);
pairs=0;
empty=[];
for(i of arr){
    if(!empty.includes(i)){
        empty.push(i);
    }
}
for(j of empty){
    count=0;
    for(k of arr){
        if(j==k){
            count++;
        }
    }
    if(count>=2){
        pairs=pairs+Math.floor(count/2);
    }
    
    
    
}
console.log(pairs);

