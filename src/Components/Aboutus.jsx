import React, { useEffect, useState } from 'react';
import '../CSSYLES/aboutUs.css';
import NavBar from './navBar';
import ImagePostHeader from './imagepostheader';
import Fother from './foother';
import imagenAbout from '../images/2.jpg';
import image3 from '../images/3.png';
import image4 from '../images/4.png';
import Modal from './modal_card';
import image5 from '../images/5.png';

const Aboutus = () => {
  const [showServices, setShowServices] = useState(false);
  const [showProblems, setShowProblems] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const servicesContent = document.querySelector('.services-content');
      const problemsContent = document.querySelector('.problems-content');
      const screenPosition = window.innerHeight / 1.3;

      if (servicesContent) {
        const servicesPosition = servicesContent.getBoundingClientRect().top;
        if (servicesPosition < screenPosition) {
          setShowServices(true);
        } else {
          setShowServices(false);
        }
      }

      if (problemsContent) {
        const problemsPosition = problemsContent.getBoundingClientRect().top;
        if (problemsPosition < screenPosition) {
          setShowProblems(true);
        } else {
          setShowProblems(false);
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className='menuprincipal'>
      <NavBar />
      <ImagePostHeader image={imagenAbout} text='Informacion de la empresa' />
      <Modal></Modal>
      <h1>Servicios de la empresa</h1>
      <div className={`Servicios content services-content ${showServices ? 'show' : ''}`}>
        <p className='texto_empresa'>
          Nuestras lonas impresas de alta calidad y a un precio justo, no busques más. Nuestra empresa se compromete a brindarte
          resultados excepcionales, atención personalizada y la mejor relación calidad-precio del mercado. Estamos listos para
          llevar tu mensaje a lo más alto y ayudarte a destacarte en un mundo lleno de posibilidades.
        </p>
        <img src={image3} alt='' />
      </div>
      <h1>Tipo de sector</h1>
      <div className={`Servicios content services-content ${showServices ? 'show' : ''}`}>
      <img src={image3} className='imagen_3' alt='' />
        <p className='texto_empresa'>
        El sector de servicios, también conocido como sector terciario,
         es una categoría económica que engloba una amplia gama de activi
         dades que brindan servicios a la sociedad. Este sector se centra en la sat
         isfacción de las necesidades y demandas de las personas y las empresas, en contrapo
         sición a la producción de bienes tangibles.
        </p>
      </div>
      <h1>Problemas y propuesta</h1>
      <section className={`contenedor_2 content problems-content ${showProblems ? 'show' : ''}`}>
        <div className='Problema'>
          <img className='Imagenes_contenidas' src={image4} alt='' />
          <p className='texto_problema'>
            La problemática principal que abordamos es la necesidad de una gestión de inventario entendible, fácil y visual, que
            sea buena y asequible en términos de costo. Cómo muchas empresas se enfrentan a desafíos al administrar sus existencias,
            como la complejidad, la falta de claridad y la dificultad para tomar decisiones estratégicas debido a herramientas y
            sistemas confusos que puede generar pérdidas prematuras o permanentes.
          </p>
        </div>
        <div className='Propuesta'>
          <p className='texto_Propuesta'>
            Nuestro enfoque se centra en proporcionarte una solución comprensible. Sabemos que la gestión de inventario puede
            resultar abrumadora, especialmente cuando se trata de grandes volúmenes de productos. Es
            por eso que hemos desarrollado una plataforma intuitiva y fácil de usar que te permitirá llevar un registro detallado
            de tus productos de manera clara y sin complicaciones. Olvídate de las tediosas hojas de cálculo y los sistemas
            confusos; con nuestra solución, tendrás todo bajo control con solo unos clics.
          </p>
          <img className='Imagenes_contenidas' src={image5} alt='' />
        </div>
      </section>
      <Fother />
    </div>
  );
};

export default Aboutus;
