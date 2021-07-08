import React from 'react';
import Image from 'next/image';
import Header from '../Header';
import style from './Hero.module.scss';
import heroPic from '../../assets/tractor.png';

export default function Hero() {
  return (
    <section className={style.heroWrapper}>
      <Header />
      <>
        <p className={style.heroText}>GM VITIAGRI</p>
        {/*
        <div className={style.heroPic}>
          <Image src={heroPic} alt="GM VITIAGRI Prestataire Viticole" />
        </div>
        */}
        <p className={style.heroQuote}>
          “A year from now, you’ll wish you had started today.”
          <br />
          <span> Karen Lamb </span>
        </p>
      </>
      <div className={style.emptyDiv} />
    </section>
  );
}
