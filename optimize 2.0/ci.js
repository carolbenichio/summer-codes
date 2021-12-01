let open = true;

function hide() { 
  const div = document.querySelector('#container_pop-up');
  const seta = document.querySelector('.container_close-button').style;
  if (open) {
    div.style.cssText = 'right:-180px';
    seta.cssText = '-moz-transform: scaleX(-1);-o-transform: scaleX(-1);-webkit-transform: scaleX(-1);transform: scaleX(-1)';
    open = false;
  } else {
    div.style.cssText = 'right:0px';
    open = true;
    seta.cssText = '-moz-transform: scaleX(1);-o-transform: scaleX(1);-webkit-transform: scaleX(1);transform: scaleX(1)';
  }
}
