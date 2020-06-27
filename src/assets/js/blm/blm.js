function blm() {
  let b = [3.3,100, 50,1];
  let i = 0;

  let h = window.innerHeight;
  let w = window.innerWidth;
  let area = h*w;

  function resize() {
    h = window.innerHeight;
    w = window.innerWidth;
    area = h*w;
  }

  function update() {
    let p = b[i]/100;
    let r = Math.sqrt(p*area/Math.PI); // radius of blob
    let black = document.querySelector('#black');

    black.style.height = 2*r + 'px';
    black.style.width = 2*r + 'px';
    black.style.top = 0.5*h - r + 'px';
    black.style.left = 0.5*w - r + 'px';

    i == b.length-1 ? i=0 : i++;
  } update();

  document.addEventListener('click', update);
} blm();
