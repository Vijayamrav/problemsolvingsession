// input ['helloworld',''praveen''bsnl'];
// output hollowerld  prevean
const prompt=require('prompt-sync')();
var arr=prompt('enter strings separated by comma: ').split(",");

vowels='aeiouAEIOU';

for( i of arr){
    index=0;
    res='';
    emp=[];
    hasVowels=false;
   for(j of i){
    if(vowels.includes(j)){
       emp.push(j);
       hasVowels=true;
    }
   }
   emp.reverse();
     
   for(k of i){
     if(vowels.includes(k)){
        res=res+emp[index];
        index++;
     }
     else{
        res=res+k;
     }
   }
   if(!hasVowels){
    res=i.split('').sort().join('');
   }
   
   
   console.log(res);
}
   
   
    
   
   
   




