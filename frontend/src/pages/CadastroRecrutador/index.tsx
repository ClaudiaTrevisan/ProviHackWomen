import React from 'react';

import { Container, FieldSingle, FieldDouble } from './styles';

import Header from '../../components/Header';

const Landing: React.FC = () => (
  <Container>
    <Header />

    <main>
      <h2>Você está buscando alguém incrível para integrar o seu time?</h2>
      <p>
        Nossa plataforma permite que você encontre alguém com o perfil e
        competências técnicas para integrar a sua equipe, o match perfeito!
      </p>

      <form>
        <FieldSingle>
          <h4>Qual seu nome?</h4>
          <input type="text" />
        </FieldSingle>

        <FieldSingle>
          <h4>Nome da Empresa:</h4>
          <input type="text" />
        </FieldSingle>

        <h4>Onde estão localizados?</h4>
        <hr />

        <FieldDouble>
          <div>
            <h4>Estado (UF):</h4>
            <select>
              <option value="" disabled selected>
                Selecionar...
              </option>
              <option value="AC">AC</option>
              <option value="AL">AL</option>
              <option value="AP">AP</option>
              <option value="AM">AM</option>
              <option value="BA">BA</option>
              <option value="CE">CE</option>
              <option value="DF">DF</option>
              <option value="ES">ES</option>
              <option value="GO">GO</option>
              <option value="MA">MA</option>
              <option value="MT">MT</option>
              <option value="MS">MS</option>
              <option value="MG">MG</option>
              <option value="PA">PA</option>
              <option value="PB">PB</option>
              <option value="PR">PR</option>
              <option value="PE">PE</option>
              <option value="PI">PI</option>
              <option value="RJ">RJ</option>
              <option value="RN">RN</option>
              <option value="RS">RS</option>
              <option value="RO">RO</option>
              <option value="RR">RR</option>
              <option value="SC">SC</option>
              <option value="SP">SP</option>
              <option value="SE">SE</option>
              <option value="TO">TO</option>
            </select>
          </div>

          <div>
            <h4>Digite a cidade:</h4>
            <input type="text" />
          </div>
        </FieldDouble>

        <h4>Seu Login</h4>
        <hr />

        <FieldSingle>
          <h4>E-mail corporativo:</h4>
          <input type="email" />
        </FieldSingle>

        <FieldDouble>
          <div>
            <h4>Senha:</h4>
            <input type="password" />
          </div>

          <div>
            <h4>Confirme a senha:</h4>
            <input type="password" />
          </div>
        </FieldDouble>

        <button type="submit">Cadastrar</button>
      </form>
    </main>

    <footer>
      Feito por mulheres incríves ❤
      <br />
      2021. Todos os direitos reservados.
      <br />
      redes sociais
    </footer>
  </Container>
);

export default Landing;
