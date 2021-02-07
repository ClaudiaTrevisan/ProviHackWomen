import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  main {
    max-width: 870px;
  }

  h2 {
    padding-bottom: 30px;
    color: #ffa62b;
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
      border: #d99230 solid 3px;
      border-radius: 20px;
      margin-top: 10px;
      padding: 10px 20px 12px;
    }

    button {
      background: #ffa62b;
      width: 100%;
      height: 60px;
      border-radius: 20px;
      font-size: 20px;
      font-weight: 700;
      color: #fbf9f8;
      text-transform: uppercase;

      &:hover {
        background: #d99230;
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
