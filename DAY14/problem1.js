/*1) Write a program to print the below pattern based on number of rows
rows=4
1
2 5
3 6 8
4 7 9 10*/
const prompt=require('prompt-sync')();
let rows=+prompt("Enter no of rows: ")
value=0;
for(i=1;i<=rows;i++){
    s='';
    
    for(j=1;j<=i;j++){
      if(j==1){
        value++;
         s=s+value+" ";
        
      }
      else if(j==2){
        s=s+(i+j+1)+" ";
      }
      else{
        s=s+(i+j+2)+" "
      }
      
      
    }
    console.log(s);
    
   
    
    
    
}
