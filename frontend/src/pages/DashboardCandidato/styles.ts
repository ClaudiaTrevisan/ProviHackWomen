import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  main {
    margin-bottom: -50px;
  }

  h2 {
    font-weight: 700;
    padding-bottom: 30px;
    color: #397d8f;
  }

  section {
    padding-bottom: 25px;

    &.ornament {
      border-bottom: #828282 dashed 2px;
      margin-bottom: 40px;
    }
  }

  button.more {
    background: #489fb5;
    border-radius: 10px;
    min-width: 210px;
    display: block;
    margin-bottom: 35px;
    margin-left: auto;
    margin-right: auto;
    color: #fbf9f8;
    line-height: 40px;

    &:hover {
      background: #397d8f;
    }
  }
`;

export const CardTeamContainer = styled.div`
  padding-top: 35px;
  display: flex;
  flex-flow: row wrap;
  gap: 4%;

  button {
    background: #9275c9;
    border-radius: 32.5px;
    height: 130px;
    margin-bottom: 4%;
    padding-left: 25px;
    padding-right: 25px;
    display: flex;
    flex: 0 0 22%;
    align-items: center;
    justify-content: space-between;
    transform: scale(1);
    transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;

    &:hover {
      background: #775fa3;
      transform: scale(1.05);
    }

    > img {
      width: 50px;
    }

    h4 {
      font-size: 16px;
      color: #fbf9f8;
      text-transform: uppercase;
    }
  }
`;

export const CardHighlightChallengeContainer = styled.div`
  padding-top: 35px;
  padding-bottom: 35px;
  display: flex;
  flex-flow: row wrap;
  gap: 4%;

  button {
    background: #489fb5;
    border-radius: 30px;
    min-height: 200px;
    margin-bottom: 4%;
    padding: 20px;
    display: flex;
    flex: 0 0 22%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    transform: scale(1);
    transition: transform 0.2s ease-in-out, background 0.2s ease-in-out;

    &:hover {
      background: #397d8f;
      transform: scale(1.05);
    }

    > div {
      display: flex;
      align-self: flex-start;
      align-items: center;

      img {
        width: 35px;
      }

      p {
        font-size: 16px;
        color: #fbf9f8;
        padding-left: 10px;
      }
    }

    h4 {
      font-size: 16px;
      color: #fbf9f8;
      text-align: left;
      padding-left: 10px;
    }

    > img {
      width: 30px;
    }
  }
`;

export const CardChallengeContainer = styled.div`
  padding-top: 35px;
  padding-bottom: 35px;
  display: flex;
  flex-flow: row wrap;
  gap: 4%;

  button {
    background: #fbf9f8;
    border-color: #489fb5;
    border-style: solid;
    border-width: 3px;
    border-radius: 30px;
    min-height: 200px;
    margin-bottom: 4%;
    padding: 20px;
    display: flex;
    flex: 0 0 22%;
    flex-direction: column;
    align-items: flex-end;
    justify-content: space-between;
    transform: scale(1);
    transition: transform 0.2s ease-in-out, border-color 0.2s ease-in-out;

    &:hover {
      border-color: #397d8f;
      transform: scale(1.05);
    }

    > div {
      display: flex;
      align-self: flex-start;
      align-items: center;

      img {
        width: 35px;
      }

      p {
        font-size: 16px;
        color: #828282;
        padding-left: 10px;
      }
    }

    h4 {
      font-size: 16px;
      color: #333333;
      text-align: left;
      padding-left: 10px;
    }

    > img {
      width: 30px;
    }
  }
`;
