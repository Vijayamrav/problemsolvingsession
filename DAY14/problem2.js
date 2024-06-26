/*2) Write a program to print the below pattern

input: Enter number: 12345

1   5
 2 4
  3
 2 4
1   5 */
const prompt=require('prompt-sync')();
var number=prompt('enter number: ');


for(i=0;i<number.length;i++){
   s='';
   for(j=0;j<number.length;j++){
     if(i==j){
        s=s+number[i]+'  ';
     }
    
     else if(i+j==number.length-1){
         
        s=s+number[j]+"  ";

     }
     else{
        s=s+"  "
     }
   }
   console.log(s);
   
}