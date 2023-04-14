function progRandom() {
    let notes = ['C', 'C#', 'D', 'Eb', 'E', 'F', 'F#', 'G', 'G#', 'A', 'Bb', 'B'];
    let types = ['', 'm', 'sus2', 'sus4', 'sus6', 'sus9', '6', '7', 'Maj7', 'm7', 'dim', 'aug', 'add6', 'add9', 'add11', '6', '9', '11', '13'];
    let escalas = ['Major', 'Minor', 'Pentatonic', 'Pentatonic Minor', 'Blues'];

    let texto_respuesta = document.getElementById('texto-respuesta');
    let miSelect_nC = document.getElementById('miSelect');
    let miSelect2_T = document.getElementById('miSelect2');
    let miSelect3_M = document.getElementById('miSelect3')

    let selectC = miSelect_nC.value;
    let selectT = miSelect2_T.value;
    let selectM = miSelect3_M.value
    //nchords - genere - modo

    let randomT;
    switch (selectT) {
        case 0:
            randomT = Math.floor(Math.random() * notes.length);

            break;
        case 1:
            randomT = 0;
            break;
        case 2:
            randomT = 1;
            break;
        case 3:
            randomT = 2;
            break;
        case 4:
            randomT = 3;
            break;
        case 5:
            randomT = 4;
            break;
        case 6:
            randomT = 5;
            break;
        case 7:
            randomT = 6;
            break;
        case 8:
            randomT = 7;
            break;
        case 9:
            randomT = 8;
            break;
        case 10:
            randomT = 9;
            break;
        case 11:
            randomT = 10;
            break;
        case 12:
            randomT = 11;
            break;
        default:
            break;
    }
    let randomM;
    switch (selectM) {
        case 0:
            randomM = Math.floor(Math.random() * notes.length);
            break;
        case 1:
            randomM = 0;
            break;
        case 2:
            randomM = 1;
            break;
        case 3:
            randomM = 2;
        case 4:
            randomM = 3;
            break;
        case 5:
            randomM = 4;
            break;
        case 6:
            randomM = 5;
            break;
        default:
            break;
    }

    let tandomC;
    let escojeTone;
    let escojeChord;
    let escojeMode;
    ///Tengo que hacer que la maquina entienda que scala se tomó y que modo es el que esta para escojer un un acorde o progrecion que este dentro del rango, puedo hacerlo creando una lista de intervalos 
    if (selectC == 0) {
        //por si el selector es 0, para escojer la cantidad de acordes que eseran aleatoreamente 
        tandomC = Math.floor(Math.random() * 10) + 1;
    }
    else if (selectC == 1) {
        for(let i = 0; i < selectC; i++) {
            escojeTone = Math.floor(Math.random () * notes.length);
            escojeMode = Math.floor(Math.random() * escalas.length) ;
        }
        texto_respuesta.innerHTML = `Tu Acorde Es: ${notes[escojeChord]}`;
    }
    

    
}