import React, { useState, useEffect } from 'react';

function Slider() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([
    "  https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/S23_ReImagine_HP_Module_Desktop.jpg",
    "https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/S23_Trunk_Show_Site_HP_desktop.jpg",
    "https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/HOP_HP_Banner_Desktop_v2.jpg",
    "https://prod.davidsbridal.com/content/dam/aem-integration/brand/homepage/Ashley_HP_TEST_Desktop.jpg"
  ]);

  useEffect(() => {
    const sliderFn = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);
    return () => clearInterval(sliderFn);
  }, [images.length]);

  return (
    <>
      <h1 style={{ textAlign: "center" }}>Welcome to my Custom Slider</h1>
      <section className="slider">
        <img src={images[index]} alt="" style={{
          width:"100%",
          height:"500px"
        }} />
      </section>
    </>
  );
}

export default Slider;
