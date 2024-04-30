const prompt=require('prompt-sync')();
let findNonPrime=prompt('enter a number: ');
largest=0;
for(number of findNonPrime){
    
    if(number>1){
        for(i=2;i<number;i++){
            if(number%i==0){
                if(number>largest){
                    largest=number;
                }
            }
        }
    }
}
console.log(largest);