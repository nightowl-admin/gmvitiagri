import React from 'react';
import style from './page.module.scss';

export default function Terrassement() {
  return (
    <section>
      <div className={style.defaultWrapper}>
        <div className={style.txtWrapper}>
          <h1>terrassements de vignobles</h1>
          <h3>Qu’est-ce que le terrassement ?</h3>
          <p>
            Le terrassement est effectué par le terrassier et consiste à
            modifier l’aspect initial du terrain. En terrassement, on
            effectue des remblais et des déblais.
          </p>
          <p>
            Le remblai permet de combler les creux et correspond à l’étape du
            nivellement. Ensuite vient le déblai, qui correspond à l’étape des
            fouilles. Lors de ces fouilles on stocke à part le déblai sous la
            forme d’un tas de terre.
          </p>
          <p>
            Le terrassement permet à votre structure finale d’être
            bien stable. Grâce à cette étape préparatoire des travaux, vous
            pouvez éviter les tassements, glissements ou autres effondrements de
            sol, qui peuvent mettre en péril votre maison une fois construite.
          </p>
          <h3>Les différents travaux de terrassement</h3>
          <p>
            Le terrassement fait référence à plusieurs étapes préparatoires de
            travaux :
          </p>
          <ul>
            <li>
              Le piquetage sert à délimiter un terrain afin de s’assurer que les
              travaux seront conformes aux plans de l’architecte. Il permet par
              exemple d’éviter d’endommager les canalisations, qui doivent être
              répertoriées lors de cette étape.{' '}
            </li>
            <li>
              L’évacuation des eaux est effectuée pour conserver une bonne
              stabilité du terrain même par temps humide. Cela consiste à
              creuser un sillon pour évacuer l’eau de pluie, poser des
              canalisations ou encore des drains.
            </li>
            <li>
              Le décaissement d’un terrain consiste à enlever une couche de
              terre végétale afin d’aplanir un terrain. Le décaissement est
              particulièrement nécessaire dans les cas de terrains en pente, ou
              lorsque le relief du terrain varie.
            </li>
            <li>Le remblaiement est la dernière étape du terrassement.</li>
          </ul>
          <p>
            L’entreprise est spécialisée dans les terrassements de vignobles,
            une activité qui consiste à préparer les parcelles de vigne en
            effectuant des travaux de nivellement, de dérochage, d’arrachage et
            de drainage afin d’éviter le ruissellement.
          </p>
        </div>
      </div>
    </section>
  );
}
