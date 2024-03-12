 var numbers = userInput[0].split(" ");
    var length = numbers.length;
    mid = Math.floor(length/2) -1;
    for(idx=0; idx<Math.floor(length/2)/2; idx++){
        temp = numbers[mid];
        numbers[mid] = numbers[idx];
        numbers[idx] = temp;
        mid-=1;
    }
    midFirst = Math.floor(length/2);
    if (length%2!=0) midFirst+=1;
    
    last = length-1;
    for(idx=midFirst; idx<last; idx++){
        temp = numbers[last];
        numbers[last] = numbers[idx];
        numbers[idx] = temp;
        last-=1;
    }
    
    console.log(numbers);