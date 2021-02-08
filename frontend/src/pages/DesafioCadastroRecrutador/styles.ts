import styled from 'styled-components';
import backgroundImg from '../../assets/desafio-cadastro-background.svg';

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background: url(${backgroundImg}) no-repeat right 7% center;

  main {
    max-width: 750px;
  }

  h2 {
    padding-bottom: 30px;
    color: #d99230;
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

    input:not([type='checkbox']),
    select {
      background-color: #fbf9f8;
      width: 100%;
      border: #d99230 solid 3px;
      border-radius: 20px;
      margin-top: 10px;
      padding: 10px 20px 12px;
    }

    label {
      display: flex;
      align-items: center;

      a {
        color: #489fb5;
        text-decoration: underline;

        &:hover {
          color: #397d8f;
        }
      }
    }

    input[type='checkbox'] {
      width: 24px;
      height: 24px;
      margin-left: 15px;
      margin-right: 10px;
      font-size: 16px;
    }

    button {
      background: #ffa62b;
      width: 100%;
      height: 60px;
      border-radius: 20px;
      font-size: 20px;
      font-weight: 700;
      color: #333333;

      &:hover {
        background: #d99230;
      }
    }

    textarea {
      resize: none;
      border: 3px solid #d99230;
      border-radius: 20px;
      margin-top: 10px;
      padding: 10px 20px 12px;
    }
  }
`;

export const FieldSingle = styled.div`
  margin-bottom: 40px;

  .criteria-container {
    display: flex;
    gap: 30px;
    padding-top: 10px;

    img {
      padding-right: 10px;
    }

    h4 {
      background-color: #ffa62b;
      border-radius: 20px;

      padding: 8px 20px 8px 8px;
    }
  }
`;

export const FieldDouble = styled.div`
  display: flex;
  gap: 30px;
  margin-bottom: 40px;

  div {
    flex: 50%;
  }
`;
