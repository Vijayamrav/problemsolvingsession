array=[[2,3,1,3],[5,5,5],[7,88,2,1,7,1,7]]
empty=[];
dup=0;
for(i of array){
    for(j of i){
        if(!empty.includes(j)){
            empty.push(j);
        }
    }

for(k of empty){
    c=0;
    for(e of i){
        if(e==k){
            c++;
        }
    }
    if(c>1){
        dup++;
    }
}
}
console.log(dup);