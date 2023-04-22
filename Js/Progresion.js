const c = ['C', 'Csus2', 'Csus4', 'Csus6', 'Csus9', 'C7', 'CMaj7', 'Cadd6', 'Cadd9', 'Cadd11', 'C6', 'C9', 'C11', 'C13'];
const cM = ['Cm', 'Cm-sus2', 'Cm-sus4', 'Cm-sus6', 'Cm-sus9', 'Cm7', 'Cm-add6', 'Cm-add9', 'Cm-add11', 'Cm6', 'Cm9', 'Cm11', 'Cm13',"Cm13"];
const cDA = ['Cdim', 'Caug'];

const cSharp = ['C#', 'C#sus2', 'C#sus4', 'C#sus6', 'C#sus9', 'C#7', 'C#Maj7', 'C#add6', 'C#add9', 'C#add11', 'C#6', 'C#9', 'C#11', 'C#13'];
const cSharpM = ['C#m', 'C#m-sus2', 'C#m-sus4', 'C#m-sus6', 'C#m-sus9','C#m7', 'C#m-add6', 'C#m-add9', 'C#m-add11', 'C#m6', 'C#m9', 'C#m11', 'C#m13',"C#m13"];
const cSharpDA = ['C#dim', 'C#aug'];

const d = ['D', 'Dsus2', 'Dsus4', 'Dsus6', 'Dsus9', 'D7', 'DMaj7', 'Dadd6', 'Dadd9', 'Dadd11', 'D6', 'D9', 'D11', 'D13'];
const dM = ['Dm', 'Dm-sus2', 'Dm-sus4', 'Dm-sus6', 'Dm-sus9', 'Dm7', 'Dm-add6', 'Dm-add9', 'Dm-add11', 'Dm6', 'Dm9', 'Dm11', 'Dm13',"Dm13"];
const dDA = ['Ddim', 'Daug'];

const eb = ['Eb', 'Ebsus2', 'Ebsus4', 'Ebsus6', 'Ebsus9', 'Eb7', 'EbMaj7', 'Ebadd6', 'Ebadd9', 'Ebadd11', 'Eb6', 'Eb9', 'Eb11', 'Eb13'];
const ebM = ['Ebm', 'Ebm-sus2', 'Ebm-sus4', 'Ebm-sus6', 'Ebm-sus9', 'Ebm7', 'Ebm-add6', 'Ebm-add9', 'Ebm-add11', 'Ebm6', 'Ebm9', 'Ebm11', 'Ebm13',"Ebm13"];
const ebDA = ['Ebdim', 'Ebaug'];

const e = ['E', 'Esus2', 'Esus4', 'Esus6', 'Esus9', 'E7', 'EMaj7', 'Eadd6', 'Eadd9', 'Eadd11', 'E6', 'E9', 'E11', 'E13'];
const eM = ['Em', 'Em-sus2', 'Em-sus4', 'Em-sus6', 'Em-sus9', 'Em7', 'Em-add6', 'Em-add9', 'Em-add11', 'Em6', 'Em9', 'Em11', 'Em13',"Em"];
const eDA = ['Edim', 'Eaug'];

const f = ['F', 'Fsus2', 'Fsus4', 'Fsus6', 'Fsus9', 'F7', 'FMaj7', 'Fadd6', 'Fadd9', 'Fadd11', 'F6', 'F9', 'F11', 'F13'];
const fM = ['Fm', 'Fm-sus2', 'Fm-sus4', 'Fm-sus6', 'Fm-sus9', 'Fm7', 'Fm-add6', 'Fm-add9', 'Fm-add11', 'Fm6', 'Fm9', 'Fm11', 'Fm13',"Fm13"];
const fDA = ['Fdim', 'Faug'];

const fSharp = ['F#', 'F#sus2', 'F#sus4', 'F#sus6', 'F#sus9', 'F#7', 'F#Maj7', 'F#add6', 'F#add9', 'F#add11', 'F#6', 'F#9', 'F#11', 'F#13'];
const fSharpM = ['F#m', 'F#m-sus2', 'F#m-sus4', 'F#m-sus6', 'F#m-sus9','F#m7', 'F#m-add6', 'F#m-add9', 'F#m-add11', 'F#m6', 'F#m9', 'F#m11', 'F#m13',"m13"];
const fSharpDA = ['F#dim', 'F#aug'];

const g = ['G', 'Gsus2', 'Gsus4', 'Gsus6', 'Gsus9', 'G7', 'GMaj7', 'Gadd6', 'Gadd9', 'Gadd11', 'G6', 'G9', 'G11', 'G13'];
const gM = ['Gm', 'Gm-sus2', 'Gm-sus4', 'Gm-sus6', 'Gm-sus9', 'Gm7', 'Gm-add6', 'Gm-add9', 'Gm-add11', 'Gm6', 'Gm9', 'Gm11', 'Gm13',"Gm13"];
const gDA = ['Gdim', 'Gaug'];

const gSharp = ['G#', 'G#sus2', 'G#sus4', 'G#sus6', 'G#sus9', 'G#7', 'G#Maj7', 'G#add6', 'G#add9', 'G#add11', 'G#6', 'G#9', 'G#11', 'G#13'];
const gSharpM = ['G#m', 'G#m-sus2', 'G#m-sus4', 'G#m-sus6', 'G#m-sus9', 'G#m7', 'G#m-add6', 'G#m-add9', 'G#m-add11', 'G#m6', 'G#m9', 'G#m11', 'G#m13',"G#m13"];
const gSharpDA = ['G#dim', 'G#aug'];

const a = ['A', 'Asus2', 'Asus4', 'Asus6', 'Asus9', 'A7', 'AMaj7', 'Aadd6', 'Aadd9', 'Aadd11', 'A6', 'A9', 'A11', 'A13'];
const aM = ['Am', 'Am-sus2', 'Am-sus4', 'Am-sus6', 'Am-sus9', 'Am7', 'Am-add6', 'Am-add9', 'Am-add11', 'Am6', 'Am9', 'Am11', 'Am13',"Am13"];
const aDA = ['Adim', 'Aaug'];

const bb = ['Bb', 'Bbsus2', 'Bbsus4', 'Bbsus6', 'Bbsus9', 'Bb7', 'BbMaj7', 'Bbadd6', 'Bbadd9', 'Bbadd11', 'Bb6', 'Bb9', 'Bb11', 'Bb13'];
const bbM = ['Bbm', 'Bbm-sus2', 'Bbm-sus4', 'Bbm-sus6', 'Bbm-sus9', 'Bbm7', 'Bbm-add6', 'Bbm-add9', 'Bbm-add11', 'Bbm6', 'Bbm9', 'Bbm11', 'Bbm13',"Bbm13"];
const bbDA = ['Bbdim', 'Bbaug'];

