import React from 'react';

import {
  Container,
  CardTeamContainer,
  CardHighlightChallengeContainer,
  CardChallengeContainer,
} from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

import teamCardIcon from '../../assets/team-card-icon.svg';
import highlightChallengeCardIcon from '../../assets/highlight-challenge-card-icon.svg';
import challengeCardIcon from '../../assets/challenge-card-icon.svg';
import whiteArrowIcon from '../../assets/white-arrow-icon.svg';
import greenArrowIcon from '../../assets/green-arrow-icon.svg';

const DashboardCandidato: React.FC = () => (
  <Container>
    <Header />

    <main>
      <h2>Olá Ellie! :)</h2>

      <section className="ornament">
        <h4>Tem equipe procurando por UI Designer</h4>

        <CardTeamContainer>
          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Queens</h4>
          </button>

          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Kings</h4>
          </button>

          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Queens</h4>
          </button>

          <button type="button">
            <img src={teamCardIcon} alt="" />
            <h4>Design Kings</h4>
          </button>
        </CardTeamContainer>
      </section>

      <section className="ornament">
        <h3>Destaques da Semana</h3>

        <CardHighlightChallengeContainer>
          <button type="button">
            <div>
              <img src={highlightChallengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar os vendendores informais?</h4>
            <img src={whiteArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={highlightChallengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar os vendendores informais?</h4>
            <img src={whiteArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={highlightChallengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar os vendendores informais?</h4>
            <img src={whiteArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={highlightChallengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar os vendendores informais?</h4>
            <img src={whiteArrowIcon} alt="Acessar desafio completo" />
          </button>
        </CardHighlightChallengeContainer>

        <button type="button" className="more">
          Ver mais
        </button>
      </section>

      <section>
        <h3>Recomendadíssimos para você</h3>

        <CardChallengeContainer>
          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar o sistema de aprendizado EAD?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar o sistema de aprendizado EAD?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar o sistema de aprendizado EAD?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar o sistema de aprendizado EAD?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>
        </CardChallengeContainer>
      </section>

      <section>
        <h3>Para você que quer se desafiar ainda mais</h3>

        <CardChallengeContainer>
          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar o sistema de aprendizado EAD?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar o sistema de aprendizado EAD?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar o sistema de aprendizado EAD?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar o sistema de aprendizado EAD?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar os vendendores informais?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar os vendendores informais?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>

          <button type="button">
            <div>
              <img src={challengeCardIcon} alt="" />
              <p>UI Design</p>
            </div>
            <h4>Como auxiliar os vendendores informais?</h4>
            <img src={greenArrowIcon} alt="Acessar desafio completo" />
          </button>
        </CardChallengeContainer>

        <button type="button" className="more">
          Ver mais
        </button>
      </section>
    </main>

    <Footer />
  </Container>
);

export default DashboardCandidato;
