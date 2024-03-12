// Getting input via STDIN
const readline = require("readline");

const inp = readline.createInterface({
  input: process.stdin
});

const userInput = [];

inp.on("line", (data) => {
  userInput.push(data);
});

inp.on("close", () => {
  //start-here
  //Your code goes here … replace the below line with your code logic 
   var string = ""
   var a=+userInput[0];
    for (let i = 0; i < a; i++) {
    for (let j = 0; j < a; j++) {
        if(i==0 || j==0 ||i==a-1 ||j==a-1)
        {
        string += "*";
        }
        else
        {
            string += " "
        }
      }
      //break
      string += "\n";
    }
    console.log(string);
  //console.log(a.join(" "));
  //end-here
});