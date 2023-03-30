import React, { useState, useEffect } from 'react';

function Slider() {
  const [index, setIndex] = useState(0);
  const [images, setImages] = useState([
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTikCjuQ95VZ4NqYk3S-vMb4bvr_pCsiTIKdA&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9z-yMHnoNXJNf9tWAItNKOYIzyaar9BN2Ng&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQinrzOoVWwa6iUKiiwRBUlZMZ9b_B93S0Adg&usqp=CAU",
    "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6WGr_tc3_Z9nSsBeN4o_qbMtZ-vCQd7UvZQ&usqp=CAU"
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
        <img src={images[index]} alt="" />
      </section>
    </>
  );
}

export default Slider;
