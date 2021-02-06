import styled from 'styled-components';
import backgroundImg from '../../assets/cadastro-candidato-background.svg';

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  main {
    background: url(${backgroundImg}) no-repeat right 7% center;
    background-attachment: fixed;
  }

  h2 {
    max-width: 870px;
    padding-bottom: 30px;
    color: #397d8f;
  }

  form {
    max-width: 670px;
    padding-top: 50px;

    h4 {
      padding-left: 10px;
    }

    hr {
      margin-top: 10px;
      margin-bottom: 20px;
      border: #4f4f4f solid 1px;
    }

    input,
    select {
      width: 100%;
      border: #397d8f solid 3px;
      border-radius: 20px;
      margin-top: 10px;
      padding: 10px 20px 12px;
    }

    button {
      background: #44c3e3;
      width: 100%;
      height: 60px;
      border-radius: 20px;
      color: #ffffff;

      &:hover {
        background: #489fb5;
      }
    }
  }
`;

export const FieldSingle = styled.div`
  margin-bottom: 40px;
`;

export const FieldDouble = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;

  div {
    flex: 50%;
  }
`;
