import React from 'react';
import style from './Check.module.scss';

export default function Check() {
  return (
    <section>
      <div className={style.checkWrapper}>
        <div className={style.txtWrapper}>
          <p>
            Le savoir et l’expérience d’une bonne entreprise sont une carte en
            plus dans votre jeu…. Au cours des saisons passées, nous avons
            apporté notre aide aux viticulteurs à la résolution de phénomènes
            indésirables causés soit par une météo capricieuse, soit par un
            choix inadapté de l’architecture végétative ou par un choix erroné
            des périodes d’exécutions des travaux.
          </p>

          <p>
            Plus que de les régler, nous pouvons en anticiper une partie si
            notre avis est sollicité.
          </p>
        </div>
      </div>
    </section>
  );
}
