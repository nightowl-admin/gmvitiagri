import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './Footer.module.scss';
import mail from '../../assets/SocialMedias/mail.svg';
import phone from '../../assets/SocialMedias/phone.svg';

export default function Footer() {
  return (
    <section>
      <div className={style.footer}>
        <div className={style.contact}>
          <div className={style.row}>
            <div className={style.text}>
              <h2>Contactez Nous</h2>
              <p>
                N’hésitez pas à nous adresser vos demandes par mail. Nous vous
                répondrons dans les plus brefs délais.
              </p>
            </div>
          </div>
          <div className={style.column}>
            <div>
              <a href="tel:+33623602396" className={style.row}>
                <Image
                  src={phone}
                  alt="téléphone"
                  layout="fixed"
                  width={18}
                  height={18}
                />{' '}
                <p className={style.infos}>06.23.60.23.96{' '}</p>
              </a>
            </div>
            <br />
            <div>
              <a href="mailto:faurie.guillaume33@gmail.com" className={style.row}>
                <Image
                  src={mail}
                  alt="mail"
                  layout="fixed"
                  width={20}
                  height={20}
                />{' '}
                <p className={style.infos}>faurie.guillaume33@gmail.com</p>
              </a>
            </div>
          </div>
        </div>
        <div className={style.date}>
          {' '}
          © {new Date().getFullYear()} - GM-VITIAGRI{' '}
        </div>
      </div>
    </section>
  );
}
