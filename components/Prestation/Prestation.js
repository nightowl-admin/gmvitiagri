import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import style from './Prestation.module.scss';
import separator from '../../assets/separator.png';
import arrachageHome from '../../assets/arrachageHome.jpg';
import terrassementHome from '../../assets/terrassementHome.jpg';
import preparationHome from '../../assets/preparationHome.jpg';
import effeuillageHome from '../../assets/effeuillageHome.jpg';
import epandageHome from '../../assets/epandageHome.jpg';
import epareuseHome from '../../assets/epareuseHome.jpg';
import loader from '../../assets/icones/loader.png';
import excavator from '../../assets/icones/excavator.png';
import rollertractor from '../../assets/icones/roller-tractor.png';
import grapes from '../../assets/icones/grapes.png';
import fertilizer from '../../assets/icones/fertilizer.png';
import grass from '../../assets/icones/grass.png';

export default function Prestation() {
  return (
    <section>
      <div className={style.prestationWrapper}>
        <div className={style.lineWrapper}>
          <div className={style['imgContainer'] + ' ' + style['imgleft']}>
            <Image
              src={arrachageHome}
              layout="responsive"
              alt="arrachage vignes"
            />
          </div>
          <div className={style['txtContainer'] + ' ' + style['txtright']}>
            <Link href="/arrachage" passHref>
              <a className={style.title}>
                <div className={style.iconWrapper}>
                  <Image
                    src={loader}
                    layout="responsive"
                    alt="arrachage vignes"
                  />
                </div>
                <h2>Arrachage de vignes</h2>
              </a>
            </Link>
            <p>
              Après plusieurs décennies de bons et loyaux services, il est temps
              de tourner la page pour se projeter dans l’avenir. L’arrachage
              d’une parcelle de vigne est une décision mûrement réfléchie qui
              suscite le débat, entre critères objectifs et sentimentalisme.
            </p>
            <p>
              Plusieurs raisons à ça:
              <br />
              On arrachage une vigne pour répondre à des objectifs qualitatifs,
              pour faire face à une réalité économique, ou pour s’adapter à
              l’évolution du marché.
            </p>
            <p>
              L’arrachage des vignes, « s’il est pensé, accompagné, organisé,
              peut être utile à l’ensemble de la filière », a déclaré Bernard
              Farges, selon les informations de l’AFP.
            </p>
          </div>
        </div>

       

        <div className={style['lineWrapper'] + ' ' + style['reverse']}>
          <div className={style['imgContainer'] + ' ' + style['imgright']}>
            <Image
              src={terrassementHome}
              layout="responsive"
              alt="terrassements de vignobles"
            />
          </div>
          <div className={style['txtContainer'] + ' ' + style['txtleft']}>
            <Link href="/terrassement" passHref>
            <a className={style.title}>
                <div className={style.iconWrapper}>
                  <Image
                    src={excavator}
                    layout="responsive"
                    alt="terrassements de vignobles"
                  />
                </div>
                <h2>terrassements de vignobles </h2>
              </a>
            </Link>
            <p>
              L’entreprise est aussi spécialisée dans les terrassements de
              vignobles, une activité qui consiste à préparer les parcelles de
              vigne en effectuant des travaux de nivellement, de dérochage,
              d’arrachage et de drainage afin d’éviter le ruissellement.
            </p>
            <p>
              Notre parc matériel nous permet de répondre à l’ensemble de vos
              besoins pour vos terrassements de voirie, de bassins de rétention
              et de terrassement en pleine masse.
            </p>
            <p>
              Nous sommes à votre service pour vous conseiller, pour étudier vos
              projets, pour vous accompagner dans leur développement.
            </p>
          </div>
        </div>
       
        <div className={style.lineWrapper}>
          <div className={style['imgContainer'] + ' ' + style['imgleft']}>
            <Image
              src={preparationHome}
              layout="responsive"
              alt="préparation de sol"
            />
          </div>
          <div className={style['txtContainer'] + ' ' + style['txtright']}>
            <Link href="/preparation-sol" passHref>
            <a className={style.title}>
                <div className={style.iconWrapper}>
                  <Image
                    src={rollertractor}
                    layout="responsive"
                    alt="preparation-sol"
                  />
                </div>
                <h2>Préparation de sol</h2>
              </a>
            </Link>

            <p>
              La préparation de sol intervient pour que votre terre soit la plus
              fertile possible.
            </p>
            <p>
              Afin de réaliser des prestations efficaces, l´enjambeur doit être
              équipé de différents matériels. Nous disposons de ce matériel qui
              est manipulé par une équipe qualifiée.
            </p>
            <p>
              Le Travail du sol est important pour l’entretien du vignoble. Il
              se réalise mécaniquement avec un enjambeur. Afin de réaliser des
              prestations efficaces, cet enjambeur doit être équipé de
              différents matériels.
            </p>
          </div>
        </div>
       
        <div className={style['lineWrapper'] + ' ' + style['reverse']}>
          <div className={style['imgContainer'] + ' ' + style['imgright']}>
            <Image
              src={effeuillageHome}
              layout="responsive"
              alt="effeuillage de la vigne"
            />
          </div>
          <div className={style['txtContainer'] + ' ' + style['txtleft']}>
            <Link href="/effeuillage-vendanges" passHref>
            <a className={style.title}>
                <div className={style.iconWrapper}>
                  <Image
                    src={grapes}
                    layout="responsive"
                    alt="effeuillage de la vigne"
                  />
                </div>
                <h2> Effeuillage / Vendanges </h2>
              </a>
            </Link>

            <p>L´effeuillage de la vigne n´a plus à faire ses preuves.</p>
            <p>
              D´abord, le fait d´enlever des feuilles aère les grappes, donc
              limite les risques de développement de botrytis et augmente
              l´efficacité des traitements phytosanitaires qui atteignent plus
              aisément leur cible.
            </p>
            <p>
              Ensuite, il améliore l´exposition des grappes au soleil et donc la
              qualité des jus. Enfin, la diminution du feuillage facilite les
              travaux à la vigne et notamment la récolte.
            </p>
            <p>
              Pour vos vendanges mécaniques, nous fournissons des solutions
              adaptées pour les vignes grâce à un parc de machines à vendanger
              récentes et modernes
            </p>
          </div>
        </div>
       
        <div className={style.lineWrapper}>
          <div className={style['imgContainer'] + ' ' + style['imgleft']}>
            <Image
              src={epandageHome}
              layout="responsive"
              alt="Fertilisation des vignes"
            />
          </div>
          <div className={style['txtContainer'] + ' ' + style['txtright']}>
            <Link href="/epandage" passHref>
            <a className={style.title}>
                <div className={style.iconWrapper}>
                  <Image
                    src={fertilizer}
                    layout="responsive"
                    alt="Fertilisation des vignes"
                  />
                </div>
                <h2>Épandage d’engrais</h2>
              </a>
            </Link>

            <p>
              La Fertilisation des vignes vise à assurer une nutrition régulière
              de la vigne en éléments minéraux et du sol en matière organique.
            </p>
            <p>
              En effet, la fertilité du sol participe à sa stabilité, à sa
              structure, en favorisant son activité microbiologique. Donc,
              apporter les éléments nutritifs nécessaires à la vigne permet
              d’assurer une production de qualité et équilibrée en quantité.
            </p>
            <p>
              Ainsi, l’entreprise Sarl GM VITIAGRI est équipée et qualifiée pour
              effectuer ces prestations. Nous réalisons l’épandage
              d’engrais(billes/compost/fumier).
            </p>
          </div>
        </div>
       
        <div className={style['lineWrapper'] + ' ' + style['reverse']}>
          <div className={style['imgContainer'] + ' ' + style['imgright']}>
            <Image
              src={epareuseHome}
              layout="responsive"
              alt="Entretenir un fossé"
            />
          </div>
          <div className={style['txtContainer'] + ' ' + style['txtleft']}>
          <div className={style.title}>
                <div className={style.iconWrapper}>
                  <Image
                    src={grass}
                    layout="responsive"
                    alt="Entretenir un fossé"
                  />
                </div>
            <h2>Epareuse (entretien des fossés)</h2>
            </div>
            <p>
              Entretenir un fossé c’est avant tout lui permettre de remplir sa
              fonction principale : favoriser le libre écoulement de l’eau, pour
              irriguer les terres et éviter les inondations.
            </p>
            <p>
              Grâce à l’utilisation d’une épareuse sur tracteur, les végétaux
              broyés finement ne gênent en rien l’écoulement de l’eau.
            </p>
            <p>
              L’entretien se fait avant fin mars et après début juillet,
              périodes pendant lesquelles la majorité des espèces animales et
              végétales a accompli son cycle de reproduction.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
