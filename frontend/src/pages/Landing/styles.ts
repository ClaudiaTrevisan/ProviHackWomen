import styled from 'styled-components';

export const Container = styled.div`
  width: 100%;

  .center {
    text-align: center;
  }
  .icon-section-title {
    width: 90%;
    margin-left: auto;
  }

  .space-around {
    display: flex;
    justify-content: space-around;
  }
`;

export const SectionOne = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-between;

  .highlight {
    font-weight: 600;
    color: #397d8f;
  }

  h2 {
    font-weight: bold;
    line-height: 55px;
    letter-spacing: 0.02em;
    color: #397d8f;

    :nth-of-type(1) {
      padding-bottom: 48px;
    }

    :nth-of-type(2) {
      padding-bottom: 16px;
    }
  }

  p {
    font-size: 18px;
    line-height: 25px;
    letter-spacing: 0.02em;

    :nth-of-type(1) {
      text-align: justify;
      padding-bottom: 19px;
    }

    :nth-of-type(2) {
      color: #397d8f;
      font-weight: 600;
      padding-bottom: 23px;
    }

    :nth-of-type(3) {
      padding-bottom: 23px;
    }
  }
`;

export const LandingButton = styled.button`
  text-transform: uppercase;
  background: #ffa62b;
  border-radius: 19px;

  font-size: 18px;
  font-weight: 600;
  line-height: 25px;
  letter-spacing: 0.02em;
  color: #333333;

  padding-top: 15px;
  padding-left: 40px;
  padding-right: 40px;
  padding-bottom: 15px;

  &:hover {
    background: #d99230;
  }
`;

export const SectionTwo = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  padding-top: 190px;

  display: flex;
  justify-content: space-between;

  #image-two {
    padding-left: 30px;
  }

  #text-two {
    padding-left: 60px;
  }

  .highlight {
    font-weight: 600;
    color: #d99230;
  }

  h2 {
    color: #d99230;
    font-weight: 700;
    padding-bottom: 16px;
  }

  #description-one {
    padding-bottom: 23px;
  }

  #adopt {
    color: #4c4c4c;
  }

  p {
    font-weight: 400;

    :nth-of-type(2) {
      padding-bottom: 19px;
    }
  }
`;

export const SectionThree = styled.section`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  display: flex;
  justify-content: space-around;
  padding-top: 190px;
  padding-bottom: 130px;

  #text-three {
    border: 3px solid #ffa62b;
    border-radius: 18.64px;
    padding-top: 20px;
    margin-left: 100px;
    width: 354px;

    > div {
      width: 72%;
      margin-left: auto;
      margin-right: auto;
    }

    h3 {
      text-align: center;
      padding-bottom: 59px;
    }
    .icon-section-title {
      width: 90%;
      margin-left: auto;
    }
    p {
      text-align: center;
      :nth-of-type(1) {
        padding-bottom: 15px;
      }
      :nth-of-type(2) {
        padding-bottom: 85px;
      }
    }

    h4 {
      font-weight: 600;
      font-size: 24.2267px;
      line-height: 33px;
      letter-spacing: 0.02em;
      text-align: center;
      padding-bottom: 25.34px;

      color: #489fb5;
    }
  }
`;

export const SectionFour = styled.section`
  width: 100%;
  background-color: #489fb5;
  color: #fbf9f8;
  padding-bottom: 105px;

  h2 {
    padding-top: 32px;
    padding-bottom: 80px;
    font-weight: 700;
    color: #fbf9f8;
  }

  p {
    font-weight: 700;
    font-size: 18px;
    line-height: 25px;
    text-align: center;
    letter-spacing: 0.02em;
    padding-bottom: 30px;
  }

  .icons-info {
    width: 262px;
    text-align: center;
  }
`;

export const SectionFive = styled.section`
  width: 100%;
  padding-top: 84px;

  .people-info {
    width: 262px;
    text-align: center;
  }

  h2 {
    color: #397d8f;
    padding-bottom: 100px;
  }

  p {
    font-size: 13px;
    padding-bottom: 13.5px;
  }

  h5 {
    font-size: 18px;
    padding-top: 24px;
  }
`;
