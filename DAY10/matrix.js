/*
write a program to take user from input as matrix form*/
const prompt=require('prompt-sync')();
rows= +prompt('enter number of rows: ');
cols= +prompt('enter number of cols: ');

array=[];
for(i=0;i<rows;i++){
    subArray=[];
    for(j=0;j<cols;j++){
        console.log(`enter ${i+1}${j+1} element`);
        ele= +prompt();
        subArray.push(ele);
    }
    array.push(subArray);
}
for(a of array){
    s='';
    for(b of a){
        s=s+b+" ";
    }
    console.log(s);
}