const prompt=require('prompt-sync')();
let findLS=prompt("enter a number : ");
largest=0;
smallest=10;
for(number of findLS){
    checkPrime=true;
    if(number>1){
        if(number==2){
            smallest=2;
        }
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
        else if(number<smallest){
            smallest=number;
        }
      }

    }
}
console.log(`largest prime is ${largest}`);
console.log(`smallest prime is ${smallest}`);
console.log(`sum is ${Number(largest)+Number(smallest)}`);