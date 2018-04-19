const app = function(){
  const canvas = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');


  // const drawLine()

  let mouseClicked = false;
  const mouseReleased = true;

  canvas.addEventListener('click', onMouseClick, false);
  canvas.addEventListener('mousemove', onMouseMove, false);

  function onMouseClick(event){
    mouseClicked = !mouseClicked;
  }

  function onMouseMove(event){
    if (mouseClicked){
      context.beginPath();
      context.arc(event.x, event.y, context.r, 0, Math.PI * 2, false);
      context.fill();
    }
  }

  const square = function(event){
    context.beginPath();
    context.fillRect(event.x, event.y, 150, 150);
    context.fill();

  }

  const changeColour = function(){
      context.fillStyle = this.value;
    }

  const changeSize = function(){
    context.r = this.value;
  }

    const colourPicker = document.querySelector('#input-colour');
    colourPicker.addEventListener('change', changeColour);

    const sizePicker = document.querySelector('#select-size');
    sizePicker.addEventListener('change', changeSize);

    const createSquare = document.querySelector('#create-square');
    createSquare.addEventListener('click', square);

}


document.addEventListener('DOMContentLoaded', app);
