import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  main {
    margin-bottom: -50px;
    display: flex;
    align-items: flex-start;
  }

  h2 {
    font-weight: 700;
    padding-bottom: 30px;
    color: #397d8f;
  }
`;

export const Perfil = styled.div`
  width: 40%;
  max-width: 400px;
  padding: 35px;

  div:first-child {
    img {
      display: flex;
      margin-left: auto;
      margin-right: auto;
    }

    h1 {
      font-size: 27px;
      padding-top: 10px;
      padding-bottom: 10px;
    }

    h2 {
      padding-bottom: 10px;
    }

    h1,
    h2,
    h4 {
      text-align: center;
    }
  }

  > h4 {
    padding-top: 40px;
    padding-bottom: 15px;
  }

  p {
    font-weight: 600;
    font-size: 16px;
    padding-top: 10px;
    padding-bottom: 10px;
  }

  h4 + div {
    display: flex;
    align-items: center;
    gap: 30px;
  }
`;

export const Atividade = styled.div`
  border-left: #828282 solid 2px;
  width: 60%;
  padding: 35px 35px 35px 50px;

  > h4 {
    padding-bottom: 20px;
  }

  > p {
    font-size: 16px;
    padding-bottom: 20px;
  }

  p + h2 {
    padding-top: 40px;
  }
`;

export const BarraProgresso = styled.div`
  background: #f0f0f0;
  border: #828282 solid 1px;
  border-radius: 5px;
  width: 100%;
  max-width: 400px;
  height: 10px;
  margin-bottom: 20px;
  display: flex;

  &::after {
    content: '';
    background: #27ae60;
    width: 75%;
  }
`;

export const CardChallengeContainer = styled.div`
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;

  > div {
    width: 270px;
    margin-bottom: 50px;

    button {
      background: #ffffff;
      border-color: #489fb5;
      border-style: solid;
      border-width: 3px;
      border-radius: 30px;
      width: 100%;
      height: 200px;
      transform: scale(1);
      transition: transform 0.2s ease-in-out, border-color 0.2s ease-in-out;

      &:hover {
        border-color: #397d8f;
        transform: scale(1.05);
      }
    }

    h4 {
      padding-top: 15px;
      padding-bottom: 10px;
      padding-left: 15px;
    }
  }
`;

export const TagContainer = styled.div`
  display: flex;

  span {
    border-radius: 10px;
    background: #397d8f;
    font-size: 12px;
    font-weight: 600;
    color: #fbf9f8;
    padding: 7px 10px;
    margin-left: 15px;
    cursor: pointer;
    transform: scale(1);
    transition: transform 0.2s ease;

    &:hover {
      transform: scale(0.95);
    }
  }
`;
