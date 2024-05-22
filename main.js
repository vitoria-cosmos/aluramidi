
function tocaSom(idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}

const listaDeTeclas = document.querySelectorAll('.tecla');

// let contador = 0;
// enquanto
// while (contador < listaDeTeclas.length) {

//     const tecla = listaDeTeclas[contador];

//     const instrumento = tecla.classList[1];

//     const idAudio = `#som_${instrumento}`;

//     // console.log(idAudio);
//     tecla.onclick = function() {
//         tocaSom(idAudio);
//     }

//     contador = contador + 1;

//     // console.log(contador);
// } 

for (let contador = 0; contador < listaDeTeclas.length; contador ++) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    const idAudio = `#som_${instrumento}`; //template string

    // console.log(idAudio);
    tecla.onclick = function() {
        tocaSom(idAudio);
    }

    tecla.onkeydown = function() {
        tecla.classList.add('ativa');
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

    // console.log(contador);
} 