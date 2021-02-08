/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable prettier/prettier */
import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { Container, FieldSingle, FieldDouble } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';
import useForm from '../../hooks/useForm.js';
import { signupCompany } from '../../services/company.js';

const Landing: React.FC = () => {
  const history = useHistory()
  const {form, handleInputChange, resetState} = useForm({
    recruiter: "",
    email: "",
    name: "",
    uf: "",
    city: "",
    password: ""
  });
  const [pass, setPass] = useState("");
  
  const onClickSignup = (event: any) =>{
    event.preventDefault();
    signupCompany(form, history);
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
  
  return(
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
            <h4>Nome do Recrutador</h4>
            <input 
              type="text"
              value={form.recruiter}
              name="recruiter"
              onChange={handleInputChange}
              required
            />
          </FieldSingle>
  
          <FieldSingle>
            <h4>Nome do Empresa</h4>
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
            <h4>E-mail corporativo</h4>
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
  
          <Link to="/recrutador/perfil">
            <button type="submit" onClick={onClickSignup}>Vamos lá!</button>
          </Link>
        </form>
      </main>
  
      <Footer />
    </Container>
);
}

export default Landing;
