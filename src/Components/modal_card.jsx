import React from 'react';
import '../CSSYLES/modalCard.css'
import imagen6 from '../images/6.svg'
const modal_card = () => {
  return (
    <section className='main_container'>
        <h1 className='Titulo_modal'>Quienes somos</h1>
        <div className='Card_modal'>
            <div className='Imagen_modal'>
              <img className='imagen_modal' src={imagen6} alt="" />
            </div>
                <div className='Textos_modal'>
                  <p>punto impreso es una empresa unicamente y especificamente
                     creada para satisfacer impresiones de alta calidad y a muy
                     bien costo donde la prioridad es la satisfaccion de nuestros
                     clientes, asi mismo se busca aumentar nuestras cadenas a
                     mas puntos de contacto a lo largo del tiempo. Junto con 
                     otros proyectos en camino.</p>
                   <div className='Texto_modal'>
                    <p>Direccion:</p>
                    <p>Numero telefonico:</p>
                    <p>Directivo principal:</p>
                   </div>
            </div>
        </div>    
     </section>
  );
};

export default modal_card;