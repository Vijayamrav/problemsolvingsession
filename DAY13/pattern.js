const prompt=require('prompt-sync')();
let rows= +prompt("enter no of rows: ")

// for(i=1;i<=rows;i++){
//     store='';
//     for(j=1;j<=i;j++){
//         store+="* ";
//     }
//     console.log(store);
// }

// for(i=1;i<=rows;i++){
//     store='';
//     for(j=1;j<=rows-i;j++){
//         store=store+" ";
//     }
//     for(k=1;k<=i;k++){
//         store=store+"* ";
//     }
//     console.log(store);
// }


// for(i=1;i<=rows;i++){
//     s='';
//     for(j=1;j<=rows;j++){
//         if(i==j){
//             s=s+'*';
//             break;
//         }
//         else{
//             s=s+" ";
//         }
//     }
//     console.log(s);
// }
  mid=Math.ceil(rows/2);
for(i=1;i<=rows;i++){
    s='';
    for(j=1;j<=rows;j++){
        if(i+j==rows+1 || i==j || i==1 || i==rows || j==1 || j==rows || i==mid || j==mid){
            s=s+'*';
        }
        else{
            s=s+" ";
        }

    }
    console.log(s);
}

