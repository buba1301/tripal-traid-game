import React from 'react';

import s from './Slider.module.css';
import Container from '../Container';

const Slider = () => {
  return (
    <div>
      <section className={s.section}>
        <div className={s.slider}>
          <Container className={s.sliderContent}>
            <h1 className={s.header}>Wow</h1>
            <h2 className={s.subheader}>Wow.Wow.Wow</h2>
            <div className={s.call}>
              <button className={s.button}>Wow</button>
            </div>
          </Container>
        </div>
      </section>
    </div>
  );
};

export default Slider;
