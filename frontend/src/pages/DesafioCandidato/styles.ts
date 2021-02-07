import styled from 'styled-components';
import backgroundImg from '../../assets/checked-icon.svg';

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  main {
    h2 {
      font-weight: 700;
      color: #397d8f;
      padding-bottom: 15px;
    }

    h4 {
      padding-top: 30px;
      padding-bottom: 5px;
    }

    p {
      font-size: 16px;
      line-height: 24px;
      padding-bottom: 20px;
    }

    strong {
      font-weight: 600;
    }

    li {
      list-style: none;
      background: url(${backgroundImg}) no-repeat;
      background-size: 24px;
      line-height: 24px;
      padding-left: 30px;
      margin-top: 18px;
    }

    label {
      padding-top: 40px;
      padding-bottom: 40px;
      display: flex;
      align-items: center;
      justify-content: flex-end;
    }

    input[type='checkbox'] {
      width: 24px;
      height: 24px;
      margin-right: 10px;
    }

    section {
      border-top: #828282 dashed 2px;
      padding-top: 40px;
      display: flex;
      flex-direction: column;

      h3 {
        font-weight: 700;
        color: #397d8f;
        text-align: center;
        padding-bottom: 50px;
      }

      div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 40px;

        a {
          border-radius: 20px;
        }

        button {
          background: #397d8f;
          width: 275px;
          height: 60px;
          border-radius: 20px;
          font-size: 16px;
          font-weight: 600;
          color: #fbf9f8;
          text-transform: uppercase;

          &:hover {
            background: #489fb5;
          }
        }
      }
    }
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;

  > div {
    max-width: 760px;
  }

  div + div {
    min-width: 200px;
    margin-left: 50px;
    text-align: center;

    h4 + h4 {
      border: #489fb5 solid 2px;
      margin-top: 10px;
      padding: 15px;
      color: #397d8f;
    }
  }
`;
