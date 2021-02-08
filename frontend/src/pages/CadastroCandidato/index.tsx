/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, FieldSingle, FieldDouble } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useForm from '../../hooks/useForm.js';
import { signupCandidate } from '../../services/candidate.js';

const Landing: React.FC = () => {
  const history = useHistory();
  const [pass, setPass] = useState("");
  const {form, handleInputChange, resetState} = useForm({
    name: "",
    area: "",
    social: "",
    uf: "",
    city: "",
    email: "",
    password: ""
  });

  const onClickSignup = (event: any) =>{
    event.preventDefault();
    signupCandidate(form, history);
    resetState();
  };

  const verifyPassword = (event: any) =>{
    event.preventDefault();
    setPass(event.target.value);
  };

  const verify = () =>{
    if(pass !== form.password){
      alert("Senhas não são iguais");
    }
    resetState()
  };


  return (
    <Container>
      <Header />

      <main>
        <h2>
          Essa plataforma foi criada para te ajudar a se desenvolver, amigue!
        </h2>
        <p>
          Trabalhe em equipe, resolva desafios e mostre todo o seu potencial!
        </p>

        <form>
          <FieldSingle>
            <h4>Como você se chama?</h4>
            <input 
              type="text" 
              value={form.name}
              name="name"
              onChange={handleInputChange}
              required
            />
          </FieldSingle>

          <FieldDouble>
            <div>
              <h4>Qual a sua área</h4>
              <select
                value={form.area}
                name="area"
                onChange={handleInputChange}
                required
              >
                <option value="" disabled selected>
                  Selecionar...
                </option>
                <option value="Dados">Dados</option>
                <option value="Back-End">Back-End</option>
                <option value="Front-End">Front-End</option>
                <option value="Full-Stack">Full-Stack</option>
                <option value="Dados">Produtos</option>
                <option value="UI">UI</option>
                <option value="UX">UX</option>
              </select>
            </div>

            <div>
              <h4>Linkedin (URL)</h4>
              <input 
                type="url"
                value={form.social}
                name="social"
                onChange={handleInputChange}
                required 
              />
            </div>
          </FieldDouble>

          <FieldDouble>
            <div>
              <h4>Estado (UF)</h4>
              <select
                value={form.uf}
                name="uf"
                onChange={handleInputChange}
                required
              >
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
              <h4>Sua cidade</h4>
              <input 
                type="text"
                value={form.city}
                name="city"
                onChange={handleInputChange}
                required
              />

            </div>
          </FieldDouble>

          <FieldSingle>
            <h4>Seu melhor e-mail</h4>
            <input 
              type="email" 
              value={form.email}
              name="email"
              onChange={handleInputChange}
              required
            />
          </FieldSingle>

          <FieldDouble>
            <div>
              <h4>Senha</h4>
              <input 
                type="password" 
                value={form.password}
                name="password"
                onChange={handleInputChange}
                required
              />
            </div>

            <div>
              <h4>Confirme sua senha</h4>
              <input 
                type="password" 
                value={pass}
                name="pass"
                onChange={verifyPassword}
                onBlur={verify}
                required
              />
            </div>
          </FieldDouble>

          <FieldSingle>
            <label htmlFor="termos">
              <input type="checkbox" name="termos" id="termos" />
              Ao se cadastrar, você aceita nossos&nbsp;
              <Link to="/termos-de-uso">Termos de Uso</Link>
            </label>
          </FieldSingle>

          <Link to="/candidato/perfil">
            <button type="submit" onClick={onClickSignup}>Vamos lá!</button>
          </Link>
        </form>
      </main>

      <Footer />
    </Container>
  );
};

export default Landing;
