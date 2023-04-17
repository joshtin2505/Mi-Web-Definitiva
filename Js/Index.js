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