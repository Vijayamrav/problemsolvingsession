const prompt=require('prompt-sync')();
var number=prompt('enter a number: ');
var uniqueNumber='';
var res='';
for(i=0;i<number.length;i++){
   if(uniqueNumber.indexOf(number[i])===-1){
    uniqueNumber+=number[i];
   }
}

for(j=0;j<uniqueNumber.length;j++){
    prod=1;
    for(k=1;k<=uniqueNumber[j];k++){
        prod=prod*k;
    }
    res=res+prod+' ';
    

}
console.log(res);

    
    






