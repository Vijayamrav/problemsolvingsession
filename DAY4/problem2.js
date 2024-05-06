const prompt=require('prompt-sync')();
var number=prompt('enter a number: ');
var s='';
var unique='';
var duplicate='';
for(num of number){
    if(!s.includes(num)){
        s=s+num;
    }
}
for(compare of s){
    count=0;
    for(compareNum of number){
        if(compare==compareNum){
            count++;
        }
    }
    if(count>1){
      duplicate+=compare;
    }
    else{
        unique+=compare;
    }

}
largestUnique=unique[0];
largestDup=duplicate[0];
for(u of unique){
   if(u>largestUnique){
    largestUnique=u;
   }
}
for(d of duplicate){
    if(d>largestDup){
        largestDup=d;
    }
}
console.log(unique);
console.log(duplicate);
console.log(largestUnique);
console.log(largestDup);
result=Number(largestUnique)+Number(largestDup);
console.log(`${largestUnique}+${largestDup}=${result}`)

