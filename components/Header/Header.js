import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './Header.module.scss';
import facebook from '../../assets/SocialMedias/facebook.svg';
import mail from '../../assets/SocialMedias/mail.svg';

export default function Header() {
  return (
    <header className={style.headerWrapper}>
      
      <div className={style.leftMenuWrapper}>
        <h4 className={style.menuLabels}>GM VITIAGRI</h4>
      </div>
      <div className={style.rightMenuWrapper}>
        <div className={style.iconfacebookWrapper}>
         
            <a href="https://www.facebook.com/gm.vitiagri" target="_blank">
              <Image
                src={facebook}
                alt="facebook"
                layout="responsive"
                width={25}
                height={25}
              />
            </a>
   
        </div>

        <div className={style.iconWrapper}>
          <Link href="mailto:faurie.guillaume33@gmail.com" >
            <a>
              <Image
                src={mail}
                alt="mail"
                layout="responsive"
                width={25}
                height={25}
              />
            </a>
          </Link>
        </div>
      </div>
    </header>
  );
}
