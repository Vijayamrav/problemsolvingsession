// Write a program to find the largest prime in the given number
// input: 46537
// output: 7
// const prompt=require('prompt-sync')();
debugger;
const prompt=require('prompt-sync')();
let findLarge=prompt("enter a number: ");
largest=1;
for(number of findLarge){
    checkPrime=true;
    if(number>1){
        for(i=2;i<number;i++){
            if(number%i==0){
              checkPrime=false;
              break;  
            }
        }
        if(checkPrime){
            if(number>largest){
                largest=number;
            }
        }
    }    
}
console.log(largest);

