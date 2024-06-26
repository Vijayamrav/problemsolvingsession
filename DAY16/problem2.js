
const prompt=require('prompt-sync')();
var rows=prompt('enter no of rows: ');
for(i=1;i<=rows;i++){
    s='',c=0,c1=1;
     for(j=1;j<=i;j++){
       if(j%2!=0){
        s=s+c1+" ";
       } 
       else{
        s=s+c+' ';
       } 
     }
     console.log(s);
}