import styled from 'styled-components';

export const Container = styled.div`
  width: 80%;
  margin-left: auto;
  margin-right: auto;

  h1 {
    font-size: 16px;
  }

  main {
    padding-top: 30px;

    .content {
      display: flex;
      justify-content: space-between;

      .left-info {
        display: flex;
        justify-content: flex-start;
        flex-direction: column;
        width: 60%;

        p {
          font-size: 12px;
          padding-top: 5px;
        }

        span {
          font-size: 10px;
          padding-bottom: 20px;
        }

        h5 {
          font-weight: normal;
        }
      }

      .right-info {
        display: flex;
        justify-content: end;
        flex-direction: column;
        padding-top: 30px;
        p {
          font-size: 14px;
        }
      }
    }
  }
`;
