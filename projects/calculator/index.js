let display = document.querySelector('.display');

let numbers = document.querySelectorAll('.num');
let operations = document.querySelectorAll('.operation');
let resultBtn = document.querySelector('.result');
let ce = document.querySelector('.ce');
let c = document.querySelector('.c');

let firstNumber = '';
let secondNumber = '';
let isSecondNumber = false;
let memoryOperation = '';
let itog = 0;

/*add event to btns */
for(let i=0; i<numbers.length; i++){
    let number = numbers[i];
    number.addEventListener('click', function(e){
        let numText = e.target.textContent;
        numberPress(numText);
    });
}

for(let i=0; i<operations.length; i++){
    let operationBtn = operations[i];
    operationBtn.addEventListener('click', function(e){
        let operationText = e.target.textContent;
        operation(operationText);
    });
}

resultBtn.addEventListener('click', PressResult)
ce.addEventListener('click', function(e){
    clear(e.target.textContent);
});
c.addEventListener('click', function(e){
    clear(e.target.textContent);
});


function numberPress(number){
    if(isSecondNumber){
        if(secondNumber.length === 0 && number === '.'){
            secondNumber = '0.';
        }else{
            if(secondNumber.includes(".")){
                if(number !== '.'){
                    secondNumber += number;
                }
            }else{
                secondNumber += number;
            }
        }
        display.textContent = secondNumber;
        
    } else{
        if(firstNumber.length === 0 && number === '.'){
            firstNumber = '0.';
        }else{
            if(firstNumber.includes(".")){
                if(number !== '.'){
                    firstNumber += number;
                }
            }else{
                firstNumber += number;
            }
        }
        display.textContent = firstNumber;
        
    }
}

function operation(oper){
    if(isSecondNumber){
        calculate(firstNumber, secondNumber, memoryOperation);
        memoryOperation = oper;
    } else{
        isSecondNumber = true;
        memoryOperation = oper;
    }  
}

function calculate(first, second, znak){
    switch(znak){
        case '+' : itog = parseFloat((+first + +second).toFixed(8));
        showResult(itog);
        break;
        case '-' : itog =  parseFloat((+first - +second).toFixed(8));
        showResult(itog);
        break;
        case '*' : itog =  parseFloat((+first * +second).toFixed(8));
        showResult(itog);
        break;
        case '/' : itog =  parseFloat((+first / +second).toFixed(8));
        showResult(itog);
        break;
    }
}

function showResult(itogo){
    secondNumber = '';
    firstNumber = itogo+"";
    display.textContent = firstNumber;
}

function PressResult(){
    calculate(firstNumber, secondNumber, memoryOperation);
    clearMemory();
}

function clear(nameC){
    if(nameC == 'CE'){
        isSecondNumber = true;
        secondNumber = '';
        display.textContent = 0;
    } else {
        clearMemory();
        display.textContent = 0;
    }
}

function clearMemory(){
    firstNumber = '';
    secondNumber = '';
    isSecondNumber = false;
    memoryOperation = '';
}
