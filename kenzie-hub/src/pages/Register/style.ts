import styled from 'styled-components';

export const RegisterMain = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;

  @media (max-width: 390px) {
    align-items: center;

    section {
    }
  }

  header {
    display: flex;
    justify-content: space-between;
    text-align: center;

    height: auto;
    width: 100%;
    max-width: 369px;
    margin-top: 80px;
  }

  section {
    background-color: var(--Grey3);
    margin-top: 45px;
    padding: 35px 0;
    border-radius: 3.25px;

    width: -webkit-fill-available;
    max-width: 369px;
  }

  h2 {
    text-align: center;
    font-size: 1.15rem;
  }

  form {
    display: flex;
    flex-direction: column;
  }

  label {
    font-size: 0.6rem;
  }

  p {
    font-size: 0.75rem;
    text-align: center;

    margin-top: 34px;
  }

  .submitButton {
    margin: 0 14px;
    margin-top: 22px;
  }

  a {
    width: 80px;
    line-height: 40px;
    margin: 0;
    border-radius: 4px;

    font-size: 0.75rem;

    background-color: var(--Grey3);
  }
`;
