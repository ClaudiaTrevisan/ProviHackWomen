import React from 'react';

import { Container, FieldSingle, FieldDouble } from './styles';

const Landing: React.FC = () => (
  <Container>
    <header>
      <div>Logo</div>
      <nav>Para Candidatos Para Empresas</nav>
      <button type="button">Login</button>
    </header>

    <main>
      <h2>
        Essa plataforma foi criada com o intuito de você poder se desenvolver
        amigue!
      </h2>
      <p>
        Trabalhe em equipe, receba briefings, mostre o quão incrível você é!
      </p>

      <form>
        <FieldSingle>
          <h4>Como você se chama? </h4>
          <input type="text" />
        </FieldSingle>

        <FieldDouble>
          <div>
            <h4>Qual a sua área:</h4>
            <select>
              <option value="Dados">Dados</option>
              <option value="Back-End">Back-End</option>
              <option value="Front-End">Front-End</option>
              <option value="Full-Stack">Full-Stack</option>
              <option value="Dados">Dados</option>
              <option value="UI">UI</option>
              <option value="UX">UX</option>
            </select>
          </div>

          <div>
            <h4>Linkedin (URL):</h4>
            <input type="text" />
          </div>
        </FieldDouble>

        <h4>De onde você é?</h4>
        <hr />

        <FieldDouble>
          <div>
            <h4>Estado (UF):</h4>
            <select>
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
            <h4>Sua cidade:</h4>
            <input type="text" />
          </div>
        </FieldDouble>

        <h4>Seu Login</h4>
        <hr />

        <FieldSingle>
          <h4>Seu melhor e-mail:</h4>
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
