const prompt=require('prompt-sync')();
var num=prompt('enter a number: ');
var evenSum=0;
var oddSum=0;


for(i=0;i<num.length;i++){
    if(num[i]%2==0){
        var intNum=parseInt(num[i]);
        evenSum+=intNum;
    }
    else{
        var intNum=parseInt(num[i]);
        oddSum+=intNum;
    }
}

console.log(`difference between evensum and oddsum of ${num}`);
console.log(evenSum-oddSum);
