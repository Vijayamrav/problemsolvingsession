/*1) Write a program to print the below pattern based on no of rows
input: rows: 5 
output:* * * * * * 
  *               *
    *           *
      *       *
        *   *
          *   */
const prompt=require('prompt-sync')();
var rows=+prompt("enter the no of rows: ");

for(i=1;i<=rows;i++){
    s='';
    for(k=1;k<=i;k++){
        s=s+" ";
    }
    for(j=1;j<=rows-i+1;j++){
        if(j==1||i==1|| i+j==rows+1){
         s=s+'* ';
        }
        else{
            s=s+"  "
        }
    }
    console.log(s);
}

