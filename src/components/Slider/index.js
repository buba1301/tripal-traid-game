import React from 'react';
import cn from 'classnames';

import s from './Slider.module.css';

const Slider = () => {
  const classNames = cn(s.container, s.sliderContent);

  return (
    <div>
      <section className={s.section}>
        <div className={s.slider}>
          <div className={classNames}>
            <h1 className={s.header}>Wow</h1>
            <h2 className={s.subheader}>Wow.Wow.Wow</h2>
            <div className={s.call}>
              <button className={s.button}>Wow</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Slider;
