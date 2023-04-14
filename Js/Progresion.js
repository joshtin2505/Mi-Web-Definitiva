const c = ['C', 'Cm', 'Csus2', 'Csus4', 'Csus6', 'Csus9', 'C6', 'C7', 'CMaj7', 'Cm7', 'Cdim', 'Caug', 'Cadd6', 'Cadd9', 'Cadd11', 'C6', 'C9', 'C11', 'C13']
const cSharp = ['C#', 'C#m', 'C#sus2', 'C#sus4', 'C#sus6', 'C#sus9', 'C#6', 'C#7', 'C#Maj7', 'C#m7', 'C#dim', 'C#aug', 'C#add6', 'C#add9', 'C#add11', 'C#6', 'C#9', 'C#11', 'C#13']
const d = ['D', 'Dm', 'Dsus2', 'Dsus4', 'Dsus6', 'Dsus9', 'D6', 'D7', 'DMaj7', 'Dm7', 'Ddim', 'Daug', 'Dadd6', 'Dadd9', 'Dadd11', 'D6', 'D9', 'D11', 'D13'];
const eb = ['Eb', 'Ebm', 'Ebsus2', 'Ebsus4', 'Ebsus6', 'Ebsus9', 'Eb6', 'Eb7', 'EbMaj7', 'Ebm7', 'Ebdim', 'Ebaug', 'Ebadd6', 'Ebadd9', 'Ebadd11', 'Eb6', 'Eb9', 'Eb11', 'E13'];
const e = ['E', 'Em', 'Esus2', 'Esus4', 'Esus6', 'Esus9', 'E6', 'E7', 'EMaj7', 'Em7', 'Edim', 'Eaug', 'Eadd6', 'Eadd9', 'Eadd11', 'E6', 'E9', 'E11', 'E13'];
const f = ['F', 'Fm', 'Fsus2', 'Fsus4', 'Fsus6', 'Fsus9', 'F6', 'F7', 'FMaj7', 'Fm7', 'Fdim', 'Faug', 'Fadd6', 'Fadd9', 'Fadd11', 'F6', 'F9', 'F11', 'F13'];
const fSharp = ['F#', 'F#m', 'F#sus2', 'F#sus4', 'F#sus6', 'F#sus9', 'F#6', 'F#7', 'F#Maj7', 'F#m7', 'F#dim', 'F#aug', 'F#add6', 'F#add9', 'F#add11', 'F#6', 'F#9', 'F#11', 'F#13'];
const g = ['G', 'Gm', 'Gsus2', 'Gsus4', 'Gsus6', 'Gsus9', 'G6', 'G7', 'GMaj7', 'Gm7', 'Gdim', 'Gaug', 'Gadd6', 'Gadd9', 'Gadd11', 'G6', 'G9', 'G11', 'G13'];
const gSharp = ['G#', 'G#m', 'G#sus2', 'G#sus4', 'G#sus6', 'G#sus9', 'G#6', 'G#7', 'G#Maj7', 'G#m7', 'G#dim', 'G#aug', 'G#add6', 'G#add9', 'G#add11', 'G#6', 'G#9', 'G#11', 'G#13'];
const a = ['A', 'Am', 'Asus2', 'Asus4', 'Asus6', 'Asus9', 'A6', 'A7', 'AMaj7', 'Am7', 'Adim', 'Aaug', 'Aadd6', 'Aadd9', 'Aadd11', 'A6', 'A9', 'A11', 'A13'];
const bb = ['Bb', 'Bbm', 'Bbsus2', 'Bbsus4', 'Bbsus6', 'Bbsus9', 'Bb6', 'Bb7', 'BbMaj7', 'Bbm7', 'Bbdim', 'Bbaug', 'Bbadd6', 'Bbadd9', 'Bbadd11', 'Bb6', 'Bb9', 'Bb11', 'Bb13'];
const b = ['B', 'Bm', 'Bsus2', 'Bsus4', 'Bsus6', 'Bsus9', 'B6', 'B7', 'BMaj7', 'Bm7', 'Bdim', 'Baug', 'Badd6', 'Badd9', 'Badd11', 'B6', 'B9', 'B11', 'B13'];
function escalaMayor(nacordes,tono){
    const structreC = [c,d,e,f,g,a,b];
    const structreCsh = [cSharp,eb,f,fSharp,gSharp,bb,b];
    const structreD = [d,e,fSharp,g,a,b,cSharp];
    const structreEb = [e,fSharp,gSharp,a,b,cSharp,eb];
    const structreF = [f,g,a,bb,c,d,e];
    const structureFsh = [fSharp,gSharp,bb,b,cSharp,eb,f];
    const structreG = [g,a,b,c,d,e,fSharp];
    const structreGsh = [gSharp,bb,c,cSharp,eb,f,g];
    const structreA = [a,b,cSharp,d,e,fSharp,gSharp];
    const structreBb = [bb,c,d,eb,f,g,a];
    const structreB = [b,cSharp,eb,e,fSharp,gSharp,bb];
    let concat = "";
    var prog = "";
    let note = 0;
    let chord = 0;

    if(tono == 1){
        for(let i = 0 ; i < nacordes; i++){
            note = Math.floor(Math.random() * structreA.length)
            chord = Math.floor(Math.random() * c.length)
            prog = structreC[note][chord];
            concat = concat + ' | '+ prog;
        }
        return concat;
        console.log(concat)
    }
    else if (tono == 2){
        for(let i = 0 ; i < nacordes; i++){
            note = Math.floor(Math.random() * structreA.length)
            chord = Math.floor(Math.random() * c.length)
            prog = structreCsh[note][chord];
            concat = concat + ' | '+ prog;
        }
        return concat;
        
    }
}
function progRandom() {
        
    let texto_respuesta = document.getElementById('texto-respuesta');
    let miSelect_nC = document.getElementById('miSelect');
    let miSelect2_T = document.getElementById('miSelect2');
    let miSelect3_M = document.getElementById('miSelect3');

    let selectC = Number(miSelect_nC.value);
    let selectT = Number(miSelect2_T.value);
    let selectM = Number(miSelect3_M.value);

    //En casos de que el usuario nos escoja nada
    let nAcordesEscojidos
    if(selectC == 0){
        nAcordesEscojidos = Math.floor(Math.random() * 10);
    }
    else if (selectC == 1){
        nAcordesEscojidos = 1;
    }
    else if (selectC == 2){
        nAcordesEscojidos = 2;
    }
    else if (selectC == 3){
        nAcordesEscojidos = 3;
    }
    else if (selectC == 4){
        nAcordesEscojidos = 4;
    }
    else if (selectC == 5){
        nAcordesEscojidos = 5;
    }
    else if (selectC == 6){
        nAcordesEscojidos = 6;
    }
    else if (selectC == 7){
        nAcordesEscojidos = 7;
    }
    else if (selectC == 8){
        nAcordesEscojidos = 8;
    }
    else if (selectC == 9){
        nAcordesEscojidos = 9;
    }
    else if (selectC == 10){
        nAcordesEscojidos = 10;
    }

    
    let tonoEscojido;
    if (selectT > -1){
        if(selectT == 0){
            tonoEscojido = Math.floor(Math.random() * 10);
        }
        else if (selectT == 1){
            tonoEscojido = 1;
        }
        else if (selectT == 2){
            tonoEscojido = 2;
        }
        else if (selectT == 3){
            tonoEscojido = 3;
        }
        else if (selectT == 4){
            tonoEscojido = 4;
        }
        else if (selectT == 5){
            tonoEscojido = 5;
        }
        else if (selectT == 6){
            tonoEscojido = 6;
        }
        else if (selectT == 7){
            tonoEscojido = 7;
        }
        else if (selectT == 8){
            tonoEscojido = 8;
        }
        else if (selectT == 9){
            tonoEscojido = 9;
        }
        else if (selectT == 10){
            tonoEscojido = 10;
        }
        else if (selectT == 11){
            tonoEscojido = 11;
        }
        else if (selectT == 0){
            tonoEscojido = 0;
        }}

    let modoEscojido;
    switch (selectM) {
        case 0:
            modoEscojido = Math.floor(Math.random() * 6);
            break;
        case 1:
            modoEscojido = 0;
            break;
        case 2:
            modoEscojido = 1;
            break;
        case 3:
            modoEscojido = 2;
            break;
        case 4:
            modoEscojido = 3;
            break;
        case 5:
            modoEscojido = 4;
            break;
        case 6:
            modoEscojido = 5;
            break;
        default:
            break;
    }
    console.log("m"+modoEscojido)
    console.log("t"+tonoEscojido)
    console.log("n"+nAcordesEscojidos)
    
//Primero se toma el tono escojido luego se itera sobre los acordes escojidos en el modo escojido
    if(modoEscojido == 0) {
        let retunet = escalaMayor(nAcordesEscojidos,tonoEscojido);
        let nreturnet = retunet.slice(2);
        texto_respuesta.innerHTML = nreturnet.trim(); 

    }
   
}