/*Practice work:
------------------------

1) input: HelloWorld

output:
d - 1
e - 1
H - 1
l - 3
o - 2
r - 1
W - 1


output:
d - 1
e - 1
l - 3
o - 2
r - 1
H - 1
W - 1 */

let str='HelloWOrld';
upperLetters=[];
lowerLetters=[];
for(i in str){
    if(str.charCodeAt(i)<=90){
         upperLetters.push(str[i]);
    }
    else{
        lowerLetters.push(str[i]);
    }
}
upperStr=upperLetters.sort().join('');
console.log(upperStr);  //HW
lowerStr=lowerLetters.sort().join('');
console.log(lowerStr);  //dellloor

uniqueLower='';
uniqueUpper='';

for(i of lowerStr){
    if(!uniqueLower.includes(i)){
        uniqueLower+=i;
    }
}
for(v of upperStr){
    if(!uniqueUpper.includes(v)){
        uniqueUpper+=v;
    }
}

for(i of uniqueLower){
    count=0;
    for(j of lowerStr){
        if(i==j){
            count++;
        }
    
    }
    console.log(`${i} ${count}`);
}
for(i of uniqueUpper){
    count=0;
    for(j of uniqueUpper){
        if(i==j){
            count++;
        }
    
    }
    console.log(`${i} ${count}`);
}













    
    





