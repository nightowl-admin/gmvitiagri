import React from 'react';
import style from './page.module.scss';

export default function Epandage() {
  return (
    <section>
      <div className={style.defaultWrapper}>
        <div className={style.txtWrapper}>
          <h1>Épandage d’engrais</h1>
          <p>
            A l’échelle d’une vie humaine, il est impossible de changer
            complètement un sol. Néanmoins, on peut optimiser son potentiel,
            grâce à une fertilisation bien gérée. Si fertiliser la vigne n’est
            pas toujours indispensable, dans certaines situations (manque de
            vigueur, faible rendement, chloroses, qualité des vins…), il est
            risqué de faire l’impasse sur cette pratique. Il est important de
            bien raisonner sa fertilisation : fertiliser ou pas, à quel moment,
            avec quel produit… Ce raisonnement doit être mené sur le moyen
            terme, la réaction de la vigne étant rarement immédiate.
          </p>
          <h3>Pourquoi fertiliser la vigne?</h3>
          <ul>
            <li>
              Parce que la fertilité du sol participe à sa stabilité, à sa
              structure et qu’elle favorise son activité microbiologique.
            </li>
            <li>
              Pour apporter les éléments nutritifs nécessaires à la vigne.
            </li>
            <li>
              Pour assurer une production de qualité et équilibrée en quantité
            </li>
            <li>
              Pour compenser les exportations de la vigne et combler les
              éventuelles carences.
            </li>
          </ul>
          <h3>Engrais, amendements, composts…</h3>
          <p>
            Les engrais (NFU 42-001) apportent à la plante des éléments
            directement utiles à leur nutrition.
          </p>
          <p>
            Les composts et les amendements organiques (NFU 44-051) ne sont pas
            des engrais. Ils sont destinés à :
          </p>
          <ul>
            <li>
              l’entretien ou à la reconstitution du stock de matières
              organiques;
            </li>
            <li>
              et/ou à l’amélioration des propriétés physiques, chimiques et
              biologiques du sol.
            </li>
          </ul>
          <p>
            Remarque : il existe aussi des amendements minéraux basiques (NFU
            44-001) : amendements calcaires, magnésiens, chaux…, rééquilibrant
            le pH notamment.
          </p>
          <p>
            Viticulture bio : Seuls les engrais et amendements d’origine
            organique et quelques uns d’origine minérale naturelle sont
            autorisés en AB.
          </p>
        </div>
      </div>
    </section>
  );
}
