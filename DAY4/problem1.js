/*81) Write a program to print the sum of smallest unique no and smallest duplicate number.

input: 351886761
output: 1+3 = 4 */
const prompt=require('prompt-sync')();
var number=prompt('enter a number: ');  //351886761
unique='';
duplicate='';
s='';
// var smallestD;
// var smallestU;

for(i of number){
    if(!s.includes(i)){
        s+=i;
    }
    
}
// console.log(s);
for(num of s){
  count=0;
   for(j of number){
    if(num==j){
        count++;
    }
   }
   if(count>1){
    duplicate+=num;
   }
   else{
    unique+=num;
   }
}
   
   smallestD=duplicate[0];
   smallestU=unique[0];

   for(l of duplicate){
   if(l<smallestD){
       smallestD=l;
   }
}
    for(k of unique){
   if(k<smallestU){
    smallestU=k;
   }
   }

   console.log(duplicate);
   console.log(unique);
   console.log(` ${smallestU}+${smallestD}=${Number(smallestD)+Number(smallestU)}`);





