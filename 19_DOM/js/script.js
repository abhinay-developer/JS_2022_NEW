console.log("Hello")

let displayResult=(result)=>{
    document.getElementById('result').innerHTML=result;
    document.getElementById('result').style.color="blue";
}


let onArithmetic=(value)=>{
    let first,second,result;
    first=document.getElementById('firstNumber').value;
    second=document.getElementById('secondNumber').value;
    // console.log(first);
    // console.log(second);

    // if(value=='add'){
    //     result=Number(first)+Number(second);
    //     displayResult(result);
    // }else if(value=='sub'){
    //     result=Number(first)-Number(second);
    //     displayResult(result);
    // }else if(value=='mul'){
    //     result=Number(first)*Number(second);
    //     displayResult(result);
    // }
    // else if(value=='div'){
    //     result=Number(first)/Number(second);
    //     displayResult(result);
    // }else{
    //     alert("No");
    // }


    switch(value){
        case "add":
        result=Number(first)+Number(second);
        displayResult(result);
        break;
        case "sub":
        result=Number(first)-Number(second);
        displayResult(result);
        break;
        case "mul":
        result=Number(first)*Number(second);
        displayResult(result);
        break;
        case "div":
        result=Number(first)/Number(second);
        displayResult(result);
        break;
        default :
        console.log("No condition")
        break;

    }
    
  
    
}