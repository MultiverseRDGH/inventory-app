import React from 'react';
import '../App.css';

import {
  IndividualItems,
  ItemContainer,
  ItemImg,
} from '../styles/styledComponents';

export default function Item(props) {
  return (
    <ItemContainer>
      <li className="single-list-item">
        <ItemImg src={props.item.image} alt={`${props.item.title} on sale`} />{' '}
        <IndividualItems to={`/items/single/${props.item.id}`}>
          {props.item.title}
        </IndividualItems>
        <p>£{props.item.price}</p>
      </li>
    </ItemContainer>
  );
}
