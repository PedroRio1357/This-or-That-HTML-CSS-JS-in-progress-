// function clicar(){

let img = document.querySelector('img');

let btn1 = document.querySelector('#btn1');
let btn2 = document.querySelector('#btn2');

document.addEventListener('DOMContentLoaded', load);

function clicar() {
//   document.body.innerHTML += '<div>welcome</div>';
//   btn1 = document.getElementById('btn1');
  img2.src = "images/gato3.jpg" ;
//   img2.src = "images/gato4.jpg" ;
  btn1.onclick = clicked;
  btn1.onclick = clicked2;
  btn1.onclick = clicked3;

  img.src = "images/gato4.jpg" ;
//   img.src = "images/gato6.jpg" ;
  btn2.onclick = clicked;
  btn2.onclick = clicked2;
  btn2.onclick = clicked3;

}

function clicked() {
//document.body.insertAdjacentHTML('beforeend', '<div>welcome</div>');
  img2.src = "images/gato5.jpg" ;
  img.src = "images/gato6.jpg" ;

}

function clicked2(){
    img2.src = "images/gato7.jpg" ;
    img.src = "images/gato8.jpg" ;
}

function clicked3(){
    document.body.insertAdjacentHTML('beforeend', 'acabou :(')
    img2.src = "images/gato9.jpg" ;
    img.src = "images/gato10.jpg" ;
}

// function clicked4(){
//     document.body.insertAdjacentHTML('beforeend', 'acabou as imagens :(')
//     img2.src = "images/gato11.jpg" ;
//     img.src = "images/gato12.jpg" ;
// }

// function clicked4(){
//     img2.src = "images/gato11.jpg" ;
//     img.src = "images/gato12.jpg" ;
// }

// function acabou(){
//     img2.src = "images/gato11.jpg" ;
//     img.src = "images/gato12.jpg" ;
// }