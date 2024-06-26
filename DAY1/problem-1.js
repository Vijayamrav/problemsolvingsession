const prompt=require('prompt-sync')();
var numberOdd=prompt("enter a number: ");
var oddSum=0;

for(i=0;i<numberOdd.length;i++){
    if(numberOdd[i]%2!=0){
        var intNum=parseInt(numberOdd[i]);
        oddSum+=intNum;
    }
}
console.log(`oddsum of ${numberOdd} is ${oddSum}`);