const b = ['B', 'Bsus2', 'Bsus4', 'Bsus6', 'Bsus9', 'B7', 'BMaj7', 'Badd6', 'Badd9', 'Badd11', 'B6', 'B9', 'B11', 'B13'];
const bM = ['Bm', 'Bm-sus2', 'Bm-sus4', 'Bm-sus6', 'Bm-sus9', 'Bm7', 'Bm-add6', 'Bm-add9', 'Bm-add11', 'Bm6', 'Bm9', 'Bm11', 'Bm13',"Bm"];
const bDA = ['Bdim', 'Baug'];

function escalaMayormen(nacordes,tono){
    const structureC = [c,dM,eM,f,g,aM,bDA];
    const structureCsh = [cSharp,ebM,fM,fSharp,gSharp,bbM,bDA];
    const structureD = [d,eM,fSharpM,g,a,bM,cSharpDA];
    const structureEb = [eb,fM,gM,g,bb,c,dDA]
    const structureE = [e,fSharpM,gSharpM,a,b,cSharpM,ebDA];
    const structureF = [f,gM,aM,bb,c,dM,eDA];
    const structureFsh = [fSharp,gSharpM,bbM,b,cSharp,ebM,fDA];
    const structureG = [g,aM,bM,c,d,eM,fSharpDA];
    const structureGsh = [gSharp,bbM,cM,cSharp,eb,fM,gDA];
    const structureA = [a,bM,cSharpM,d,e,fSharpM,gSharpDA];
    const structureBb = [bb,cM,dM,eb,f,gM,aDA];
    const structureB = [b,cSharpM,ebM,e,fSharp,gSharpM,bbDA];
    let concat = "";
    var prog = "";
    let note = 0;
    let chord = 0;
    if(tono < 100){
        if(tono == 1){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                //esto es para los disminuidos y los aumentados
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureC[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
        }
        else if (tono == 2){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureCsh[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
            
        }
        else if (tono == 3){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureD[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
            
        }
        else if (tono == 4){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureEb[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
            
        }
        else if (tono == 5){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureE[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
        }
        else if (tono == 6){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureF[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
        }
        else if (tono == 7){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureFsh[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
        }
        else if (tono == 8){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureG[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
        }
        else if (tono == 9){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureGsh[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
        }
        else if (tono == 10){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureA[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
        }
        else if (tono == 11){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureBb[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
        }
        else if (tono == 12){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureA.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                if(note === 6 && chord !== 0){
                    //bucle
                    do{

                        //Random en Tono
                        note = Math.floor(Math.random() * structureA.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                    }while(note === 6 && chord !== 0)
                }
                prog = structureB[note][chord];
                concat = concat + ' | '+ prog;
            }
            return concat.slice(2);
        }
    }
}
function escalaPentatonic(nacordes,tono) {
    const structureCpent = [c,dM,eM,g,aM];
    const structureCshpent = [cSharp,ebM,fM,gSharp,bbM];
    const structureDpent = [d,eM,fSharpM,a,bM];
    const structureEbpent = [eb,fM,gM,bb,c];
    const structureEpent = [e,fSharpM,gSharpM,b,cSharpM];
    const structureFpent = [f,gM,aM,c,dM];
    const structureFshpent = [fSharp,gSharpM,bbM,cSharp,ebM];
    const structureGpent = [g,aM,bM,d,eM];
    const structureGshpent = [gSharp,bbM,cM,eb,fM];
    const structureApent = [a,bM,cSharpM,e,fSharpM];
    const structureBbpent = [bb,cM,dM,f,gM];
    const structureBpent = [b,cSharpM,ebM,fSharp,gSharpM];

    let concat = "";
    var prog = "";
    let note = 0;
    let chord = 0;

    //C
    if(tono == 1){
            for(let i = 0 ; i < nacordes; i++){
                //Random en Tono
                note = Math.floor(Math.random() * structureApent.length)
                //Random En Acorde dentro del tono
                chord = Math.floor(Math.random() * c.length)
                
                prog = structureCpent[note][chord];
                //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
                if( prog !== structureCpent[0][0] && prog !== structureCpent[0][1] && prog !== structureCpent[0][3] && 
                    prog !== structureCpent[0][4] && prog !== structureCpent[0][7] && prog !== structureCpent[0][8] && 
                    prog !== structureCpent[0][10] && prog !== structureCpent[1][0] && prog !== structureCpent[1][1] && 
                    prog !== structureCpent[1][2] && prog !== structureCpent[1][4] && prog !== structureCpent[1][5] && 
                    prog !== structureCpent[2][0] && prog !== structureCpent[2][3] && prog !== structureCpent[2][4] && 
                    prog !== structureCpent[2][5] && prog !== structureCpent[2][6] && prog !== structureCpent[2][7] && 
                    prog !== structureCpent[2][9] && prog !== structureCpent[2][10] && prog !== structureCpent[2][12] && 
                    prog !== structureCpent[2][13] && prog !== structureCpent[3][0] && prog !== structureCpent[3][1] && 
                    prog !== structureCpent[3][2] && prog !== structureCpent[3][3] && prog !== structureCpent[3][4] && 
                    prog !== structureCpent[3][7] && prog !== structureCpent[3][8] && prog !== structureCpent[3][10] && 
                    prog !== structureCpent[3][11] && prog !== structureCpent[3][12] && prog !== structureCpent[3][13] && 
                    prog !== structureCpent[4][0] && prog !== structureCpent[4][2] && prog !== structureCpent[4][5] && 
                    prog !== structureCpent[4][10] && prog !== structureCpent[4][12]){ //puse un cero por el momento, porque me tego qe ir, este codigo ni siquiera esta empezado, lo copie directamente de la funcion de mayor y menor haci que todavia puede que tenga incongruencias
                    //bucle
                    do{
                        //Random en Tono
                        note = Math.floor(Math.random() * structureApent.length)
                        //Random En Acorde dentro del tono
                        chord = Math.floor(Math.random() * c.length)

                        prog = structureCpent[note][chord];
                    }while(prog !== structureCpent[0][0] && prog !== structureCpent[0][1] && prog !== structureCpent[0][3] && 
                        prog !== structureCpent[0][4] && prog !== structureCpent[0][7] && prog !== structureCpent[0][8] && 
                        prog !== structureCpent[0][10] && prog !== structureCpent[1][0] && prog !== structureCpent[1][1] && 
                        prog !== structureCpent[1][2] && prog !== structureCpent[1][4] && prog !== structureCpent[1][5] && 
                        prog !== structureCpent[2][0] && prog !== structureCpent[2][3] && prog !== structureCpent[2][4] && 
                        prog !== structureCpent[2][5] && prog !== structureCpent[2][6] && prog !== structureCpent[2][7] && 
                        prog !== structureCpent[2][9] && prog !== structureCpent[2][10] && prog !== structureCpent[2][12] && 
                        prog !== structureCpent[2][13] && prog !== structureCpent[3][0] && prog !== structureCpent[3][1] && 
                        prog !== structureCpent[3][2] && prog !== structureCpent[3][3] && prog !== structureCpent[3][4] && 
                        prog !== structureCpent[3][7] && prog !== structureCpent[3][8] && prog !== structureCpent[3][10] && 
                        prog !== structureCpent[3][11] && prog !== structureCpent[3][12] && prog !== structureCpent[3][13] && 
                        prog !== structureCpent[4][0] && prog !== structureCpent[4][2] && prog !== structureCpent[4][5] && 
                        prog !== structureCpent[4][10] && prog !== structureCpent[4][12])
                }
                
                concat = concat + ' | '+ prog;
                
            }
            return concat.slice(2);
    }
    //C#
    else if(tono == 2){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureCshpent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureCshpent[0][0] && prog !== structureCshpent[0][1] && prog !== structureCshpent[0][3] && 
                prog !== structureCshpent[0][4] && prog !== structureCshpent[0][7] && prog !== structureCshpent[0][8] && 
                prog !== structureCshpent[0][10] && prog !== structureCshpent[1][0] && prog !== structureCshpent[1][1] && 
                prog !== structureCshpent[1][2] && prog !== structureCshpent[1][4] && prog !== structureCshpent[1][5] && 
                prog !== structureCshpent[2][0] && prog !== structureCshpent[2][3] && prog !== structureCshpent[2][4] && 
                prog !== structureCshpent[2][5] && prog !== structureCshpent[2][6] && prog !== structureCshpent[2][7] && 
                prog !== structureCshpent[2][9] && prog !== structureCshpent[2][10] && prog !== structureCshpent[2][12] && 
                prog !== structureCshpent[2][13] && prog !== structureCshpent[3][0] && prog !== structureCshpent[3][1] && 
                prog !== structureCshpent[3][2] && prog !== structureCshpent[3][3] && prog !== structureCshpent[3][4] && 
                prog !== structureCshpent[3][7] && prog !== structureCshpent[3][8] && prog !== structureCshpent[3][10] && 
                prog !== structureCshpent[3][11] && prog !== structureCshpent[3][12] && prog !== structureCshpent[3][13] && 
                prog !== structureCshpent[4][0] && prog !== structureCshpent[4][2] && prog !== structureCshpent[4][5] && 
                prog !== structureCshpent[4][10] && prog !== structureCshpent[4][12]){ //puse un cero por el momento, porque me tego qe ir, este codigo ni siquiera esta empezado, lo copie directamente de la funcion de mayor y menor haci que todavia puede que tenga incongruencias
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureCshpent[note][chord];
                }while(prog !== structureCshpent[0][0] && prog !== structureCshpent[0][1] && prog !== structureCshpent[0][3] && 
                    prog !== structureCshpent[0][4] && prog !== structureCshpent[0][7] && prog !== structureCshpent[0][8] && 
                    prog !== structureCshpent[0][10] && prog !== structureCshpent[1][0] && prog !== structureCshpent[1][1] && 
                    prog !== structureCshpent[1][2] && prog !== structureCshpent[1][4] && prog !== structureCshpent[1][5] && 
                    prog !== structureCshpent[2][0] && prog !== structureCshpent[2][3] && prog !== structureCshpent[2][4] && 
                    prog !== structureCshpent[2][5] && prog !== structureCshpent[2][6] && prog !== structureCshpent[2][7] && 
                    prog !== structureCshpent[2][9] && prog !== structureCshpent[2][10] && prog !== structureCshpent[2][12] && 
                    prog !== structureCshpent[2][13] && prog !== structureCshpent[3][0] && prog !== structureCshpent[3][1] && 
                    prog !== structureCshpent[3][2] && prog !== structureCshpent[3][3] && prog !== structureCshpent[3][4] && 
                    prog !== structureCshpent[3][7] && prog !== structureCshpent[3][8] && prog !== structureCshpent[3][10] && 
                    prog !== structureCshpent[3][11] && prog !== structureCshpent[3][12] && prog !== structureCshpent[3][13] && 
                    prog !== structureCshpent[4][0] && prog !== structureCshpent[4][2] && prog !== structureCshpent[4][5] && 
                    prog !== structureCshpent[4][10] && prog !== structureCshpent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
    }
    //D
    else if(tono == 3){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureDpent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureDpent[0][0] && prog !== structureDpent[0][1] && prog !== structureDpent[0][3] && 
                prog !== structureDpent[0][4] && prog !== structureDpent[0][7] && prog !== structureDpent[0][8] && 
                prog !== structureDpent[0][10] && prog !==structureDpent[1][0] && prog !== structureDpent[1][1] && 
                prog !== structureDpent[1][2] && prog !== structureDpent[1][4] && prog !== structureDpent[1][5] && 
                prog !== structureDpent[2][0] && prog !== structureDpent[2][3] && prog !== structureDpent[2][4] && 
                prog !== structureDpent[2][5] && prog !== structureDpent[2][6] && prog !== structureDpent[2][7] && 
                prog !== structureDpent[2][9] && prog !== structureDpent[2][10] && prog !==structureDpent[2][12] && 
                prog !== structureDpent[2][13] && prog !==structureDpent[3][0] && prog !== structureDpent[3][1] && 
                prog !== structureDpent[3][2] && prog !== structureDpent[3][3] && prog !== structureDpent[3][4] && 
                prog !== structureDpent[3][7] && prog !== structureDpent[3][8] && prog !== structureDpent[3][10] && 
                prog !== structureDpent[3][11] && prog !==structureDpent[3][12] && prog !==structureDpent[3][13] && 
                prog !== structureDpent[4][0] && prog !== structureDpent[4][2] && prog !== structureDpent[4][5] && 
                prog !== structureDpent[4][10] && prog !==structureDpent[4][12]){ //puse un cero por el momento, porque me tego qe ir, este codigo ni siquiera esta empezado, lo copie directamente de la funcion de mayor y menor haci que todavia puede que tenga incongruencias
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureDpent[note][chord];
                }while(prog !== structureDpent[0][0] && prog !== structureDpent[0][1] && prog !== structureDpent[0][3] && 
                    prog !== structureDpent[0][4] && prog !== structureDpent[0][7] && prog !== structureDpent[0][8] && 
                    prog !== structureDpent[0][10] && prog !==structureDpent[1][0] && prog !== structureDpent[1][1] && 
                    prog !== structureDpent[1][2] && prog !== structureDpent[1][4] && prog !== structureDpent[1][5] && 
                    prog !== structureDpent[2][0] && prog !== structureDpent[2][3] && prog !== structureDpent[2][4] && 
                    prog !== structureDpent[2][5] && prog !== structureDpent[2][6] && prog !== structureDpent[2][7] && 
                    prog !== structureDpent[2][9] && prog !== structureDpent[2][10] && prog !==structureDpent[2][12] && 
                    prog !== structureDpent[2][13] && prog !==structureDpent[3][0] && prog !== structureDpent[3][1] && 
                    prog !== structureDpent[3][2] && prog !== structureDpent[3][3] && prog !== structureDpent[3][4] && 
                    prog !== structureDpent[3][7] && prog !== structureDpent[3][8] && prog !== structureDpent[3][10] && 
                    prog !== structureDpent[3][11] && prog !==structureDpent[3][12] && prog !==structureDpent[3][13] && 
                    prog !== structureDpent[4][0] && prog !== structureDpent[4][2] && prog !== structureDpent[4][5] && 
                    prog !== structureDpent[4][10] && prog !==structureDpent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
    }
    //Eb
    else if(tono == 4){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureEbpent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureEbpent[0][0] && prog !== structureEbpent[0][1] && prog !== structureEbpent[0][3] && 
                prog !== structureEbpent[0][4] && prog !== structureEbpent[0][7] && prog !== structureEbpent[0][8] && 
                prog !== structureEbpent[0][10] && prog !==structureEbpent[1][0] && prog !== structureEbpent[1][1] && 
                prog !== structureEbpent[1][2] && prog !== structureEbpent[1][4] && prog !== structureEbpent[1][5] && 
                prog !== structureEbpent[2][0] && prog !== structureEbpent[2][3] && prog !== structureEbpent[2][4] && 
                prog !== structureEbpent[2][5] && prog !== structureEbpent[2][6] && prog !== structureEbpent[2][7] && 
                prog !== structureEbpent[2][9] && prog !== structureEbpent[2][10] && prog !==structureEbpent[2][12] && 
                prog !== structureEbpent[2][13] && prog !==structureEbpent[3][0] && prog !== structureEbpent[3][1] && 
                prog !== structureEbpent[3][2] && prog !== structureEbpent[3][3] && prog !== structureEbpent[3][4] && 
                prog !== structureEbpent[3][7] && prog !== structureEbpent[3][8] && prog !== structureEbpent[3][10] && 
                prog !== structureEbpent[3][11] && prog !==structureEbpent[3][12] && prog !==structureEbpent[3][13] && 
                prog !== structureEbpent[4][0] && prog !== structureEbpent[4][2] && prog !== structureEbpent[4][5] && 
                prog !== structureEbpent[4][10] && prog !==structureEbpent[4][12]){ //puse un cero por el momento, porque me tego qe ir, este codigo ni siquiera esta empezado, lo copie directamente de la funcion de mayor y menor haci que todavia puede que tenga incongruencias
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureEbpent[note][chord];
                }while(prog !== structureEbpent[0][0] && prog !== structureEbpent[0][1] && prog !== structureEbpent[0][3] && 
                    prog !== structureEbpent[0][4] && prog !== structureEbpent[0][7] && prog !== structureEbpent[0][8] && 
                    prog !== structureEbpent[0][10] && prog !==structureEbpent[1][0] && prog !== structureEbpent[1][1] && 
                    prog !== structureEbpent[1][2] && prog !== structureEbpent[1][4] && prog !== structureEbpent[1][5] && 
                    prog !== structureEbpent[2][0] && prog !== structureEbpent[2][3] && prog !== structureEbpent[2][4] && 
                    prog !== structureEbpent[2][5] && prog !== structureEbpent[2][6] && prog !== structureEbpent[2][7] && 
                    prog !== structureEbpent[2][9] && prog !== structureEbpent[2][10] && prog !==structureEbpent[2][12] && 
                    prog !== structureEbpent[2][13] && prog !==structureEbpent[3][0] && prog !== structureEbpent[3][1] && 
                    prog !== structureEbpent[3][2] && prog !== structureEbpent[3][3] && prog !== structureEbpent[3][4] && 
                    prog !== structureEbpent[3][7] && prog !== structureEbpent[3][8] && prog !== structureEbpent[3][10] && 
                    prog !== structureEbpent[3][11] && prog !==structureEbpent[3][12] && prog !==structureEbpent[3][13] && 
                    prog !== structureEbpent[4][0] && prog !== structureEbpent[4][2] && prog !== structureEbpent[4][5] && 
                    prog !== structureEbpent[4][10] && prog !==structureEbpent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
    }
    //E
    else if(tono == 5){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureEpent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureEpent[0][0] && prog !== structureEpent[0][1] && prog !== structureEpent[0][3] && 
                prog !== structureEpent[0][4] && prog !== structureEpent[0][7] && prog !== structureEpent[0][8] && 
                prog !== structureEpent[0][10] && prog !==structureEpent[1][0] && prog !== structureEpent[1][1] && 
                prog !== structureEpent[1][2] && prog !== structureEpent[1][4] && prog !== structureEpent[1][5] && 
                prog !== structureEpent[2][0] && prog !== structureEpent[2][3] && prog !== structureEpent[2][4] && 
                prog !== structureEpent[2][5] && prog !== structureEpent[2][6] && prog !== structureEpent[2][7] && 
                prog !== structureEpent[2][9] && prog !== structureEpent[2][10] && prog !==structureEpent[2][12] && 
                prog !== structureEpent[2][13] && prog !==structureEpent[3][0] && prog !== structureEpent[3][1] && 
                prog !== structureEpent[3][2] && prog !== structureEpent[3][3] && prog !== structureEpent[3][4] && 
                prog !== structureEpent[3][7] && prog !== structureEpent[3][8] && prog !== structureEpent[3][10] && 
                prog !== structureEpent[3][11] && prog !==structureEpent[3][12] && prog !==structureEpent[3][13] && 
                prog !== structureEpent[4][0] && prog !== structureEpent[4][2] && prog !== structureEpent[4][5] && 
                prog !== structureEpent[4][10] && prog !==structureEpent[4][12]){ //puse un cero por el momento, porque me tego qe ir, este codigo ni siquiera esta empezado, lo copie directamente de la funcion de mayor y menor haci que todavia puede que tenga incongruencias
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureEpent[note][chord];
                }while(prog !== structureEpent[0][0] && prog !== structureEpent[0][1] && prog !== structureEpent[0][3] && 
                    prog !== structureEpent[0][4] && prog !==structureEpent[0][7] && prog !== structureEpent[0][8] && 
                    prog !== structureEpent[0][10] && prog !==structureEpent[1][0] && prog !== structureEpent[1][1] && 
                    prog !== structureEpent[1][2] && prog !==structureEpent[1][4] && prog !== structureEpent[1][5] && 
                    prog !== structureEpent[2][0] && prog !==structureEpent[2][3] && prog !== structureEpent[2][4] && 
                    prog !== structureEpent[2][5] && prog !==structureEpent[2][6] && prog !== structureEpent[2][7] && 
                    prog !== structureEpent[2][9] && prog !==structureEpent[2][10] && prog !==structureEpent[2][12] && 
                    prog !== structureEpent[2][13] && prog !==structureEpent[3][0] && prog !== structureEpent[3][1] && 
                    prog !== structureEpent[3][2] && prog !==structureEpent[3][3] && prog !== structureEpent[3][4] && 
                    prog !== structureEpent[3][7] && prog !==structureEpent[3][8] && prog !== structureEpent[3][10] && 
                    prog !== structureEpent[3][11] && prog !==structureEpent[3][12] && prog !==structureEpent[3][13] && 
                    prog !== structureEpent[4][0] && prog !==structureEpent[4][2] && prog !== structureEpent[4][5] && 
                    prog !== structureEpent[4][10] && prog !==structureEpent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
    }
    //F
    else if(tono == 6){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureFpent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureFpent[0][0] && prog !== structureFpent[0][1] && prog !== structureFpent[0][3] && 
                prog !== structureFpent[0][4] && prog !== structureFpent[0][7] && prog !== structureFpent[0][8] && 
                prog !== structureFpent[0][10] && prog !==structureFpent[1][0] && prog !== structureFpent[1][1] && 
                prog !== structureFpent[1][2] && prog !== structureFpent[1][4] && prog !== structureFpent[1][5] && 
                prog !== structureFpent[2][0] && prog !== structureFpent[2][3] && prog !== structureFpent[2][4] && 
                prog !== structureFpent[2][5] && prog !== structureFpent[2][6] && prog !== structureFpent[2][7] && 
                prog !== structureFpent[2][9] && prog !== structureFpent[2][10] && prog !==structureFpent[2][12] && 
                prog !== structureFpent[2][13] && prog !==structureFpent[3][0] && prog !== structureFpent[3][1] && 
                prog !== structureFpent[3][2] && prog !== structureFpent[3][3] && prog !== structureFpent[3][4] && 
                prog !== structureFpent[3][7] && prog !== structureFpent[3][8] && prog !== structureFpent[3][10] && 
                prog !== structureFpent[3][11] && prog !==structureFpent[3][12] && prog !==structureFpent[3][13] && 
                prog !== structureFpent[4][0] && prog !== structureFpent[4][2] && prog !== structureFpent[4][5] && 
                prog !== structureFpent[4][10] && prog !==structureFpent[4][12]){ //puse un cero por el momento, porque me tego qe ir, este codigo ni siquiera esta empezado, lo copie directamente de la funcion de mayor y menor haci que todavia puede que tenga incongruencias
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureFpent[note][chord];
                }while(prog !== structureFpent[0][0] && prog !== structureFpent[0][1] && prog !== structureFpent[0][3] && 
                    prog !== structureFpent[0][4] && prog !== structureFpent[0][7] && prog !== structureFpent[0][8] && 
                    prog !== structureFpent[0][10] && prog !==structureFpent[1][0] && prog !== structureFpent[1][1] && 
                    prog !== structureFpent[1][2] && prog !== structureFpent[1][4] && prog !== structureFpent[1][5] && 
                    prog !== structureFpent[2][0] && prog !== structureFpent[2][3] && prog !== structureFpent[2][4] && 
                    prog !== structureFpent[2][5] && prog !== structureFpent[2][6] && prog !== structureFpent[2][7] && 
                    prog !== structureFpent[2][9] && prog !== structureFpent[2][10] && prog !==structureFpent[2][12] && 
                    prog !== structureFpent[2][13] && prog !==structureFpent[3][0] && prog !== structureFpent[3][1] && 
                    prog !== structureFpent[3][2] && prog !== structureFpent[3][3] && prog !== structureFpent[3][4] && 
                    prog !== structureFpent[3][7] && prog !== structureFpent[3][8] && prog !== structureFpent[3][10] && 
                    prog !== structureFpent[3][11] && prog !==structureFpent[3][12] && prog !==structureFpent[3][13] && 
                    prog !== structureFpent[4][0] && prog !== structureFpent[4][2] && prog !== structureFpent[4][5] && 
                    prog !== structureFpent[4][10] && prog !==structureFpent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
    }
    //F#
    else if(tono == 7){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureFshpent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureFshpent[0][0] && prog !== structureFshpent[0][1] && prog !== structureFshpent[0][3] && 
                prog !== structureFshpent[0][4] && prog !== structureFshpent[0][7] && prog !== structureFshpent[0][8] && 
                prog !== structureFshpent[0][10] && prog !==structureFshpent[1][0] && prog !== structureFshpent[1][1] && 
                prog !== structureFshpent[1][2] && prog !== structureFshpent[1][4] && prog !== structureFshpent[1][5] && 
                prog !== structureFshpent[2][0] && prog !== structureFshpent[2][3] && prog !== structureFshpent[2][4] && 
                prog !== structureFshpent[2][5] && prog !== structureFshpent[2][6] && prog !== structureFshpent[2][7] && 
                prog !== structureFshpent[2][9] && prog !== structureFshpent[2][10] && prog !==structureFshpent[2][12] && 
                prog !== structureFshpent[2][13] && prog !==structureFshpent[3][0] && prog !== structureFshpent[3][1] && 
                prog !== structureFshpent[3][2] && prog !== structureFshpent[3][3] && prog !== structureFshpent[3][4] && 
                prog !== structureFshpent[3][7] && prog !== structureFshpent[3][8] && prog !== structureFshpent[3][10] && 
                prog !== structureFshpent[3][11] && prog !==structureFshpent[3][12] && prog !==structureFshpent[3][13] && 
                prog !== structureFshpent[4][0] && prog !== structureFshpent[4][2] && prog !== structureFshpent[4][5] && 
                prog !== structureFshpent[4][10] && prog !==structureFshpent[4][12]){ //puse un cero por el momento, porque me tego qe ir, este codigo ni siquiera esta empezado, lo copie directamente de la funcion de mayor y menor haci que todavia puede que tenga incongruencias
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureFshpent[note][chord];
                }while(prog !== structureFshpent[0][0] && prog !== structureFshpent[0][1] && prog !== structureFshpent[0][3] && 
                    prog !== structureFshpent[0][4] && prog !== structureFshpent[0][7] && prog !== structureFshpent[0][8] && 
                    prog !== structureFshpent[0][10] && prog !==structureFshpent[1][0] && prog !== structureFshpent[1][1] && 
                    prog !== structureFshpent[1][2] && prog !== structureFshpent[1][4] && prog !== structureFshpent[1][5] && 
                    prog !== structureFshpent[2][0] && prog !== structureFshpent[2][3] && prog !== structureFshpent[2][4] && 
                    prog !== structureFshpent[2][5] && prog !== structureFshpent[2][6] && prog !== structureFshpent[2][7] && 
                    prog !== structureFshpent[2][9] && prog !== structureFshpent[2][10] && prog !==structureFshpent[2][12] && 
                    prog !== structureFshpent[2][13] && prog !==structureFshpent[3][0] && prog !== structureFshpent[3][1] && 
                    prog !== structureFshpent[3][2] && prog !== structureFshpent[3][3] && prog !== structureFshpent[3][4] && 
                    prog !== structureFshpent[3][7] && prog !== structureFshpent[3][8] && prog !== structureFshpent[3][10] && 
                    prog !== structureFshpent[3][11] && prog !==structureFshpent[3][12] && prog !==structureFshpent[3][13] && 
                    prog !== structureFshpent[4][0] && prog !== structureFshpent[4][2] && prog !== structureFshpent[4][5] && 
                    prog !== structureFshpent[4][10] && prog !==structureFshpent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
    }
    //G
    else if(tono == 8){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureGpent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureGpent[0][0] && prog !== structureGpent[0][1] && prog !== structureGpent[0][3] && 
                prog !== structureGpent[0][4] && prog !== structureGpent[0][7] && prog !== structureGpent[0][8] && 
                prog !== structureGpent[0][10] && prog !==structureGpent[1][0] && prog !== structureGpent[1][1] && 
                prog !== structureGpent[1][2] && prog !== structureGpent[1][4] && prog !== structureGpent[1][5] && 
                prog !== structureGpent[2][0] && prog !== structureGpent[2][3] && prog !== structureGpent[2][4] && 
                prog !== structureGpent[2][5] && prog !== structureGpent[2][6] && prog !== structureGpent[2][7] && 
                prog !== structureGpent[2][9] && prog !== structureGpent[2][10] && prog !==structureGpent[2][12] && 
                prog !== structureGpent[2][13] && prog !==structureGpent[3][0] && prog !== structureGpent[3][1] && 
                prog !== structureGpent[3][2] && prog !== structureGpent[3][3] && prog !== structureGpent[3][4] && 
                prog !== structureGpent[3][7] && prog !== structureGpent[3][8] && prog !== structureGpent[3][10] && 
                prog !== structureGpent[3][11] && prog !==structureGpent[3][12] && prog !==structureGpent[3][13] && 
                prog !== structureGpent[4][0] && prog !== structureGpent[4][2] && prog !== structureGpent[4][5] && 
                prog !== structureGpent[4][10] && prog !==structureGpent[4][12]){ 
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureGpent[note][chord];
                }while(prog !== structureGpent[0][0] && prog !== structureGpent[0][1] && prog !== structureGpent[0][3] && 
                    prog !== structureGpent[0][4] && prog !== structureGpent[0][7] && prog !== structureGpent[0][8] && 
                    prog !== structureGpent[0][10] && prog !==structureGpent[1][0] && prog !== structureGpent[1][1] && 
                    prog !== structureGpent[1][2] && prog !== structureGpent[1][4] && prog !== structureGpent[1][5] && 
                    prog !== structureGpent[2][0] && prog !== structureGpent[2][3] && prog !== structureGpent[2][4] && 
                    prog !== structureGpent[2][5] && prog !== structureGpent[2][6] && prog !== structureGpent[2][7] && 
                    prog !== structureGpent[2][9] && prog !== structureGpent[2][10] && prog !==structureGpent[2][12] && 
                    prog !== structureGpent[2][13] && prog !==structureGpent[3][0] && prog !== structureGpent[3][1] && 
                    prog !== structureGpent[3][2] && prog !== structureGpent[3][3] && prog !== structureGpent[3][4] && 
                    prog !== structureGpent[3][7] && prog !== structureGpent[3][8] && prog !== structureGpent[3][10] && 
                    prog !== structureGpent[3][11] && prog !==structureGpent[3][12] && prog !==structureGpent[3][13] && 
                    prog !== structureGpent[4][0] && prog !== structureGpent[4][2] && prog !== structureGpent[4][5] && 
                    prog !== structureGpent[4][10] && prog !==structureGpent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
    }
    //G#
    else if(tono == 9){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureGshpent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureGshpent[0][0] && prog !== structureGshpent[0][1] && prog !== structureGshpent[0][3] && 
                prog !== structureGshpent[0][4] && prog !== structureGshpent[0][7] && prog !== structureGshpent[0][8] && 
                prog !== structureGshpent[0][10] && prog !==structureGshpent[1][0] && prog !== structureGshpent[1][1] && 
                prog !== structureGshpent[1][2] && prog !== structureGshpent[1][4] && prog !== structureGshpent[1][5] && 
                prog !== structureGshpent[2][0] && prog !== structureGshpent[2][3] && prog !== structureGshpent[2][4] && 
                prog !== structureGshpent[2][5] && prog !== structureGshpent[2][6] && prog !== structureGshpent[2][7] && 
                prog !== structureGshpent[2][9] && prog !== structureGshpent[2][10] && prog !==structureGshpent[2][12] && 
                prog !== structureGshpent[2][13] && prog !==structureGshpent[3][0] && prog !== structureGshpent[3][1] && 
                prog !== structureGshpent[3][2] && prog !== structureGshpent[3][3] && prog !== structureGshpent[3][4] && 
                prog !== structureGshpent[3][7] && prog !== structureGshpent[3][8] && prog !== structureGshpent[3][10] && 
                prog !== structureGshpent[3][11] && prog !==structureGshpent[3][12] && prog !==structureGshpent[3][13] && 
                prog !== structureGshpent[4][0] && prog !== structureGshpent[4][2] && prog !== structureGshpent[4][5] && 
                prog !== structureGshpent[4][10] && prog !==structureGshpent[4][12]){ 
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureGshpent[note][chord];
                }while(prog !== structureGshpent[0][0] && prog !== structureGshpent[0][1] && prog !== structureGshpent[0][3] && 
                    prog !== structureGshpent[0][4] && prog !== structureGshpent[0][7] && prog !== structureGshpent[0][8] && 
                    prog !== structureGshpent[0][10] && prog !==structureGshpent[1][0] && prog !== structureGshpent[1][1] && 
                    prog !== structureGshpent[1][2] && prog !== structureGshpent[1][4] && prog !== structureGshpent[1][5] && 
                    prog !== structureGshpent[2][0] && prog !== structureGshpent[2][3] && prog !== structureGshpent[2][4] && 
                    prog !== structureGshpent[2][5] && prog !== structureGshpent[2][6] && prog !== structureGshpent[2][7] && 
                    prog !== structureGshpent[2][9] && prog !== structureGshpent[2][10] && prog !==structureGshpent[2][12] && 
                    prog !== structureGshpent[2][13] && prog !==structureGshpent[3][0] && prog !== structureGshpent[3][1] && 
                    prog !== structureGshpent[3][2] && prog !== structureGshpent[3][3] && prog !== structureGshpent[3][4] && 
                    prog !== structureGshpent[3][7] && prog !== structureGshpent[3][8] && prog !== structureGshpent[3][10] && 
                    prog !== structureGshpent[3][11] && prog !==structureGshpent[3][12] && prog !==structureGshpent[3][13] && 
                    prog !== structureGshpent[4][0] && prog !== structureGshpent[4][2] && prog !== structureGshpent[4][5] && 
                    prog !== structureGshpent[4][10] && prog !==structureGshpent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
    }
    //A
    else if(tono == 10){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureApent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureApent[0][0] && prog !== structureApent[0][1] && prog !== structureApent[0][3] && 
                prog !== structureApent[0][4] && prog !== structureApent[0][7] && prog !== structureApent[0][8] && 
                prog !== structureApent[0][10] && prog !==structureApent[1][0] && prog !== structureApent[1][1] && 
                prog !== structureApent[1][2] && prog !== structureApent[1][4] && prog !== structureApent[1][5] && 
                prog !== structureApent[2][0] && prog !== structureApent[2][3] && prog !== structureApent[2][4] && 
                prog !== structureApent[2][5] && prog !== structureApent[2][6] && prog !== structureApent[2][7] && 
                prog !== structureApent[2][9] && prog !== structureApent[2][10] && prog !==structureApent[2][12] && 
                prog !== structureApent[2][13] && prog !==structureApent[3][0] && prog !== structureApent[3][1] && 
                prog !== structureApent[3][2] && prog !== structureApent[3][3] && prog !== structureApent[3][4] && 
                prog !== structureApent[3][7] && prog !== structureApent[3][8] && prog !== structureApent[3][10] && 
                prog !== structureApent[3][11] && prog !==structureApent[3][12] && prog !==structureApent[3][13] && 
                prog !== structureApent[4][0] && prog !== structureApent[4][2] && prog !== structureApent[4][5] && 
                prog !== structureApent[4][10] && prog !==structureApent[4][12]){ 
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureApent[note][chord];
                }while(prog !== structureApent[0][0] && prog !== structureApent[0][1] && prog !== structureApent[0][3] && 
                    prog !== structureApent[0][4] && prog !== structureApent[0][7] && prog !== structureApent[0][8] && 
                    prog !== structureApent[0][10] && prog !==structureApent[1][0] && prog !== structureApent[1][1] && 
                    prog !== structureApent[1][2] && prog !== structureApent[1][4] && prog !== structureApent[1][5] && 
                    prog !== structureApent[2][0] && prog !== structureApent[2][3] && prog !== structureApent[2][4] && 
                    prog !== structureApent[2][5] && prog !== structureApent[2][6] && prog !== structureApent[2][7] && 
                    prog !== structureApent[2][9] && prog !== structureApent[2][10] && prog !==structureApent[2][12] && 
                    prog !== structureApent[2][13] && prog !==structureApent[3][0] && prog !== structureApent[3][1] && 
                    prog !== structureApent[3][2] && prog !== structureApent[3][3] && prog !== structureApent[3][4] && 
                    prog !== structureApent[3][7] && prog !== structureApent[3][8] && prog !== structureApent[3][10] && 
                    prog !== structureApent[3][11] && prog !==structureApent[3][12] && prog !==structureApent[3][13] && 
                    prog !== structureApent[4][0] && prog !== structureApent[4][2] && prog !== structureApent[4][5] && 
                    prog !== structureApent[4][10] && prog !==structureApent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
    }
    //Bb
    else if(tono == 11){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureBbpent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureBbpent[0][0] && prog !== structureBbpent[0][1] && prog !== structureBbpent[0][3] && 
                prog !== structureBbpent[0][4] && prog !== structureBbpent[0][7] && prog !== structureBbpent[0][8] && 
                prog !== structureBbpent[0][10] && prog !==structureBbpent[1][0] && prog !== structureBbpent[1][1] && 
                prog !== structureBbpent[1][2] && prog !== structureBbpent[1][4] && prog !== structureBbpent[1][5] && 
                prog !== structureBbpent[2][0] && prog !== structureBbpent[2][3] && prog !== structureBbpent[2][4] && 
                prog !== structureBbpent[2][5] && prog !== structureBbpent[2][6] && prog !== structureBbpent[2][7] && 
                prog !== structureBbpent[2][9] && prog !== structureBbpent[2][10] && prog !==structureBbpent[2][12] && 
                prog !== structureBbpent[2][13] && prog !==structureBbpent[3][0] && prog !== structureBbpent[3][1] && 
                prog !== structureBbpent[3][2] && prog !== structureBbpent[3][3] && prog !== structureBbpent[3][4] && 
                prog !== structureBbpent[3][7] && prog !== structureBbpent[3][8] && prog !== structureBbpent[3][10] && 
                prog !== structureBbpent[3][11] && prog !==structureBbpent[3][12] && prog !==structureBbpent[3][13] && 
                prog !== structureBbpent[4][0] && prog !== structureBbpent[4][2] && prog !== structureBbpent[4][5] && 
                prog !== structureBbpent[4][10] && prog !==structureBbpent[4][12]){ 
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureBbpent[note][chord];
                }while(prog !== structureBbpent[0][0] && prog !== structureBbpent[0][1] && prog !== structureBbpent[0][3] && 
                    prog !== structureBbpent[0][4] && prog !== structureBbpent[0][7] && prog !== structureBbpent[0][8] && 
                    prog !== structureBbpent[0][10] && prog !==structureBbpent[1][0] && prog !== structureBbpent[1][1] && 
                    prog !== structureBbpent[1][2] && prog !== structureBbpent[1][4] && prog !== structureBbpent[1][5] && 
                    prog !== structureBbpent[2][0] && prog !== structureBbpent[2][3] && prog !== structureBbpent[2][4] && 
                    prog !== structureBbpent[2][5] && prog !== structureBbpent[2][6] && prog !== structureBbpent[2][7] && 
                    prog !== structureBbpent[2][9] && prog !== structureBbpent[2][10] && prog !==structureBbpent[2][12] && 
                    prog !== structureBbpent[2][13] && prog !==structureBbpent[3][0] && prog !== structureBbpent[3][1] && 
                    prog !== structureBbpent[3][2] && prog !== structureBbpent[3][3] && prog !== structureBbpent[3][4] && 
                    prog !== structureBbpent[3][7] && prog !== structureBbpent[3][8] && prog !== structureBbpent[3][10] && 
                    prog !== structureBbpent[3][11] && prog !==structureBbpent[3][12] && prog !==structureBbpent[3][13] && 
                    prog !== structureBbpent[4][0] && prog !== structureBbpent[4][2] && prog !== structureBbpent[4][5] && 
                    prog !== structureBbpent[4][10] && prog !==structureBbpent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
    }
    //B
    else if(tono == 12){
        for(let i = 0 ; i < nacordes; i++){
            //Random en Tono
            note = Math.floor(Math.random() * structureApent.length)
            //Random En Acorde dentro del tono
            chord = Math.floor(Math.random() * c.length)
            
            prog = structureBpent[note][chord];
            //para verificar de que no salgan acordes que tengan notas que no esten dentro del tono
            if( prog !== structureBpent[0][0] && prog !== structureBpent[0][1] && prog !== structureBpent[0][3] && 
                prog !== structureBpent[0][4] && prog !== structureBpent[0][7] && prog !== structureBpent[0][8] && 
                prog !== structureBpent[0][10] && prog !==structureBpent[1][0] && prog !== structureBpent[1][1] && 
                prog !== structureBpent[1][2] && prog !== structureBpent[1][4] && prog !== structureBpent[1][5] && 
                prog !== structureBpent[2][0] && prog !== structureBpent[2][3] && prog !== structureBpent[2][4] && 
                prog !== structureBpent[2][5] && prog !== structureBpent[2][6] && prog !== structureBpent[2][7] && 
                prog !== structureBpent[2][9] && prog !== structureBpent[2][10] && prog !==structureBpent[2][12] && 
                prog !== structureBpent[2][13] && prog !==structureBpent[3][0] && prog !== structureBpent[3][1] && 
                prog !== structureBpent[3][2] && prog !== structureBpent[3][3] && prog !== structureBpent[3][4] && 
                prog !== structureBpent[3][7] && prog !== structureBpent[3][8] && prog !== structureBpent[3][10] && 
                prog !== structureBpent[3][11] && prog !==structureBpent[3][12] && prog !==structureBpent[3][13] && 
                prog !== structureBpent[4][0] && prog !== structureBpent[4][2] && prog !== structureBpent[4][5] && 
                prog !== structureBpent[4][10] && prog !==structureBpent[4][12]){ 
                //bucle
                do{
                    //Random en Tono
                    note = Math.floor(Math.random() * structureApent.length)
                    //Random En Acorde dentro del tono
                    chord = Math.floor(Math.random() * c.length)

                    prog = structureBpent[note][chord];
                }while(prog !== structureBpent[0][0] && prog !== structureBpent[0][1] && prog !== structureBpent[0][3] && 
                    prog !== structureBpent[0][4] && prog !== structureBpent[0][7] && prog !== structureBpent[0][8] && 
                    prog !== structureBpent[0][10] && prog !==structureBpent[1][0] && prog !== structureBpent[1][1] && 
                    prog !== structureBpent[1][2] && prog !== structureBpent[1][4] && prog !== structureBpent[1][5] && 
                    prog !== structureBpent[2][0] && prog !== structureBpent[2][3] && prog !== structureBpent[2][4] && 
                    prog !== structureBpent[2][5] && prog !== structureBpent[2][6] && prog !== structureBpent[2][7] && 
                    prog !== structureBpent[2][9] && prog !== structureBpent[2][10] && prog !==structureBpent[2][12] && 
                    prog !== structureBpent[2][13] && prog !==structureBpent[3][0] && prog !== structureBpent[3][1] && 
                    prog !== structureBpent[3][2] && prog !== structureBpent[3][3] && prog !== structureBpent[3][4] && 
                    prog !== structureBpent[3][7] && prog !== structureBpent[3][8] && prog !== structureBpent[3][10] && 
                    prog !== structureBpent[3][11] && prog !==structureBpent[3][12] && prog !==structureBpent[3][13] && 
                    prog !== structureBpent[4][0] && prog !== structureBpent[4][2] && prog !== structureBpent[4][5] && 
                    prog !== structureBpent[4][10] && prog !==structureBpent[4][12])
            }
            
            concat = concat + ' | '+ prog;
            
        }
        return concat.slice(2);
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
    let retunet;
    let nreturnet
    if(modoEscojido == 0 ||modoEscojido == 1) {
        retunet = escalaMayormen(nAcordesEscojidos,tonoEscojido);
        nreturnet = retunet;
        texto_respuesta.innerHTML = nreturnet; 
    }
    else if(modoEscojido == 2){
        retunet = escalaPentatonic(nAcordesEscojidos,tonoEscojido);
        nreturnet = retunet;
        texto_respuesta.innerHTML = nreturnet; 
    }
   
}
