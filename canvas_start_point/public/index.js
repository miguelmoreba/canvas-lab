const app = function(){
  const canvas = document.querySelector('#main-canvas');
  const context = canvas.getContext('2d');


  // const drawLine()

  let mouseClicked = false;
  const mouseReleased = true;

  canvas.addEventListener('click', onMouseClick, false);
  canvas.addEventListener('click', onMouseMove, false);

  function onMouseClick(event){
    mouseClicked = !mouseClicked;
  }

  function onMouseMove(event){
    if (mouseClicked){
      context.beginPath();
      context.arc(event.x, event.y, 7.5, 0, Math.PI * 2, false);
      context.stroke();
    }
  }

}



document.addEventListener('DOMContentLoaded', app);
