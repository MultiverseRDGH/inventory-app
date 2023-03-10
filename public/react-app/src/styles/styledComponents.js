import styled from "styled-components";

export const FormContainer = styled.form`
  background-color: #bd285c;
  height: 80vh;
  width: 80vw;
  margin: auto;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;

  > button {
    outline: none;
    display: block;
    border-radius: 1.2rem;
    border: none;
    background-color: #c98f2c;
    width: 40%;
    height: 10%;
    margin: auto;
    font-size: 2rem;
    font-family: "Kanit", sans-serif;
    font-weight: 900;
    text-transform: uppercase;
    text-decoration: underline;
  }
`;

export const FormSection = styled.div`
  margin-bottom: 2rem;
  @media (min-width: 768px) {
    text-align: center;
    padding: 1rem;
    display: flex;
    flex-direction: column;

    > input {
      height: 2rem;
    }
  }
  > label {
    padding: 0 1rem;
    font-family: "Marko One", serif;
    font-size: 1.2rem;
    font-weight: 900;
  }
`;
