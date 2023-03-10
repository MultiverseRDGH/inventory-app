import React from "react";
import { Link } from "react-router-dom";
import { IndividualItems, ItemContainer } from "../styles/styledComponents";

export default function Item(props) {
  return (
    <ItemContainer>
      <li>
        <IndividualItems to={`/items/single/${props.item.id}`}>
          {props.item.title}
        </IndividualItems>
      </li>
    </ItemContainer>
  );
}
