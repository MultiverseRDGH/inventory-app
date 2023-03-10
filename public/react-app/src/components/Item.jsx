import React from 'react';

import {
  IndividualItems,
  ItemContainer,
  ItemImg,
} from '../styles/styledComponents';

export default function Item(props) {
  return (
    <ItemContainer>
      <li style={{ display: 'flex', justifyContent: 'space-between' }}>
        <IndividualItems to={`/items/single/${props.item.id}`}>
          {props.item.title}
        </IndividualItems>
        <ItemImg src={props.item.image} alt={`${props.item.title} on sale`} />
        <p>£{props.item.price}</p>
      </li>
    </ItemContainer>
  );
}
