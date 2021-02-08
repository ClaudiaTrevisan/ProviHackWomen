import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  main {
    margin-bottom: -100px;
  }

  section {
    padding-bottom: 100px;
  }

  h2 {
    font-weight: 700;
    padding-bottom: 30px;
    color: #397d8f;
  }

  .planos {
    margin-top: 50px;
  }

  button.more {
    background: #ffa62b;
    border-radius: 10px;
    min-width: 210px;
    display: block;
    margin-bottom: 35px;
    margin-left: auto;
    margin-right: auto;
    font-weight: 600;
    color: #333333;
    line-height: 50px;
    text-transform: uppercase;

    &:hover {
      background: #d99230;
    }
  }

  button.plus {
    background: #9275c9;
    border-radius: 32.5px;
    width: 270px;
    height: 200px;
    margin-top: 40px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.15);
    -webkit-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.15);
    -moz-box-shadow: 0px 10px 5px 0px rgba(0, 0, 0, 0.15);
    transform: scale(1);
    transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;

    &:hover {
      background: #775fa3;
      transform: scale(1.05);
    }
  }
`;
