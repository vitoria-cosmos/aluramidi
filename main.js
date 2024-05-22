
function tocaSom(seletorAudio) {
    const elemento = document.querySelector(seletorAudio);

    if (elemento == null) {
        // alert('Elemento não encontrado');
        console.log('Elemento não encontrado');

    }
    if (elemento != null) {
        if (elemento.localName === 'audio') {
            elemento.play();
        }
    }
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

    tecla.onkeydown = function(evento) {
        // console.log(evento.code === 'Space');
        if (evento.code == 'Space' || evento.code == 'Enter') {
            tecla.classList.add('ativa'); 
        }
        
    }

    tecla.onkeyup = function() {
        tecla.classList.remove('ativa');
    }

    // console.log(contador);
} 