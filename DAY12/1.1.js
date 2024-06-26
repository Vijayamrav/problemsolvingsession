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

let str='HHelloWooorld';
// extract
upperLetters=[];
for(i in str){
    if(str.charCodeAt(i)<=90){
         upperLetters.push(str[i].toLowerCase());
    }
}
upperLetters=upperLetters.join('');  //hhw
console.log(upperLetters);


strArray=str.toLowerCase().split('').sort().join('');
console.log(strArray); // dehhllloorw

strArrayUnique='';
for(i of strArray){
    if(!strArrayUnique.includes(i)){
        strArrayUnique+=i;              //dehlorw
    }
}
console.log(strArrayUnique);
for(i of strArrayUnique){
    count=0;
     for(j of strArray){
        if((i==j) && upperLetters.includes(j)){
            i=j.toUpperCase();
            count++;
        }
        else if(i==j){
            count++;
        }
     }
     console.log(`${i} ${count}`);
}












    
    





