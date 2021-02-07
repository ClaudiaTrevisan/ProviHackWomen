import styled from 'styled-components';
import backgroundImg from '../../assets/landing-background.svg';

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;
`;

export const SectionFull = styled.section`
  width: 100%;
  height: 80vh;
  background: url(${backgroundImg}) no-repeat right center;
  background-size: contain;
`;
