var a = userInput[0].split(" ");
var b;
for(var i=0;i<a.length;i+=2)
{
   b=a[i+1];
   a[i+1]=a[i];
   a[i]=b;
}
 console.log(a.join(" "));
