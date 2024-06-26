const prompt=require('prompt-sync')();
var num=prompt('enter a number: ');
let evenSum=0;
for(i=0;i<num.length;i++){
    if(num[i]%2==0){ // when we perform modulus operation for strings it converts string into number if it is valid
        var Intnum=parseInt(num[i]);
        evenSum+=Intnum;
    }
}
console.log(`evensum of ${num} is ${evenSum}`);