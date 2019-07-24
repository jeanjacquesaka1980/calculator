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


let buttonAc = document.getElementById('ac');
let plusMinus = document.getElementById('plus-minus');
let plusMinus2 = document.getElementById('plus-minus2');
let percentage = document.getElementById('percentage');

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

// button AC erasing result and changing outlook to C when other buttons are clicked
// number 0 disapear when there is only zero and when a key is clicked
function buttonResetHandler(bt1, bt2, bt3, bt4, bt5, var1, var2, var3, var4){
  bt1.onclick = function (){
    bt1.innerHTML = "AC";
    preview = [];
    var1 = preview;
    var2 = var1;
    var3 = var2;
    var4 = var3;
    result.innerHTML = 0;
    // console.log(var1);
    // console.log(var2);
    // console.log(var3);
    // console.log(var4);
    // console.log(preview);

    bt2.style.display = "none";
    bt3.style.display = "block";
    for(i = 0; i < bt4.length; i++){
      bt4[i].style.display = "none";
      bt5[i].style.display = "block";
    }
  }
}

buttonResetHandler(buttonAc, plusMinus2, plusMinus, allButtonsN2, allButtonsN, a, b, c, d);

// if the button plus minus have been triggered then this function, by clicking on numbers will erase the screen
function allButtonsNResetHandler(bt1, bt2, bt3, bt4, bt5, var1, var2, var3, var4){
    for(i = 0; i < bt1.length; i++){
      bt1[i].style.display = 'none';
      bt2[i].style.display = 'block';
    }
    for(i = 0; i < bt2.length; i++){

      bt2[i].onclick = function(){
        bt3.innerHTML = "AC";
        bt4.style.display = "none";
        bt5.style.display = "block";

        preview = [];
        var1 = preview;
        var2 = var1;
        var3 = var2;
        var4 = var3;
        result.innerHTML = 0;

        for(i = 0; i < bt1.length; i++){
          bt2[i].style.display = 'none';
          bt1[i].style.display = 'block';
        }
      }
    }
}

// if the button plus minus is triggered, this function will show the result. it toggling a positive negative value
function resultPlusMinus(bt1, bt2, var1, var2, var3, var4){
  bt1.onclick = function(){
    // on click, it makes the calculation
    var1 = preview.join('');
    var2 = parseInt(var1, 10);
    var3 = var2 * -1;
    var4 = var3;
    // showing the result
    result.innerHTML = var3;

    bt1.style.display = "none";
    bt2.style.display = "block";

    if(result.innerHTML == var3){
      var4 = var3 * -1;
    }

    bt2.onclick = function(){
      result.innerHTML = var4;
      bt2.style.display = "none";
      bt1.style.display = "block";
    }
    allButtonsNResetHandler(allButtonsN, allButtonsN2, buttonAc, plusMinus2, plusMinus, a, b, c, d);
    //cleaning everything
    // preview = [];
    // a = preview;
    // b = a;
    // c = b;
    // d = c;
    // showing the second button plus minus
  }
}

resultPlusMinus(plusMinus, plusMinus2, a, b, c, d);
