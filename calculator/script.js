// change the color of the button when mousedown/up

let button = document.getElementsByClassName('button');
  for(i = 0; i < button.length; i++){
    button[i].onmousedown = function() {
      this.style.backgroundColor = "#a3a3a3";
    };

    button[i].onmouseup = function() {
      this.style.backgroundColor = "#808080";
    };
}

let buttonLg = document.getElementsByClassName('button-lg');
  for(i = 0; i < buttonLg.length; i++){
    buttonLg[i].onmousedown = function() {
      this.style.backgroundColor = "#a3a3a3";
    };

    buttonLg[i].onmouseup = function() {
      this.style.backgroundColor = "#808080";
    };
}

let button2 = document.getElementsByClassName('button2');
  for(i = 0; i < button2.length; i++){
    button2[i].onmousedown = function() {
      this.style.backgroundColor = "#ffe299";
    };

    button2[i].onmouseup = function() {
      this.style.backgroundColor = "#ffca47";
    };
}

// show the numbers typed or result

let result = document.getElementById('result');

let preview = [];
let plusMinusResult = [];


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

// button AC erasing result and changing outlook to C when other buttons are clicked
// number 0 disapear when there is only zero and when a key is clicked

buttonAc.onclick = function () {
  buttonAc.innerHTML = "AC";
  preview = [];
  plusMinusResult = [];
  document.getElementById('result').innerHTML = 0;
}

// concatenation of the buttons numbers without any commas

buttonN0.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN0 = 0;
  preview.push(buttonN0);
  const a = preview.join('')
  document.getElementById('result').innerHTML = a;
}

buttonN1.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN1 = 1;
  preview.push(buttonN1);
  const a = preview.join('')
  document.getElementById('result').innerHTML = a;
}

buttonN2.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN2 = 2;
  preview.push(buttonN2);
  const a = preview.join('')
  document.getElementById('result').innerHTML = a;
}

buttonN3.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN3 = 3;
  preview.push(buttonN3);
  const a = preview.join('')
  document.getElementById('result').innerHTML = a;
}

buttonN4.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN4 = 4;
  preview.push(buttonN4);
  const a = preview.join('')
  document.getElementById('result').innerHTML = a;
}

buttonN5.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN5 = 5;
  preview.push(buttonN5);
  const a = preview.join('')
  document.getElementById('result').innerHTML = a;
}

buttonN6.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN6 = 6;
  preview.push(buttonN6);
  const a = preview.join('')
  document.getElementById('result').innerHTML = a;
}

buttonN7.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN7 = 7;
  preview.push(buttonN7);
  const a = preview.join('')
  document.getElementById('result').innerHTML = a;
}

buttonN8.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN8 = 8;
  preview.push(buttonN8);
  const a = preview.join('')
  document.getElementById('result').innerHTML = a;
}

buttonN9.onclick = function () {
  document.getElementById('ac').innerHTML = "C";
  buttonN9 = 9;
  preview.push(buttonN9);
  const a = preview.join('')
  document.getElementById('result').innerHTML = a;
}

// positive to negative value and vice versa with the plus, minus key

plusMinus.onclick = function(){

  let a = preview.join('');
  let b = parseInt(a, 10);
  let c = b * -1;
  // let d = c * -1;

  result.innerHTML = c;
  document.getElementById('plus-minus').style.display = "none";
  document.getElementById('plus-minus2').style.display = "block";


  plusMinus2.onclick = function(){

    result.innerHTML = b;
    document.getElementById('plus-minus2').style.display = "none";
    document.getElementById('plus-minus').style.display = "block";
  }
}
