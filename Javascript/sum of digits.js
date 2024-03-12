 var num= +userInput[0];
    var sum=0;
    for(num; num>0; num=Math.floor(num/10))
    {
       sum += num%10;
    }
    console.log(sum)
  