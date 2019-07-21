// change the color of the button when mousedown/up

let button = document.getElementsByClassName('button');
changeBackgroundOnMouseEvents(button, "#a3a3a3", "#808080");

let buttonLg = document.getElementsByClassName('button-lg');
changeBackgroundOnMouseEvents(buttonLg, "#a3a3a3", "#808080");

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

// show the numbers typed or result

let result = document.getElementById('result');

let preview = [];
let preview2 = [];


let buttonAc = document.getElementById('ac');
let plusMinus = document.getElementById('plus-minus');
let plusMinus2 = document.getElementById('plus-minus2');

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
// let allButtonsN = [buttonN0, buttonN1, buttonN2, buttonN3, buttonN4, buttonN5, buttonN6, buttonN7, buttonN8, buttonN9];

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
// let allButtonsN2 = [buttonN02, buttonN12, buttonN22, buttonN32, buttonN42, buttonN52, buttonN62, buttonN72, buttonN82, buttonN92];


// button AC erasing result and changing outlook to C when other buttons are clicked
// number 0 disapear when there is only zero and when a key is clicked

buttonAc.onclick = function () {
  buttonAc.innerHTML = "AC";
  preview = [];
  result.innerHTML = 0;
}

// concatenation of the buttons numbers without any commas

buttonN0.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN0 = 0;
  preview.push(buttonN0);
  const a = preview.join('');
  result.innerHTML = a;
}

buttonN1.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN1 = 1;
  preview.push(buttonN1);
  const a = preview.join('');
  result.innerHTML = a;
}

buttonN2.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN2 = 2;
  preview.push(buttonN2);
  const a = preview.join('');
  result.innerHTML = a;
}

buttonN3.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN3 = 3;
  preview.push(buttonN3);
  const a = preview.join('');
  result.innerHTML = a;
}

buttonN4.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN4 = 4;
  preview.push(buttonN4);
  const a = preview.join('');
  result.innerHTML = a;
}

buttonN5.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN5 = 5;
  preview.push(buttonN5);
  const a = preview.join('');
  result.innerHTML = a;
}

buttonN6.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN6 = 6;
  preview.push(buttonN6);
  const a = preview.join('');
  result.innerHTML = a;
}

buttonN7.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN7 = 7;
  preview.push(buttonN7);
  const a = preview.join('');
  result.innerHTML = a;
}

buttonN8.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN8 = 8;
  preview.push(buttonN8);
  const a = preview.join('');
  result.innerHTML = a;
}

buttonN9.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN9 = 9;
  preview.push(buttonN9);
  const a = preview.join('');
  result.innerHTML = a;
}

// positive to negative value and vice versa with the plus, minus key

plusMinus.onclick = function(){

  let a = preview.join('');
  let b = parseInt(a, 10);
  let c = b * -1;

  result.innerHTML = c;
  plusMinus.style.display = "none";
  plusMinus2.style.display = "block";
  
  buttonN9.style.display = "none";
  buttonN92.style.display = "block";
}

plusMinus2.onclick = function(){

  let a = preview.join('');
  let b = parseInt(a, 10);
  let c = b * -1;

  result.innerHTML = b;
  plusMinus2.style.display = "none";
  plusMinus.style.display = "block";
}

buttonN92.onclick = function(){
  result.innerHTML = 0;
  preview = [];
  buttonN92.style.display = "none";
  buttonN9.style.display = "block";
}
