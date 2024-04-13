console.log("Ola mundo!")

function moverElementonao() {
  var elemento = document.getElementById('nao');

  var transformValue = window.getComputedStyle(elemento).getPropertyValue('transform');
  var matrix = new WebKitCSSMatrix(transformValue);
  var newX = matrix.m41 + 100; // Move 100 pixels para a direita (altere conforme necessário)
  elemento.style.transform = 'translateX(' + newX + 'px)';
  


}


function botaosim() {
  var body = document.getElementById('body')
  var imagem = document.getElementById('imagem09');
  var nao = document.getElementById('nao')
  var texto = document.getElementById('texto555')
  var imggay = document.getElementById('imagegay')


  body.style.backgroundColor = 'pink';
  imagem.style.display = 'block';
  nao.style.display = 'none';
  texto.style.color = 'red';
  imggay.style.display = 'none';


}


setInterval(changeBackground, 1000); 

