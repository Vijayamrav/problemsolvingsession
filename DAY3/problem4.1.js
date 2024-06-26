const prompt=require('prompt-sync')();
var number=prompt('enter a number: ');
var leftDiff=number;
rightPrime=0;

for(i=2;i>=i;i++){
    checkPrime=true;
    for(j=2;j<i;j++){
        if(i%j==0){
            checkPrime=false;
            break;
        }
    }
    
    if(checkPrime){
        
        if(i<number){
            leftPrime=0;
            diff=number;
            leftDiff=diff-i;
            diff=leftDiff;
            leftPrime=number-diff;
        
        
    }
         
    
        else if(i>number){
            rightPrime=i;
            break;
        }



    }
}
if((number-leftPrime)<(rightPrime-number)){
    console.log(leftPrime);
}
else if((number-leftPrime)>(rightPrime-number)){
    console.log(rightPrime);
}
else{
    console.log('NULL');
}

