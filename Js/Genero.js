function genRandom(){
    let generosMusicales = [
        'Reggaetón','Trap','Hip hop','Dembow','Bachata urbana','Drill','pop','Moombahton','EDM','Champeta','Country','Worship/Gospel', 'Salsa','samba', 'Afro','SynthWave','Funk'
      ];
    let texto_respuesta = document.getElementById('texto-respuesta');

    let randomer = Math.floor(Math.random() * generosMusicales.length) ;

    texto_respuesta.innerHTML = `Tu Genero Es: ${generosMusicales[randomer]}`;
}