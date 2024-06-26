const prompt=require('prompt-sync')();
rows=+prompt("enter no of rows");

for(i=1;i<=(2*rows)-1;i++){
    cols=(i<=rows)?(rows-i)+1:(i-rows)+1;
    space=(i<=rows)?i:(2*rows)-i;
    s='';
    for(k=1;k<=space;k++){
        s=s+" ";
    }
    for(j=1;j<=cols;j++){
        s=s+"* "
    }
    console.log(s);
}