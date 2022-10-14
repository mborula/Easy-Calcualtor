var beforeNumber = null;
var currentNumber = "";
var currentOperator = null;
var screenText = '';
var lastNotNumber = true;

$("button").click(function(){
    buttonID = $(this).attr("id");  
    buttonClass = $(this).attr("class");  
    if(buttonClass === "number" && String(currentNumber).length < 40){
        if(String(currentNumber).length === 1 && Number(currentNumber) === 0 && buttonID !== "."){
            currentNumber = buttonID;
        }
        else{
            currentNumber += buttonID;
        }
        screenText = currentNumber;
        lastNotNumber = false;
    }
    if(buttonID === "clear"){
        beforeNumber = null;
        currentNumber = "";
        currentOperator = null;
        screenText = '';
        lastNotNumber = true;
    }
    else if(buttonID === "*-1" && lastNotNumber === false){
        var temp = Number(currentNumber);
        temp *= -1;
        currentNumber = String(temp);
        screenText = currentNumber;
    }
    else if(buttonClass !== "number" && buttonID !== "=" && lastNotNumber === false){
        beforeNumber = Number(currentNumber);
        currentOperator = buttonID;
        screenText = currentOperator;
        currentNumber = "";
        lastNotNumber = true
    }
    else if(buttonID === "=" && beforeNumber !== null && lastNotNumber === false){
        switch (currentOperator) {
            case "+": 
                screenText = beforeNumber + Number(currentNumber);  
                break;
            case "-":   
                screenText = beforeNumber - Number(currentNumber);       
                break;
            case "*":   
                screenText = beforeNumber * Number(currentNumber);       
                break;
            case "/":   
                if(Number(currentNumber) !== 0){
                    screenText = beforeNumber / Number(currentNumber);    
                }
                else{
                    screenText = 0;
                } 
                break;
            default:
                break;
        }
        currentNumber = screenText;
        lastNotNumber = false;
    }
    $("h1").text(screenText)
})
