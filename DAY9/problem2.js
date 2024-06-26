/* write a program to print the middle numbers in array pf arrays
input:[[2,3,4],[5,3,8,1],[33,44,21,34,56]]*/
 
array=[[2,3,4],[5,3,8,1],[33,44,21,34,56]];
empty=[];
for(i of array){
    if(i.length%2!=0){
        mid=Math.floor(i.length/2);
        empty.push(i[mid]);
        
    }
    else{
        mid=Math.floor(i.length/2);
        empty.push(i[mid]);
        empty.push(i[mid-1]);
    }
}
str=empty.join(" ");
console.log(str);