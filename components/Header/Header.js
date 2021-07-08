import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import style from './Header.module.scss';
import logo from '../../assets/logoWhite.png';
import facebook from '../../assets/SocialMedias/facebook.svg';
import mail from '../../assets/SocialMedias/mail.svg';
import instagram from '../../assets/SocialMedias/instagram.svg';

export default function Header() {
  return (
    <header className={style.headerWrapper}>
      <div className={style.leftMenuWrapper}>
        <div className={style.logoWrapper}>
          <Link href="/">
            <a>
              <Image
                src={logo}
                alt="Owl Dev Logo"
                layout="responsive"
                width={40}
                height={40}
              />
            </a>
          </Link>
        </div>
      </div>
      <div className={style.middleMenuWrapper}>
        <h4 className={style.menuLabels}>GM VITIAGRI</h4>
      </div>
      <div className={style.rightMenuWrapper}>
        <div className={style.iconWrapper}>
          <Link href="/">
            <a>
              <Image
                src={facebook}
                alt="facebook"
                layout="responsive"
                width={25}
                height={25}
              />
            </a>
          </Link>
        </div>
        <div className={style.iconWrapper}>
          <Link href="/">
            <a>
              <Image
                src={instagram}
                alt="instagram"
                layout="responsive"
                width={25}
                height={25}
              />
            </a>
          </Link>
        </div>
        <div className={style.iconWrapper}>
          <Link href="/">
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
