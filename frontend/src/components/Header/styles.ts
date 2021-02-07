import styled from 'styled-components';

export const Container = styled.header`
  margin-top: 40px;
  margin-bottom: 100px;
  display: flex;
  align-items: center;

  nav {
    width: 100%;
    display: flex;
    justify-content: center;
    gap: 50px;

    a {
      font-size: 19px;
      font-weight: 600;
      color: #489fb5;
      text-decoration: none;

      &:hover {
        color: #397d8f;
      }
    }
  }

  button {
    background: #489fb5;
    min-width: 160px;
    height: 48px;
    border-radius: 25px;
    font-size: 18px;
    font-weight: 600;
    color: #fbf9f8;
    text-transform: uppercase;

    &:hover {
      background: #397d8f;
    }
  }
`;
