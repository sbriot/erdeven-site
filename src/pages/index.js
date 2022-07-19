import React from 'react';
import Layout from '../components/Layout';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faQuoteLeft, faQuoteRight } from '@fortawesome/free-solid-svg-icons';
import pic1 from '../assets/images/pic01.jpg';
import pic2 from '../assets/images/pic02.jpg';
import pic3 from '../assets/images/pic03.jpg';
import pic5 from '../assets/images/la-belle-iloise-conserverie.png';
import pic4 from '../assets/images/la-trinitaine-biscuiterie.jpg';
import pic8 from '../assets/images/sublimons-logo.png';
import config from '../../config';

const IndexPage = () => (
  <Layout>
    <section id="banner">
      <div className="inner">
        <h2>{config.heading} - <FontAwesomeIcon icon={faQuoteLeft}  size="xs" /> Aire d' O'ven   <FontAwesomeIcon icon={faQuoteRight} size="xs" /></h2>
        <p>{config.subHeading}</p>
      </div>
    </section>

    <section id="wrapper">
      <section id="one" className="wrapper spotlight style1">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic1} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Initiation</h2>
            <p>
            Cette première étape de l'apprentissage consiste
            en une familiarisation de l'enfant avec l'eau.
            Nous abordons les premières bases en fonction du vécu aquatique:
            la respiration, le déplacement ventral et dorsal avec matériel ainsi que les immersions.
            La priorité est de donner confiance à l'enfant afin qu'il développe son aisance aquatique.
            </p>

          </div>
        </div>
      </section>

      <section id="two" className="wrapper alt spotlight style2">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic2} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Apprentissage</h2>
            <p>
              Quand l'enfant a acquis la confiance nécessaire, nous transmettons
              les premiers éléments techniques de nage. Dos crawlé, brasse et crawl sont privilégiés.
               Avec du support matériel, l'enfant apprend et assimile les mouvements propices.
               Nous cherchons à lui donner la technique adaptée à son âge.
            </p>

          </div>
        </div>
      </section>

      <section id="three" className="wrapper spotlight style3">
        <div className="inner">
          <a href="/#" className="image">
            <img src={pic3} alt="" />
          </a>
          <div className="content">
            <h2 className="major">Perfectionnement</h2>
            <p>
            À ce stade là, l'enfant est autonome dans l'eau et nous
            approfondissons ses connaissances techniques dans les 4 nages:
            dos crawlé, brasse, crawl et papillon. Il peut s'agir d'une amélioration
            technique de la nage (mouvements et respiration) mais aussi de la découverte d'une
            nouvelle nage (papillon par exemple).

            </p>

          </div>
        </div>
      </section>

      <section id="three" className="wrapper alt spotlight style2">
        <div className="inner">
        
        {/* <a href="" className="image"> <img src={pic4} alt="" ><a>*/}

          <div className="content">
           {/*<h2 className="major">Vincent</h2>*/} 
            <p>
            Encadré par un maître-nageur-sauveteur diplômé d'état.<br/>
            Formateur des Brevets Professionnels des Activités de la Natation.
            </p>

          </div>
        </div>
      </section>

      <section id="four" className="wrapper alt style1">
        <div className="inner">
          <h2 className="major">Infos Piscine Aire d' O'ven</h2>
          <h4>Horaires</h4>
          <ul className="alt">
            <li>Ouvert non-stop du lundi au vendredi de 9H00 à 17H00 et le samedi de 9h00 à 13h00</li>
          </ul>
          
          <h4>Tarifs 2021</h4>
          <div className="table-wrapper">
            <table className="alt">
              <thead>
                <tr>
                  <th>Description</th>
                  <th>Prix</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Séance unique</td>
                  <td>17 €</td>
                </tr>
                <tr>
                  <td>Stage de 6 leçons</td>
                  <td>100 €</td>
                </tr>
                <tr>
                  <td> Stage de 10 leçons</td>
                  <td>150 €</td>
                </tr>
                <tr>
                  <td>Stage de 15 leçons </td>
                  <td>190 €</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p>

          Située à Erdeven, entre les commerces et la plage, sur le boulevard de l’Atlantique,
          l’école de nat’ propose des leçons individualisées de natation. Les enfants sont deux
          maximum par cours. Une méthode qui privilégie la familiarisation avec l'eau et
          l'apprentissage des techniques de nage.
          </p>
          <h4>Erdeven Nat'</h4>
          <blockquote>
          Les leçons de natations sont dispensés par un maître-nageur diplômé d'état offrant à vos enfants des progrès visibles et des résultats garantis.
          Une séance dure 20 minutes, la durée idéale pour une concentration de qualité et un engagement moteur optimal.
          L'Ecole de Nat  s'appuie sur 3 niveaux d'enseignement: l'initiation, l'apprentissage et le perfectionnement.
          </blockquote>

        </div>
        
        </section>
    
        <section id="three" className="wrapper alt style3">
          <div className="inner">
            <h2 className="major">Partenaires</h2>
            <section class="features">
              <article>
                <a href="https://www.latrinitaine.com/" class="image">
                <img src={pic4} alt=""/>
                  </a>
                <h3 class="major">Biscuiterie la Trinitaine</h3>
                <a href="https://www.latrinitaine.com/" class="special">Découvrir</a>
              </article>

              <article>
                <a href="https://www.sublimons.com/" class="image">
                <img src={pic8} alt=""/>
                  </a>
                <h3 class="major">Sublimons</h3>
                <a href="https://www.sublimons.com/" class="special">Découvrir</a>
              </article>

              <article>
                <a href="https://www.labelleiloise.fr/fr/" class="image">
                  <img src={pic5} alt=""/>
                  </a>
                <h3 class="major">Conserverie la belle-iloise</h3>
                <a href="https://www.labelleiloise.fr/fr/" class="special">Découvrir</a>
              </article>
            </section>
          </div>
        </section>
      </section>
  </Layout>
);

export default IndexPage;
