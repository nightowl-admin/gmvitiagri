import React from 'react';
import style from './page.module.scss';

export default function Arrachage() {
  return (
    <section>
      <div className={style.defaultWrapper}>
        <div className={style.txtWrapper}>
          <h1>Arrachage de vignes</h1>
          <h3>Dans quel cas arracher vos vignes ?</h3>
          <p>
            Un vigneron ne décide pas d’arracher sa parcelle juste pour le
            plaisir. Bien qu’un pied de vigne puisse vivre plus de 100 ans, la
            rotation de vignes devrait avoir lieu tous les 35 ans.
            Malheureusement, le manque de moyens empêche les viticulteurs de
            réaliser cette opération onéreuse. Plusieurs cas peuvent justifier
            d’arracher des vignes :
          </p>
          <ul>
            <li>
              Une mauvaise adaptation à la production souhaitée : clone, cépage,
              porte-greffe inadapté, tendance de consommation changeante…
            </li>
            <li>
              La parcelle est mal exploitée : en termes de densité de
              plantation, d’orientation de plantation, d’utilisation des outils,
              de dangerosité de la pente…
            </li>
            <li>
              Le vigneron fait face à une mortalité importante, des plants
              atrophiés ou des retards de développement entraînant un faible
              rendement. Cela peut être expliqué par une maladie comme le
              black-rot. Les pieds infectés contaminent alors le sol et il est
              nécessaire d’arracher pour stopper l’infection.
            </li>
          </ul>
          <h3>Les précautions à prendre avant l’arrachage des vignes</h3>
          <p>
            La première précaution concerne la loi. Il est obligatoire de
            demander une autorisation auprès de la douane avant d’arracher ou de
            planter plusieurs plants de vignes sur le service en ligne PARCEL.
            L’objectif des autorités est de protéger le patrimoine vivant
            français.
          </p>
          <p>
            Pour l’arrachage à proprement parler, nous vous conseillons de
            débarrasser la parcelle de tout le palissage.
          </p>
          <h3>Comment procéder à l’arrachage des pieds de vignes ?</h3>
          <p>
            Le but de l’arrachage des vignes est d’éliminer le maximum du pied,
            du tronc jusqu’aux racines. L’arrachage doit être réalisé sur un sol
            ni trop humide, ni trop sec afin que la terre s’effrite et ne forme
            pas de blocs solides.
          </p>
          <p>
            Il s’agit d’une opération lourde, traumatisante pour le sol qui sera
            retourné à l’aide d’une pelleteuse munie d’un peigne. La profondeur
            de travail est à déterminer en fonction du type de sol, de sous-sol
            et de leur nature.
          </p>
          <p>
            L’Homme est en revanche indispensable pour récupérer tous les
            déchets végétaux devant être évacués de la parcelle.
          </p>
          <h3>L’importance de l’analyse de sol après l’arrachage des vignes</h3>
          <p>
            Il est obligatoire de brûler les pieds de vignes arrachés afin de
            détruire les champignons, les insectes ou les virus nuisibles.
          </p>
          <p>
            Par ailleurs, le sol abrite des petits vers, les nématodes qui
            peuvent être porteurs de virus pour la vigne. Si la racine est
            maintenue en vie après l’arrachage, le virus peut persister par
            l’intermédiaire de ces micro-organismes. L’idéal est donc de laisser
            le sol en jachère pendant au minimum 1 an avant replantation.
          </p>
          <p>
            L’arrachage est le moment parfait pour récolter des échantillons de
            sols afin de l’analyser :
          </p>
          <ul>
            <li>
              Physiquement : granulométrie, calcul de la réserve en eau utile…
            </li>
            <li>
              Chimiquement : taux de matière organique, C/N, pH, C.E.C,
              principaux éléments présents (azote, phosphore, potassium,
              calcaire, magnésium, cations…)
            </li>
            <li>
              Biologiquement : niveau de la biomasse, diversité, suivi des
              populations nématodes porteurs de virus…
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
}
