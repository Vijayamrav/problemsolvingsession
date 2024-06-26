const prompt=require('prompt-sync')();
var n=+prompt('enter the extreme number to get primes: ');
var array=new Array(n+1).fill(true);
array[0]=false;
array[1]=false;

for(i=2;i<=n;i++){
    if(array[i]){
        for(j=i*i;j<=n;j=j+i){
            array[j]=false;
        }
    }
}
var indexTrue=[];
for(k=0;k<array.length;k++){
   if(array[k]===true){
    indexTrue.push(k);
   }
}
console.log(indexTrue);