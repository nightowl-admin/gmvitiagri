import React from 'react';
import Image from 'next/image';
import Header from '../Header';
import style from './Hero.module.scss';
import logo from '../../assets/logo.png';

export default function Hero() {
  return (
    <section className={style.heroWrapper}>
      <Header />
      <>
        <div className={style.heroPic}>
          <Image src={logo} alt="GM VITIAGRI Prestataire Viticole" />
        </div>
      </>
      <div className={style.emptyDiv} />
    </section>
  );
}
