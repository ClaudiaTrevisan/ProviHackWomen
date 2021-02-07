import styled from 'styled-components';

export const Container = styled.footer`
  padding-top: 120px;
  padding-bottom: 25px;
  display: flex;
  flex-direction: column;

  div {
    margin-bottom: 15px;
    display: flex;
    justify-content: center;
    gap: 20px;
  }

  p {
    font-size: 16px;
    font-weight: 600;
    color: #397d8f;
    text-align: center;

    & + p {
      padding-top: 5px;
    }
  }
`;
