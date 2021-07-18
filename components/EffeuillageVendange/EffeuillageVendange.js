import React from 'react';
import style from './page.module.scss';

export default function EffeuillageVendange() {
  return (
    <section>
      <div className={style.defaultWrapper}>
        <div className={style.txtWrapper}>
          <h1>Travaux mécaniques dans les vignes.</h1>
          <h3>Effeuillage précoce</h3>
          <p>
            L’effeuillage précoce de la zone des grappes à pour effet de créer
            un micro climat moins favorable au développement des maladies. Puis,
            il facilite le positionnement des traitements dirigés sur grappes.
          </p>
          <p>
            En effet, l’effeuillage précoce est utile pour améliorer l’état
            sanitaire de la récolte. Une intervention optimale permet donc la
            réduction de pourriture grise et oïdium jusqu’aux vendanges. Un
            effeuillage doit être réalisé sur une face, du coté du moindre
            ensoleillement. Ensuite, il doit se faire du stade nouaison au stade
            grain de pois. Le relevage et le palissage devront bien évidement
            être terminés.
          </p>
          <h3>Effeuillage pendant les vendanges</h3>
          <p>
            L’effeuillage à la vendange est utile pour diminuer le temps de
            cueillette.
          </p>
          <p>
            Il est réalisé sur deux faces et seulement quelques jours avant la
            récolte. Effectivement, il ne doit pas être fait trop tôt pour ne
            pas compromettre la qualité de la récolte.
          </p>
          <h3>Egrainage dans les vignes</h3>
          <p>
            L’égrainage (ou égrenage) permet de détacher les grains de la
            grappe.
          </p>
          <p>
            Les machines, munies de batteurs, font tomber les grains sur un
            tapis mobile ; un ventilateur élimine la plus grande partie des
            feuilles. La brutalité de l`action sur le raisin n`est pas, a
            priori, favorable à la qualité, surtout pour les vins blancs : les
            crus de grande réputation (sauternes, bourgogne, champagne en
            particulier) seront les derniers à faire appel à ce procédé de
            récolte, malgré des progrès considérables. Mais parfois, la machine
            permet d`aller plus vite et d`éviter que le raisin ne pourrisse sur
            pied.
          </p>
          <p>
            L’égrainage doit se faire après la période des vendanges sur des
            raisins mûrs.
          </p>
        </div>
      </div>
    </section>
  );
}
