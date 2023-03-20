import styled from 'styled-components';

export const SubmitButton = styled.button`
  color: var(--WhiteFixed);
  background-color: var(--Color-primary);

  height: 48px;
  width: -webkit-fill-available;
  border-radius: 3.25px;
`;

export const InputForm = styled.input`
  border-radius: 3.25px;
  padding-left: 15px;
  margin-top: 6px;
  border: 1px solid transparent;

  background-color: var(--Grey2);
  color: var(--Grey0);

  height: 40px;

  &:hover {
    border: 1px solid var(--Grey0);
    color: var(--Grey0);
  }
`;

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 16px;

  width: -webkit-fill-available;
  max-width: 1100px;

  margin: 0 10px;
  padding: 22px 8.5px;
  border-radius: 4px;

  background-color: var(--Grey3);

  li {
    display: flex;
    justify-content: space-between;
    align-items: center;

    height: 48px;
    border-radius: 4px;
    padding: 0 13px;

    background-color: var(--Grey4);

    cursor: pointer;

    span {
      font-size: 0.9rem;
    }
  }
`;
export const Modal = styled.div`
  position: fixed;
  top: 148px;

  display: flex;
  justify-content: center;

  width: 100%;

  .modalDiv {
    background-color: var(--Grey3);
    border-radius: 4px;
    margin: 0 10px;
    width: 100%;
    max-width: 369px;

    .modalHeader {
      display: flex;
      align-items: center;
      justify-content: space-between;

      background-color: var(--Grey2);

      height: 40px;
      padding: 0 16px;
      border-radius: 4px 4px 0 0;
    }

    h2 {
      font-size: 0.8rem;
    }

    .closeButton {
      font-size: 0.8rem;
    }

    .submitButtonCreate {
      margin: 20px 14px;
    }

    label {
      font-size: 0.7rem;
    }

    .projectNameLabel {
      font-size: 0.7rem;
      margin: 19px 14px 0 14px;
    }

    .projectName {
      display: flex;
      align-items: center;

      font-size: 0.8rem;

      margin: 6px 14px 0 14px;
      height: 40px;
      padding-left: 15px;
      border-radius: 3.25px;
      border: 1px solid transparent;

      background-color: var(--Grey2);
      color: var(--Grey0);
    }

    .buttons__container {
      display: flex;
      margin: 17px 14px 25px 14px;
      gap: 17px;
    }

    .submitButtonUpdate {
      width: 60%;
    }

    .removeButton {
      width: 40%;
      background-color: var(--Grey1);

      height: 48px;
      border-radius: 3.25px;
    }

    form {
      border-radius: 4px;
    }

    @media (min-width: 389px) {
      .modalHeader {
        height: 50px;
      }

      h2 {
        font-size: 1rem;
      }

      .closeButton {
        font-size: 1rem;
      }

      label {
        font-size: 0.8rem;
      }

      .projectNameLabel {
        font-size: 0.75rem;
      }

      .projectName {
        font-size: 0.9rem;
      }

      .submitButtonCreate {
        font-size: 1rem;
      }

      .submitButtonUpdate {
        font-size: 1rem;
      }

      .removeButton {
        font-size: 1rem;
      }
    }
  }
`;
