import React from 'react';
import style from './Footer.module.scss';

export default function Footer() {
  return (
    <section>
      <div className={style.footer}>
        <div className={style.contact}>
          <div className={style.row}>
              <div className={style.text}>
                <h2>Contactez Nous</h2>
                <p>N’hésitez pas à nous adresser vos demandes par mail. Nous vous répondrons dans les plus brefs délais.</p>
              </div>
            </div>
            <div className={style.row}>
              <div>
                <a href="tel:+33623602396">   06.23.60.23.96   </a>
              </div>
              <br/>
              <div>
                <a href="mailto:faurie.guillaume33@gmail.com"> faurie.guillaume33@gmail.com</a>
              </div>
            </div>
        </div>
            <div className={style.date}> © {new Date().getFullYear()} - GM-VITIAGRI </div>
      </div>
    </section>
  );
}
