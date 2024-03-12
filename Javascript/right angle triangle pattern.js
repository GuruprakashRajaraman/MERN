var a=[];
for(var i=0;i<=5;i++){
            a.push('*');
            console.log(a.join(" "));
        }


//large to small
        var string = ""
        var a=+userInput[0];
         for (let i = 0; i < a; i++) {
         for (let j = i; j < a; j++) {
             string += "*";
           }
           string += "\n";
         }
         console.log(string);