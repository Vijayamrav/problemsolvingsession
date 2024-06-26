/* write a program to print all the largest numbers in array of arrays
input==>[[2,3,5],[4,3,5],[11,98,66,23]]
output==>[5,5,98] */

array=[[2,3,5],[4,3,5],[11,98,66,23]];
result=[];

for(i of array){
    max=i[0];
    for(j of i){
     if(j>max){
        max=j;
     }    
    
    
    }
    result.push(max);
}
console.log(result);

