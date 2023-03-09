import React from 'react';
import { Link } from 'react-router-dom';

export default function Item(props) {
  return (
    <div>
      <li>
        <Link to={`/items/single/${props.item.id}`}>{props.item.title}</Link>
      </li>
    </div>
  );
}
