import styled from 'styled-components';
import backgroundImg from '../../assets/cadastro-recrutador-background.svg';

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
  background: url(${backgroundImg}) no-repeat right 7% center;
  background-attachment: fixed;
  background-size: 30%;

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
      width: 100%;
      border: #d99230 solid 3px;
      border-radius: 20px;
      margin-top: 10px;
      padding: 10px 20px 12px;
    }

    label {
      display: flex;
      align-items: center;
    }

    input[type='checkbox'] {
      width: 24px;
      height: 24px;
      margin-left: 15px;
      margin-right: 10px;
      font-size: 16px;
    }

    button {
      background: #d99230;
      width: 100%;
      height: 60px;
      border-radius: 20px;
      font-size: 20px;
      font-weight: 700;
      color: #fbf9f8;
      text-transform: uppercase;

      &:hover {
        background: #ffa62b;
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
