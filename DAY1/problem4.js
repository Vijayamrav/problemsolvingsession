const prompt=require('prompt-sync')();
var num=prompt('enter a number: ');
var evenSum=0;
var oddSum=0;
for(n of num ){
    if(n%2==1){
        oddSum+=Number(n);
    }
    else{
        evenSum+=Number(n);
    }
}
if(oddSum>evenSum){
    console.log('oddSum is bigger than evenSum');
}
else{
    console.log('evensum is bigger than oddsum');
}