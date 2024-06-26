num=8324833;
numStr=num.toString();
s='';
for(num of numStr){
check=0;
 if(num>1){
    for(i=2;i<num;i++){
        if(num%i==0){
            check++;
            break;
        }
    }
    if(check==0){
       s=s+num;
    }
 }
}
console.log(s);