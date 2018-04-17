"use strict"

let calculateValue = document.querySelector(".screenCalculateValue");
let screenInput = document.querySelector(".screenValue");

// keyup function //
window.addEventListener("keyup", function(event){
    if(event.shiftKey && event.keyCode === 57){
        displaySkliaustaiOpen();
    } else if(event.shiftKey && event.keyCode === 48){
        displaySkliaustaiClose();
    } else if(event.keyCode === 8 || event.keyCode === 46){
        clearAllData();
    } else if(event.keyCode === 111){
        displayDivide();
    } else if(event.keyCode === 103 || event.keyCode === 55){
        displayNumberSeven();
    } else if(event.keyCode === 104 || event.keyCode === 56){
        displayNumberEight();
    } else if(event.keyCode === 105|| event.keyCode === 57){
        displayNumberNine();
    } else if(event.keyCode === 106){
        displayMultiply();
    } else if(event.keyCode === 100 || event.keyCode === 52){
        displayNumberFour();
    } else if(event.keyCode === 101 || event.keyCode === 53){
        displayNumberFive();
    } else if(event.keyCode === 102 || event.keyCode === 54){
        displayNumberSix();
    } else if(event.keyCode === 109){
        displayMinus();
    } else if(event.keyCode === 97|| event.keyCode === 49){
        displayNumberOne();
    } else if(event.keyCode === 98 || event.keyCode === 50){
        displayNumberTwo();
    } else if(event.keyCode === 99 || event.keyCode === 51){
        displayNumberThree();
    } else if(event.keyCode === 107){
        displayPlus();
    } else if(event.keyCode === 96 || event.keyCode === 48){
        displayNumberZero();
    } else if(event.keyCode === 110 || event.keyCode === 190){
        displayDot();
    } else if(event.keyCode === 13){
        runSum();
    }
});

// Skliaustu-open button //
let skliaustaiBtnOpen = document.querySelector(".skliaustai-open");
skliaustaiBtnOpen.addEventListener("click", displaySkliaustaiOpen);

function displaySkliaustaiOpen(){
    let skliaustaiBtnOpenValue = skliaustaiBtnOpen.value;
    screenInput.value += skliaustaiBtnOpenValue;
}

// Skliaustu-close button //
let skliaustaiBtnClose = document.querySelector(".skliaustai-close");
skliaustaiBtnClose.addEventListener("click", displaySkliaustaiClose);

function displaySkliaustaiClose(){
    let skliaustaiBtnCloseValue = skliaustaiBtnClose.value;
    screenInput.value += skliaustaiBtnCloseValue;
}

// Clear "C" button //
let clearBtn = document.querySelector(".clear");
clearBtn.addEventListener("click", clearAllData);

function clearAllData(){
    screenInput.value = "";
    calculateValue.value = "";
}

// Divide button //
let divideBtn = document.querySelector(".divide");
divideBtn.addEventListener("click", displayDivide);

function displayDivide(){
    let divideBtnValue = divideBtn.value;
    screenInput.value += divideBtnValue;   
}

// 7number button //
let sevenBtn = document.querySelector(".seven");
sevenBtn.addEventListener("click", displayNumberSeven);

function displayNumberSeven(){
    let sevenBtnValue = sevenBtn.value;
    screenInput.value += sevenBtnValue;
}

// 8number button //
let eightBtn = document.querySelector(".eight");
eightBtn.addEventListener("click", displayNumberEight);

function displayNumberEight(){
    let eightBtnValue = eightBtn.value;
    screenInput.value += eightBtnValue;
}

// 9number button //
let nineBtn = document.querySelector(".nine");
nineBtn.addEventListener("click", displayNumberNine);

function displayNumberNine(){
    let nineBtnValue = nineBtn.value;
    screenInput.value += nineBtnValue;
}

// Multiply "x" button //
let multiplyBtn = document.querySelector(".multiply");
multiplyBtn.addEventListener("click", displayMultiply);

function displayMultiply(){
    let multiplyBtnValue = multiplyBtn.value;
    screenInput.value += multiplyBtnValue;
}

// 4number button //
let fourBtn = document.querySelector(".four");
fourBtn.addEventListener("click", displayNumberFour);

function displayNumberFour(){
    let fourBtnValue = fourBtn.value;
    screenInput.value += fourBtnValue;
}

// 5number button //
let fiveBtn = document.querySelector(".five");
fiveBtn.addEventListener("click", displayNumberFive);

function displayNumberFive(){
    let fiveBtnValue = fiveBtn.value;
    screenInput.value += fiveBtnValue;
}

// 6number button //
let sixBtn = document.querySelector(".six");
sixBtn.addEventListener("click", displayNumberSix);

function displayNumberSix(){
    let sixBtnValue = sixBtn.value;
    screenInput.value += sixBtnValue;
}

// Minus button //
let minusBtn = document.querySelector(".minus");
minusBtn.addEventListener("click", displayMinus);

function displayMinus(){
    let minusBtnValue = minusBtn.value;
    screenInput.value += minusBtnValue;
}

// 1number button //
let oneBtn = document.querySelector(".one");
oneBtn.addEventListener("click", displayNumberOne);

function displayNumberOne(){
    let oneBtnValue = oneBtn.value;
    screenInput.value += oneBtnValue;
}

// 2number button //
let twoBtn = document.querySelector(".two");
twoBtn.addEventListener("click", displayNumberTwo);

function displayNumberTwo(){
    let twoBtnValue = twoBtn.value;
    screenInput.value += twoBtnValue;
}

// 3number button //
let threeBtn = document.querySelector(".three");
threeBtn.addEventListener("click", displayNumberThree);

function displayNumberThree(){
    let threeBtnValue = threeBtn.value;
    screenInput.value += threeBtnValue;
}

// Plus button //
let plusBtn = document.querySelector(".plus");
plusBtn.addEventListener("click", displayPlus);

function displayPlus(){
    let plusBtnValue = plusBtn.value;
    screenInput.value += plusBtnValue;
}

// 0number button //
let zeroBtn = document.querySelector(".zero");
zeroBtn.addEventListener("click", displayNumberZero);

function displayNumberZero(){
    let zeroBtnValue = zeroBtn.value;
    screenInput.value += zeroBtnValue;
}

// dot "." button //
let dotBtn = document.querySelector(".dot");
dotBtn.addEventListener("click", displayDot);

function displayDot(){
    let dotBtnValue = dotBtn.value;
    screenInput.value += dotBtnValue;
}

// SUM = button //
let sumBtn = document.querySelector(".sum");
sumBtn.addEventListener("click", runSum);

function runSum(){
    let result;
    calculateValue.value = screenInput.value + " =";

    try {
        result = eval(screenInput.value);
    } catch (e) {
        result = "error -" + e.message;
    }

    screenInput.value = result;
}