import React from 'react';
import { Link } from 'react-router-dom';

import { Container, Content } from './styles';

import Header from '../../components/Header';
import Footer from '../../components/Footer';

const DesafioCandidato: React.FC = () => {
  return (
    <Container>
      <Header />

      <main>
        <Content>
          <div>
            <h2>Desafio: Apoiando os vendedores informais</h2>
            <p>
              Desafiante: Stone Pagamentos
              <br />
              Publicado em 06/02/2021
            </p>

            <p>
              <strong>
                Eu comprava roupas em SP e vendia aqui no interior de minas
                gerais em Carmo do Cajuru! Eu não posso mais ir na casa das
                minhas clientes para mostrar as roupas e está difícil vender
                pela internet! Não tem como experimentar...
              </strong>
            </p>
            <p>
              <strong>
                Como será que eu posso superar esse problema? Será que você
                consegue me ajudar a bolar um plano para entender o que as
                pessoas mais temem e que soluções eu posso dar para fazer meu
                negócio continuar funcionando?
              </strong>
            </p>
            <p>
              <strong>
                Ao se preparar para um novo cenário econômico é importante
                avaliar as novas dinâmicas sociais. Algumas dicas que podem
                ajudar no seu trabalho:
              </strong>
            </p>
            <p>
              <strong>
                Ciência da novidade: muitos clientes que sempre compravam de um
                restaurante, salão de beleza, petshop, lojas de eletrônicos,
                médicos, e vários outros negócios simplesmente não sabem da
                possibilidade de manter os hábitos de consumo sem correr riscos.
                A presença online (SEO, Anúncios, novo site, novo app) pode ser
                muito importante nesse cenário.
              </strong>
            </p>
            <p>
              <strong>
                Delivery: várias empresas não estão vendendo em razão das
                pessoas não irem até a loja comprar ou ter medo de pegar um
                produto mal higienizado. Vários negócios podem ser viáveis para
                entregar na casa das pessoas mas os empresários não estão
                sabendo oferecer e gerenciar esse serviço. UX pode apoiar em
                mostrar para os usuários que há segurança (avaliações, boas
                práticas de higiene), velocidade (quanto tempo leva de comprar
                até ter o produto) e flexibilidade para devolver (e se eu não
                gostar). Esses são apenas alguns exemplos que você pode ajudar.
              </strong>
            </p>
            <p>
              <strong>
                Atendimento remoto: muita gente pode oferecer o serviço remoto e
                nem sabe: um salão de beleza pode por exemplo mandar uma máscara
                facial e um tutorial de como usar. Um esmalte para a cliente
                pintar as unhas ou até mesmo alugar uma máquina pra raspar a
                cabeça. Médicos podem atender remotamente. Academias podem
                alugar equipamentos, podem oferecer personal trainers, fazer
                lives... enfim... vários negócios podem se reinventar para
                continuar atendendo remoto. Falta tecnologia e muitas vezes
                falta simplesmente saber que essas coisas são possíveis.
              </strong>
            </p>
            <p>
              <strong>
                Outras oportunidades: cabe a você identificar outras
                oportunidades ao entender as dores dos usuários do seu cliente.
                Peça telefones, ligue, faça video conferências, é seu trabalho
                descobrir o que pode salvar ele dessa crise! Busque focar sua
                solução em sites ou apps, mas se ver oportunidade e quiser
                ajudar no próprio serviço, fique à vontade. O site e app vai te
                ajudar no portfólio para você demonstrar habilidades de UI
                Design, mas o Design não se resume a isso! Você está aqui para
                RESOLVER PROBLEMAS - do usuário e do negócio!
              </strong>
            </p>
            <p>
              <strong>Bom trabalho!</strong>
            </p>
          </div>

          <div>
            <h4>Tempo restante</h4>
            <h4>8 dias e 12 horas</h4>
          </div>
        </Content>

        <div>
          <h4>Você será avaliado por</h4>

          <ul>
            <li>Design System</li>
            <li>Boas práticas do design</li>
          </ul>
        </div>

        <div>
          <label htmlFor="processoSeletivo">
            <input
              type="checkbox"
              name="processoSeletivo"
              id="processoSeletivo"
            />
            <strong>Quero participar do processo seletivo</strong>
          </label>
        </div>

        <section>
          <h3>Aceitar desafio?</h3>

          <div>
            <Link to="/candidato/equipes">
              <button type="button">Criar um grupo</button>
            </Link>

            <Link to="/candidato/equipes">
              <button type="button">Encontrar um grupo</button>
            </Link>

            <Link to="/candidato/desafio/confirmado">
              <button type="button">Fazer solo</button>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </Container>
  );
};

export default DesafioCandidato;
