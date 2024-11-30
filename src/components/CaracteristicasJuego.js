import React from 'react';
import image1 from './images/imagen1.jpg';
import image2 from './images/imagen2.jpg';
import image3 from './images/imagen3.jpg';
const CaracteristicasJuego = ({ title, image }) => {
    return (
      <div className="caracteristica">
        <h3>{title}</h3>
        <img src={image} alt={title} />
      </div>
    );
  };
  
  const Caracteristicas = () => {
    const caracteristicas = [
      { title: 'Alta resolución', image: image1 },
      { title: 'Multijugador', image: image2 },
      { title: 'Modo historia', image: image3 },
      { title: 'Multijugador', image: image2 },
      { title: 'Multijugador', image: image2 },
      { title: 'Multijugador', image: image2 },
      { title: 'Multijugador', image: image2 },
      { title: 'Multijugador', image: image2 }
    ];
  
    return (
        <div>
            <h2>CARACTERÍSTICAS DE NUESTROS JUEGOS</h2>
            <div className="caracteristicas-juego">
        {caracteristicas.map((item, index) => (
          <CaracteristicasJuego key={index} {...item} />
        ))}
      </div>
        </div>

    );
  };
  
  export default Caracteristicas;