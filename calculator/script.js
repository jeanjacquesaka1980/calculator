// change the color of the button when mousedown/up
// for all standard buttons
let button = document.getElementsByClassName('button');
changeBackgroundOnMouseEvents(button, "#a3a3a3", "#808080");

// for the large ones so 0
let buttonLg = document.getElementsByClassName('button-lg');
changeBackgroundOnMouseEvents(buttonLg, "#a3a3a3", "#808080");


// for the yellow ones
let button2 = document.getElementsByClassName('button2');
changeBackgroundOnMouseEvents(button2, "#ffe299", "#ffca47");

function changeBackgroundOnMouseEvents(htmlElements, mouseDownColor, mouseUpColor) {
  for (i = 0; i < htmlElements.length; i++) {
    htmlElements[i].onmousedown = function() {
      this.style.backgroundColor = mouseDownColor;
    };

    htmlElements[i].onmouseup = function() {
      this.style.backgroundColor = mouseUpColor;
    };
  }
}

// check if a button have been clicked



// show the numbers typed or result

let result = document.getElementById('result');

let preview = [];
let a;
let b;
let c;
let d;
let e;


let buttonAc = document.getElementById('ac');
let plusMinus = document.getElementById('plus-minus');
let plusMinus2 = document.getElementById('plus-minus2');
let percentage = document.getElementById('percentage');
let percentage2 = document.getElementById('percentage2');

let buttonN0 = document.getElementById('zero');
let buttonN1 = document.getElementById('one');
let buttonN2 = document.getElementById('two');
let buttonN3 = document.getElementById('three');
let buttonN4 = document.getElementById('four');
let buttonN5 = document.getElementById('five');
let buttonN6 = document.getElementById('six');
let buttonN7 = document.getElementById('seven');
let buttonN8 = document.getElementById('eight');
let buttonN9 = document.getElementById('nine');
let allButtonsN = [buttonN0, buttonN1, buttonN2, buttonN3, buttonN4, buttonN5, buttonN6, buttonN7, buttonN8, buttonN9];

let buttonN02 = document.getElementById('zero2');
let buttonN12 = document.getElementById('one2');
let buttonN22 = document.getElementById('two2');
let buttonN32 = document.getElementById('three2');
let buttonN42 = document.getElementById('four2');
let buttonN52 = document.getElementById('five2');
let buttonN62 = document.getElementById('six2');
let buttonN72 = document.getElementById('seven2');
let buttonN82 = document.getElementById('eight2');
let buttonN92 = document.getElementById('nine2');
let allButtonsN2 = [buttonN02, buttonN12, buttonN22, buttonN32, buttonN42, buttonN52, buttonN62, buttonN72, buttonN82, buttonN92];

// function getNum(val) {
//    if (isNaN(val)) {
//      return 0;
//    }
//    return val;
// }

// concatenation of the buttons numbers without any commas

function buttonNumberHandler(button, value){
  button.onclick = function(){
    buttonAc.innerHTML = "C";
    button = value;
    preview.push(button);
    a = preview.join('');
    result.innerHTML = a;
  }
}

buttonNumberHandler(buttonN0, 0);
buttonNumberHandler(buttonN1, 1);
buttonNumberHandler(buttonN2, 2);
buttonNumberHandler(buttonN3, 3);
buttonNumberHandler(buttonN4, 4);
buttonNumberHandler(buttonN5, 5);
buttonNumberHandler(buttonN6, 6);
buttonNumberHandler(buttonN7, 7);
buttonNumberHandler(buttonN8, 8);
buttonNumberHandler(buttonN9, 9);

function acOnClick(bt1){
  bt1.innerHTML = "AC";
  preview = [];
  var1 = preview;
  var2 = var1;
  var3 = var2;
  var4 = var3;
  result.innerHTML = 0;
}

function plusMinusOnClick(bt1, bt2){
  bt1.style.display = "none";
  bt2.style.display = "block";
}

