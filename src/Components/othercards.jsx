import React from 'react';
import CardController from '../controladores/CardController';
import '../CSSYLES/card2.css'
import Imagen1 from '../images/2.jpg'
const App = () => {
  return (
    <div className='contenedor-cartas'>
      <CardController
        image={Imagen1}
        name="Nombre de la tarjeta"
        value="100 MXN"
        text="20 unidades"
      />
      <CardController
        image={Imagen1}
        name="Nombre de la tarjeta"
        value="100 MXN"
        text="20 unidades"
      />
      <CardController
         image={Imagen1}
        name="Nombre de la tarjeta"
        value="100 MXN"
        text="20 unidades"
      />
      <CardController
         image={Imagen1}
        name="Nombre de la tarjeta"
        value="100 MXN"
        text="20 unidades"
      />
      <CardController
         image={Imagen1}
        name="20 unidades"
        value="100 MXN"
        text="20 unidades"
      />
      <CardController
         image={Imagen1}
        name="Nombre de la tarjeta"
        value="100 MXN"
        text="20 unidades"
      />
      <CardController
         image={Imagen1}
        name="Nombre de la tarjeta"
        value="100 MXN"
        text="20 unidades"
      />
      <CardController
        image={Imagen1}
        name="Nombre de la tarjeta"
        value="100 MXN"
        text="20 unidades"
      />
    </div>
  );
};

export default App;