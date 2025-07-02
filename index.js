const button1 = document.getElementById("button1")
const button2 = document.getElementById("button2")
const button3 = document.getElementById("button3")
const button4 = document.getElementById("button4")
const button5 = document.getElementById("button5")
const button6 = document.getElementById("button6")
const button7 = document.getElementById("button7")
const button8 = document.getElementById("button8")
const button9 = document.getElementById("button9")
const button0 = document.getElementById("button0")
const buttonMultiply = document.getElementById("buttonMultiply")
const buttonDivide = document.getElementById("buttonDivide")
const buttonAdd = document.getElementById("buttonAdd")
const buttonSubtract = document.getElementById("buttonSubtract")
const buttonEnter = document.getElementById("buttonEnter")

const calculatorDisplay = document.getElementById("displayText")



let operation = '';
let valueStoreX =``;
let valueStoreY = ``;
let operatorCheck = false;

// button1.addEventListener("click", ()=> calculatorArray.push(1))
button9.addEventListener("click", ()=> test(9))
// button2.addEventListener("click", ()=> calculatorArray.push(2))
button8.addEventListener("click", ()=> test(8))
button7.addEventListener("click", ()=> test(7))
button6.addEventListener("click", ()=> test(6))
button5.addEventListener("click", ()=> test(5))
button4.addEventListener("click", ()=> test(4))
button3.addEventListener("click", ()=> test(3))
button2.addEventListener("click", ()=> test(2))
button1.addEventListener("click", ()=> test(1))
button0.addEventListener("click", ()=> test(0))
// buttonMultiply.addEventListener("click", ()=> operation = `*`)
buttonMultiply.addEventListener("click", ()=> operatorSet(`*`))
buttonDivide.addEventListener("click", ()=> operatorSet(`/`))
buttonAdd.addEventListener("click", ()=> operatorSet(`+`))
buttonSubtract.addEventListener("click", ()=> operatorSet(`-`))
// buttonEnter.addEventListener("click", inputOperation)
buttonEnter.addEventListener("click", executionCheck)


function test(num){
    console.log(`test function here`);
    
    if (operatorCheck === false){
        if (valueStoreX >0){
            valueStoreX =0;
        }
        valueStoreX += (num);
        console.log(`valuestoreX check 1, ${valueStoreX}`);
        console.log(operatorCheck);
        calculatorDisplay.innerText = String(valueStoreX)
        
        
    } else if (operatorCheck === true){
        valueStoreY += (num);
        console.log(`valuestoreY check 1, ${valueStoreY}`);
        calculatorDisplay.innerText += ` `+ String(valueStoreY)
    }
}

function operatorSet(operation){
    operator = operation;
    operatorCheck = true;
    console.log(`operatorSet function check : ${operator}`);
    calculatorDisplay.innerText += ` ${operator}`
    return operator;
    
}


function executionCheck(){
    let result;
    let x = Number(valueStoreX);
    let y = Number(valueStoreY);
     
    if (operatorCheck === true){

        switch (operator) {
            case `*`: result = x * y ;
            break;
            case `/`: result = x / y;
            break;
            case `+`: result = x + y;
            break;
            case `-`: result = x - y;
            break;
        }
    }
    console.log(`execution check 3: ${result}`)
    operatorCheck = false;
    valueStoreX = result;
    valueStoreY = 0;
    operator = ``
    calculatorDisplay.innerText = String(result)

    console.log(`valueStoreX:`, valueStoreX);
    console.log(`valueStoreY:`, valueStoreY);
    console.log(`operator:`, operator);
    
    
}