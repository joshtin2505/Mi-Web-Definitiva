const elementoA = document.querySelector('.one');
const elementoB = document.querySelector('.link1');

elementoA.addEventListener('mouseover', () => {
    elementoB.style.opacity = '1'; /* Muestra el elemento B cuando el mouse está sobre el elemento A */
  });
  
  elementoA.addEventListener('mouseout', () => {
    elementoB.style.opacity = '0'; /* Oculta el elemento B cuando el mouse sale del elemento A */
  });

  //
const elementoC = document.querySelector('.two');
const elementoD = document.querySelector('.link2');

elementoC.addEventListener('mouseover', () => {
    elementoD.style.opacity = '1'; /* Muestra el elemento B cuando el mouse está sobre el elemento A */
  });
  
  elementoC.addEventListener('mouseout', () => {
    elementoD.style.opacity = '0'; /* Oculta el elemento B cuando el mouse sale del elemento A */
  });

  //Faltan 2 elementos 

  const elementoE = document.querySelector('.three');
  const elementoF = document.querySelector('.link3');
  
  elementoE.addEventListener('mouseover', () => {
      elementoF.style.opacity = '1'; /* Muestra el elemento B cuando el mouse está sobre el elemento A */
    });
    
    elementoE.addEventListener('mouseout', () => {
      elementoF.style.opacity = '0'; /* Oculta el elemento B cuando el mouse sale del elemento A */
    });
  
    //
  const elementoG = document.querySelector('.four');
  const elementoH = document.querySelector('.link4');
  
  elementoG.addEventListener('mouseover', () => {
      elementoH.style.opacity = '1'; /* Muestra el elemento B cuando el mouse está sobre el elemento A */
    });
    elementoG.addEventListener('mouseout', () => {
      elementoH.style.opacity = '0'; /* Oculta el elemento B cuando el mouse sale del elemento A */
    });
  //para que se colore de el strong
  const motivar = document.querySelector('.motivar');
  const strong = document.querySelector('.text');

  motivar.addEventListener('mouseover', () => {
    strong.style.color = 'orange'; /* Muestra el elemento B cuando el mouse está sobre el elemento A */
    strong.style.textDecoration = 'underline'; /* Muestra el elemento B cuando el mouse*/

    });
    
    motivar.addEventListener('mouseout', () => {
      strong.style.color = 'white'; /* Oculta el elemento B cuando el mouse sale del elemento A */
      strong.style.textDecoration = 'none'; /* Oculta el elemento B cuando el mouse sale del elemento A */
    });