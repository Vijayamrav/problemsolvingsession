let input='happy';
input1=input.split('');

for(i=0;i<input.length;i++){
      res='';
     for(j=0;j<input.length-i;j++){
        res=res+input1[j];
         
     }
     console.log(res);
     input1.shift();
}