function tocaSom(idElementoAudio) {

    document.querySelector(idElementoAudio).play();  
}

// document.querySelector('.tecla_pom').onclick = tocaSomPom;

 const listaDeTeclas = document.querySelectorAll('.tecla');

// listaDeTeclas[0].onclick = tocaSomPom;

// function tocaSomClap() {
//     document.querySelector('#som_tecla_clap').play();
// }


let contador = 0;
// enquanto
while (contador < listaDeTeclas.length) {

    const tecla = listaDeTeclas[contador];

    const instrumento = tecla.classList[1];

    // template string
    const idAudio = `#som_${instrumento}`;

    console.log('idAudio');

    tecla.onclick = function() {
        tocaSom(idAudio);
    }
    contador = contador + 1;

    console.log(contador);
}