/*1) 
Write a program to print the count of dup's in all the sub arrays
input: [[2,3,1,3],[5,5,5],[7,88,2,1,7,1,7]]
output: 4 duplicates */
array=[[2,3,1,3],[5,5,5],[7,88,2,1,7,1,7]];

count=0;
arr=[];
for(i in array){
     
    for(j=0;j<array[i].length;j++){
         for(k=j+1;k<array[i].length;k++){
            if(array[i][j]==array[i][k]){
                
                arr.push(array[i][j]);
                break;
                 
            }
         }   
        
        
    }
    
}
unique='';
for(u of arr){
    if(!unique.includes(u)){
        unique=unique+u;
    }
}
console.log(unique.length);