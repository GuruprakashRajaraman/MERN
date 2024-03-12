var a=userInput[0].split(" ");
var odd=[];
var even=[];
for(i=0;i<=a.length;i++)
{
    if(+a[i]===0)
    {
        console.log('Zero');
    }
    else if(+a[i]%2==0)
    {
        even.push(+a[i]);
    }
    else
    {
        odd.push(+a[i]);
    }
}
console.log(even.sort());
console.log(odd.sort());