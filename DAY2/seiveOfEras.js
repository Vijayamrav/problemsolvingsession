for(let i=2;i<=1000;i++){
     if(i==2 || i==3 || i==5 || i==7){
        console.log(i);
     }
    else if(i%2==0 || i%3==0 || i%5==0 || i%7==0 || i%11==0|| i%13==0){
       continue; 
    }
    else{
        console.log(i);
    }
}
