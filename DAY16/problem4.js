rows=5
count=0
// counting how may rows required according to rows
for(i=1;i<=rows;i++)
    {
        for(j=1;j<=i;j++)
            {
              count++
            }
    }
    // console.log(count)
    // finding prime numbers according to count
   primearr=[]
primearr.push(1)
   num=2
 while(primearr.length<=count)
  {
      c=true
    for(j=2;j<num;j++)
      {
        if(num%j==0)
          {
            c=false
            break
          }
      }
      if(c)
        {
          primearr.push(num)
        }
        num++
  }
  // console.log(primearr)
  


for(i=1;i<rows;i++)
  {
    ele=i+rows-2
    s=""
    for(j=1;j<=i;j++)
      {
        if(j==1)
          {
            s=s+primearr[i]+" "
            // console.log(s)
          }
          else
          {
            s=s+primearr[ele]+" "
            ele=ele+rows-j
          }

      }console.log(s)
  }