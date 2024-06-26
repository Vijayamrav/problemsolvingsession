const prompt=require('prompt-sync')();
var rows=prompt('enter no of rows: ');
for(i=1;i<=rows;i++){
    s='';
    for(j=1;j<=rows-i+1;j++){
        s=s+"* ";
    }
    console.log(s);
}