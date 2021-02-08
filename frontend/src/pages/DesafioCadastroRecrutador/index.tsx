import React from 'react';
import { Link } from 'react-router-dom';
import { Container, FieldSingle, FieldDouble } from './styles';

import HeaderDesafioCadastroRecrutador from '../../components/HeaderDesafioCadastroRecrutador';
import Footer from '../../components/Footer';
import closeIcon from '../../assets/mini-close-icon.svg';

const RecruiterChallenge: React.FC = () => {
  return (
    <Container>
      <HeaderDesafioCadastroRecrutador />
      <main>
        <h2>Publique seu desafio</h2>
        <p>
          Nossa plataforma permite que você encontre alguém com o perfil e
          competências técnicas para integrar a sua equipe, o match perfeito!
        </p>

        <form>
          <FieldSingle>
            <h4>Dê um nome ao seu desafio:</h4>
            <input type="text" />
          </FieldSingle>

          <FieldDouble>
            <div>
              <h4>A que área se destina:</h4>
              <select>
                <option value="" disabled selected>
                  Selecionar...
                </option>
                <option value="Front-End">Front-End</option>
                <option value="Back-End">Back-End</option>
              </select>
            </div>

            <div>
              <h4>Tempo de Duração (dias):</h4>
              <select>
                <option value="" disabled selected>
                  Selecionar...
                </option>
                <option value="5">5 dias</option>
                <option value="15">15 dias</option>
              </select>
            </div>
          </FieldDouble>

          <FieldSingle>
            <h4>Quais serão os critérios de avaliação?</h4>
            <input type="text" />
            <div className="criteria-container">
              <h4>
                <img src={closeIcon} alt="Remover" />
                Design System
              </h4>
              <h4>
                <img src={closeIcon} alt="Remover" />
                Boas práticas de Design
              </h4>
            </div>
          </FieldSingle>

          <FieldSingle>
            <h4>Descreva o seu desafio:</h4>
            <textarea rows={15} cols={75} />
          </FieldSingle>

          <Link to="/">
            <button type="button">Publicar</button>
          </Link>
        </form>
      </main>
      <Footer />
    </Container>
  );
};

export default RecruiterChallenge;
