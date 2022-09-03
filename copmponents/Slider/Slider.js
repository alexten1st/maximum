import React, { useState } from 'react';
import Carousel from 'carousel-react-rcdev'
import styles from "../../styles/Slider.module.css";

const ImageSlider = ({ slides, vin }) => {

  return (
    <Carousel>
      {slides.map((el, ind)=><div key={`${vin}_${ind}`} className={styles.imgContainer}> <img loading="lazy" decoding="async" key={`${vin}_${ind}`} src={el.urlThumb} className={styles.img} /></div>)}
    </Carousel>
  );
};

export default ImageSlider;