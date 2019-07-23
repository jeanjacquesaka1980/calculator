// change the color of the button when mousedown/up
// for all standard buttons
let button = document.getElementsByClassName('button');
  for(i = 0; i < button.length; i++){
    button[i].onmousedown = function() {
      this.style.backgroundColor = "#a3a3a3";
    };

    button[i].onmouseup = function() {
      this.style.backgroundColor = "#808080";
    };
}

// for the large ones so 0
let buttonLg = document.getElementsByClassName('button-lg');
  for(i = 0; i < buttonLg.length; i++){
    buttonLg[i].onmousedown = function() {
      this.style.backgroundColor = "#a3a3a3";
    };

    buttonLg[i].onmouseup = function() {
      this.style.backgroundColor = "#808080";
    };
}


// for the yellow ones
let button2 = document.getElementsByClassName('button2');
  for(i = 0; i < button2.length; i++){
    button2[i].onmousedown = function() {
      this.style.backgroundColor = "#ffe299";
    };

    button2[i].onmouseup = function() {
      this.style.backgroundColor = "#ffca47";
    };
}

// check if a button have been clicked



// show the numbers typed or result

let result = document.getElementById('result');

let preview = [];


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

// button AC erasing result and changing outlook to C when other buttons are clicked
// number 0 disapear when there is only zero and when a key is clicked

function buttonResetHandler(button){
  button.onclick = function (){
    button.innerHTML = "AC";
    preview = [];
    result.innerHTML = 0;
  }
}

buttonResetHandler(buttonAc);

// concatenation of the buttons numbers without any commas

function buttonNumberHandler(button, value){
  button.onclick = function(){
    buttonAc.innerHTML = "C";
    button = value;
    preview.push(button);
    const a = preview.join('');
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


// positive to negative value and vice versa with the plus, minus key

// function that reset the result to 0 and cancel the behavior of the plus minus handler
function buttonNumberResetPlusMinus(bt1, bt2, el1, el2){
  for(i = 0; i < bt1.length; i++){
    bt1[i].onclick = function(){
      preview = [];
      el1 = preview;
      el2 = el1;
      result.innerHTML = 0;
      plusMinus2.style.display = "none";
      plusMinus.style.display = "block";

      for(i = 0; i < allButtonsN.length; i++){
        bt1[i].style.display = "none";
        bt2[i].style.display = "block";
      }
    }
  }
}

function buttonPlusMinusHandler(button1, button2, button3, button4){
  button1.onclick = function(){

    let a = preview.join('');
    let b = parseInt(a, 10);
    let c = b * -1;

    result.innerHTML = c;
    button1.style.display = "none";
    button2.style.display = "block";
    for(i = 0; i < button3.length; i++){
      button3[i].style.display = "none";
    }

    for(i = 0; i < button4.length; i++){
      button4[i].style.display = "block";
    }

    if(result.innerHTML == c){
      button2.onclick = function(){
        result.innerHTML = c * -1;
        button2.style.display = "none";
        button1.style.display = "block";
        }
      }
      buttonNumberResetPlusMinus(allButtonsN2, allButtonsN, b, c);
    }
  }

buttonPlusMinusHandler(plusMinus, plusMinus2, allButtonsN, allButtonsN2);

function percentageOfNumber(button1, button2, button3){
  button1.onclick = function(){
    let a = preview.join('');
    let b = parseInt(a, 10);
    let c = b / 100;

    result.innerHTML = c;
    preview = [];

    button2.onclick = function(){

      let d = c * -1;
      result.innerHTML = d;
      button2.style.display = "none";
      button3.style.display = "block";
      preview = [];

      for(i = 0; i < allButtonsN.length || i < allButtonsN2.length; i++){
        allButtonsN[i].style.display = "none";
        allButtonsN2[i].style.display = "block";

        allButtonsN2[i].onmousedown = function(){
          result.innerHTML = 0;
          // it's here that the problem is occuring. If you put in comments that two lines below and just
          // drop a console.log("hello !") it will be no problem. From the step before, those same lines
          // are beahving perfectly but the message is talking about the display ... 
          allButtonsN2[i].style.display = "none";
          allButtonsN[i].style.display = "block";

          plusMinus2.style.display = "none";
          plusMinus.style.display = "block";
          preview = [];
          a = preview;
          b = a;
          c = b;
          d = c;
        }
      }

      button3.onclick = function(){
        result.innerHTML = d * -1;
        button3.style.display = "none";
        button2.style.display = "block";
        preview = [];
      }
    }
  }
}

percentageOfNumber(percentage, plusMinus, plusMinus2);