function allButtonsNonClick(bt1, bt2){
  for(i = 0; i < bt1.length; i++){
    bt1[i].style.display = 'none';
    bt2[i].style.display = 'block';
  }
}

function buttonResetHandler(bt1, bt2, bt3, var1, var2, var3, var4){
  bt1.onclick = function (){
    acOnClick(buttonAc);
    plusMinusOnClick(plusMinus2, plusMinus);
    allButtonsNonClick(allButtonsN2, allButtonsN);
  }
}

buttonResetHandler(buttonAc, allButtonsN2, allButtonsN, a, b, c, d);

function allButtonsNResetHandler(bt1, bt2){
    allButtonsNonClick(allButtonsN, allButtonsN2);
    for(i = 0; i < bt2.length; i++){
      bt2[i].onclick = function(){
        plusMinusOnClick(plusMinus2, plusMinus);
        acOnClick(buttonAc);
        allButtonsNonClick(allButtonsN2, allButtonsN);
      }
    }
}

function resultPlusMinus(bt1, bt2, var1, var2, var3, var4){

  bt1.onclick = function(){
    if(result.innerHTML == 0){
      preview.push(0);
      var1 = preview.join('');
      var2 = parseInt(var1, 10);
      result.innerHTML = var2;
      plusMinusOnClick(plusMinus, plusMinus2);
    }


    var1 = preview.join('');
    var2 = parseInt(var1, 10);
    var3 = var2 * -1;
    var4 = var3;
    result.innerHTML = var3;
    plusMinusOnClick(plusMinus, plusMinus2);

    if(result.innerHTML == var3){
      var4 = var3 * -1;
    }
    bt2.onclick = function(){
      result.innerHTML = var4;
      plusMinusOnClick(plusMinus2, plusMinus);
    }
    allButtonsNResetHandler(allButtonsN, allButtonsN2);
  }
}

resultPlusMinus(plusMinus, plusMinus2, a, b, c, d);


// TO CHECK

// function ifResultIsZeroOnPlusMinusClick(bt1){
//   if(isNaN(result)){
//     bt1.onclick = function(){
//       return result;
//       // preview = [];
//       // var1 = preview;
//       // var2 = var1;
//       // var3 = var2;
//       // var4 = var3;
//       // result.innerHTML = 0;
//     }
//     // plusMinusOnClick(plusMinus, plusMinus2);
//   }
// }
//
// ifResultIsZeroOnPlusMinusClick(plusMinus);

function resetResult(var1, var2, var3, var4){
  preview = [];
  var1 = preview;
  var2 = var1;
  var3 = var2;
  var4 = var3;
  preview = var4;
}

function percentageOnClick(bt1, bt2){
  bt1.style.display = "none";
  bt2.style.display = "block";
}


function resultPercentage(bt1, bt2, var1, var2, var3, var4){

  bt1.onclick = function (){
    if(result.innerHTML == 0){
      preview.push(0);
      var1 = preview.join('');
      var2 = parseInt(var1, 10);
      result.innerHTML = var2;
      percentageOnClick(percentage2, percentage);
    }

    var1 = preview.join('');
    var2 = parseInt(var1, 10);
    var3 = var2 * 0.01;
    var4 = Math.floor(var3 * 100) / 100;
    result.innerHTML = var4;
    percentageOnClick(percentage, percentage2);

    if(result.innerHTML == var4){
      bt1.onclick = function(){
        var4 = var4 * 0.01;
        result.innerHTML = var4;
        percentageOnClick(percentage, percentage2);
        // allButtonsNResetHandler(allButtonsN, allButtonsN2);
        // resetResult(a, b, c, d);
      }

      bt2.onclick = function(){
        var4 = var4 * 0.01;
        result.innerHTML = var4;
        percentageOnClick(percentage2, percentage);
        // allButtonsNResetHandler(allButtonsN2, allButtonsN);
        // resetResult(a, b, c, d);
      }
    }
  } 
}
resultPercentage(percentage, percentage2, a, b, c, d);