import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const FormContainer = styled.form`
  background-color: #bd285c;
  height: 80vh;
  width: 80vw;
  margin: auto;
  border-radius: 1.2rem;
  display: flex;
  flex-direction: column;
  margin-top: 1rem;
  margin-bottom: 1rem;

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
    font-family: 'Kanit', sans-serif;
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
    font-family: 'Marko One', serif;
    font-size: 1.2rem;
    font-weight: 900;
  }
`;

//Single Item viewpage

export const SingleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  padding: 2rem 3rem;
  height: 100vh;
`;

export const ItemImage = styled.img`
  width: 40%;
  margin: auto;
  border-radius: 0.3rem;
  box-shadow: 6px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const ItemName = styled.h1`
  color: #fff;
  font-size: 3rem;
`;

export const ItemDescriptionDiv = styled.div`
  backgroud-color: #fff;
`;

export const ItemDescription = styled.p`
  font-size: 1.3rem;
  padding: 1rem;
  margin: 1rem 0.5rem;
  backgroud-color: #fff;
`;

export const ItemDeskptopDiv = styled.div`
  @media (min-width: 768px) {
    display: flex;
    align-items: flex-start;
  }
  margin: 2rem;
`;

export const ItemDescButtonDiv = styled.div`
  margin: auto;
  align-items: flex-end;
  justify-content: center;
`;

export const UpdateButton = styled.button`
  border-radius: 1.2rem;
  padding: 0.5rem;
  margin: 1rem;
  background-color: #d54848;
  border: none;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 463px) {
    margin: 0;
  }
`;

export const DeleteButton = styled.button`
  border-radius: 1.2rem;
  padding: 0.5rem;
  margin: 1rem;
  border: none;
  background-color: #487ed5;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 463px) {
    margin: 0;
  }
`;
export const AddOrderButton = styled.button`
  border-radius: 1.2rem;
  padding: 0.5rem;
  margin: 1rem;
  border: none;
  background-color: #48d59f;
  &:hover {
    opacity: 0.8;
  }
  @media (max-width: 463px) {
    margin: 0;
  }
`;

//ALL ITEM PAGE

export const IndividualItems = styled(Link)`
  color: black;
  text-decoration: none;
`;

export const ItemImg = styled.img`
  width: 15%;
`;

export const AllItems = styled.ul`
  list-style: none;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin-left: 100px;

  @media (max-width: 768px) {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-left: 0px;
  }
`;

export const ItemContainer = styled.div`
  background-color: #fff;
  border-radius: 10px;
  margin: 10px 0;
  padding: 2rem;
  width: 80%;
  font-size: 1.1rem;
  box-shadow: rgba(0, 0, 0, 0.16) 0px 1px 4px;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

export const AllItemsHeader = styled.h1`
  color: #fff;
  text-align: center;
  margin-top: 20px;
  margin-bottom: 40px;
  font-size: 3rem;
`;

//ORDERS

export const Order = styled.li`
  text-align: center;
  font-size: 1.5rem;
  font-weight: 800;
  color: black;
`;

export const OrderContainer = styled.div`
  box-sizing: border-box;
  height: 100vh;
`;
