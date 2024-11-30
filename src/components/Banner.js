import React, { useState, useEffect } from 'react';
import image1 from './images/imagen1.jpg';
import image2 from './images/imagen2.jpg';
import image3 from './images/imagen3.jpg';
const Banner = () => {
    const images = [image1, image2, image3];
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length); 
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <div className="banner">
          <img src={images[currentImageIndex]} alt="banner" />
          <button onClick={() => setCurrentImageIndex((currentImageIndex + 1) % images.length)}>Next</button>
          <button onClick={() => setCurrentImageIndex((currentImageIndex - 1 + images.length) % images.length)}>Prev</button>
          
        </div>
      );
}
export default Banner;
