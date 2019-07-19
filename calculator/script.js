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
