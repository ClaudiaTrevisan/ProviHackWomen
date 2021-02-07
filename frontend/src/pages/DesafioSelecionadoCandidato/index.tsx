import React from 'react';

import { Container } from './styles';

const Challenge: React.FC = () => {
  return (
    <Container>
      <main>
        <div className="content">
          <div className="left-info">
            <h1>
              Como ajudar profissionais da área de tecnologia a ingressarem no
              mercado de trabalho?
            </h1>

            <p>Desafiante: Stone Pagamentos</p>
            <span>Publicado em 06/02/2021</span>

            <h5>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
              pretium elit quis leo ultricies, eget viverra urna suscipit. In
              euismod bibendum pretium. Integer justo massa, mattis at urna
              eget, iaculis iaculis ante. Mauris vitae mollis lectus. Aliquam
              tristique, mi ut finibus ullamcorper, sem ante mattis leo, non
              dapibus ipsum ligula at massa. Duis quis consequat elit. Aliquam
              viverra est vitae tortor ultricies, ut malesuada augue ornare. Sed
              vitae massa vulputate, sodales ipsum vel, interdum arcu. Donec
              pulvinar imperdiet auctor. Sed magna risus, finibus vitae ex in,
              tincidunt pellentesque nulla. Pellentesque sit amet augue sit amet
              metus consectetur ornare non ac lacus. Pellentesque habitant morbi
              tristique senectus et netus et malesuada fames ac turpis egestas.
              Donec venenatis dui ac sagittis semper. Vestibulum maximus nisi
              vitae tempus condimentum. Nullam imperdiet neque quis dignissim
              faucibus. Pellentesque quis velit ullamcorper nunc malesuada
              lacinia. Ut non velit non ipsum bibendum pulvinar. Praesent ex
              libero, gravida eu tincidunt et, sollicitudin a tellus. Ut non
              elementum ex. Maecenas sodales, magna ut porttitor blandit, odio
              ligula ornare sem, at ultrices nunc leo quis nisi. Aliquam
              convallis auctor ante, nec tincidunt velit eleifend sed.
              Suspendisse id neque diam. Sed ex nibh, commodo ut faucibus at,
              lobortis vitae enim. In.
            </h5>
          </div>

          <div className="right-info">
            <p>Esse desafio acaba em</p>
            <p>06/03/2021 às 23h59</p>
          </div>
        </div>
      </main>
    </Container>
  );
};

export default Challenge;
