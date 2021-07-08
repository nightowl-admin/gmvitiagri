import React from 'react';
import style from './About.module.scss';

export default function About() {
  return (
    <section>
      <div className={style.aboutWrapper}>
        <div className={style.txtWrapper}>
          <h1>Entreprise Sas GM Viti-agri, prestataire viticole.</h1>

          <p>
            L’entreprise est spécialisée dans le domaine des Travaux et Services
            viticoles depuis 2016.{' '}
          </p>

          <p>
            Tout d’abord, l’entreprise Sas GM Viti-agri est constituée d’une
            équipe qualifiée pour la réalisation des prestations viticoles. Elle
            travaille à plein temps afin d’assurer un travail sérieux et de
            qualité pour des vignerons en Gironde.{' '}
          </p>

          <p>
            Ensuite, l entreprise est équipée du matériel adéquate pour réaliser
            ces prestations. En effet, cet équipement est nécessaire pour
            assurer la réalisation et l’entretien d’une belle plantation sur un
            terroir d’exception.{' '}
          </p>
        </div>
      </div>
    </section>
  );
}
