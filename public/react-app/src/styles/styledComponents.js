import styled from "styled-components";
import { Link } from "react-router-dom";

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

//Single Item viewpage

export const SingleItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const ItemImage = styled.img`
  width: 20%;
  height: 20%;
  margin: auto;
  border-radius: 0.3rem;
  box-shadow: 6px 10px 5px 0px rgba(0, 0, 0, 0.75);
`;

export const ItemName = styled.h1`
  font-family: "Lilita One";
  color: #f3b712;
  font-size: 3rem;
  font-weight: bold;
  text-decoration: underline;
`;

export const ItemDescription = styled.h2`
  border: 2px solid black;
  padding: 1rem;
  margin: 1rem 0.5rem;
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
  > li {
    padding: 0.4 1rem;
  }
`;

export const AllItems = styled.ul`
  list-style: none;
`;

export const ItemContainer = styled.div`
  padding: 1rem;
  font-family: "Kanit";
  font-size: 1.4rem;
`;

export const AllItemsHeader = styled.h1`
  font-family: "Marko One";
  font-size: 3rem;
  font-weight: 900;
  text-decoration: underline;
`;

//ORDERS

export const Order = styled.li`
  font-family: "Afla Slab One", "Marko One", "san-serif";
  font-size: 1.5rem;
  font-weight: 800;
  color: black;
`;

export const OrderContainer = styled.div`
  background-color: #ebebea;
  box-sizing: border-box;
  height: 100vh;
`;
