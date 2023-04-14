function tempRandom(){

    let texto_respuesta = document.getElementById('texto-respuesta');

    let tempo = Math.floor(Math.random() * 200);

    if (tempo < 70){
        bucle = true;
    }
    else{
        texto_respuesta.innerHTML = `Tu Tempo Es ${tempo} BPM`;
    }
    while (bucle){
        let tempo = Math.floor(Math.random() * 200);
        if (tempo < 70){
            bucle = true;
        }
        else{
            texto_respuesta.innerHTML = `Tu Tempo Es ${tempo} BPM`;
            break;
        }
    }
}