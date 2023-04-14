function tonoRandom(){
    let toneList = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];
    let escalas = ['Major','Minor','Pentatonic', 'Pentatonic Minor','Blues']
    let texto_respuesta = document.getElementById('texto-respuesta');

    let randomerTone = Math.floor(Math.random() * toneList.length) ;
    let randomerEscale = Math.floor(Math.random() * escalas.length) ;

    texto_respuesta.innerHTML = `${toneList[randomerTone]} ${escalas[randomerEscale]}`;
}