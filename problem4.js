const prompt=require('prompt-sync')();
var num=prompt('enter a number: ');
var evenSum=0;
var oddSum=0;
for(i=0;i<num.length;i++){
    if(num[i]%2==0){
        evenSum+=Number(num[i]);
    }
    else{
        oddSum+=Number(num[i]);
    }
}
if(oddSum>evenSum){
    console.log('oddSum is bigger than evenSum');
}
else{
    console.log('evensum is bigger than oddsum');
}