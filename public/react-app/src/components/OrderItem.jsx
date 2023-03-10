import React from 'react';
import { ItemContainer } from '../styles/styledComponents';
import { Order } from '../styles/styledComponents';

export default function OrderItem({ order }) {
  return (
    <>
      <ItemContainer>
        <Order>
          {order.title}
          <br />
          {<img src={order.image} alt={order.title} style={{ width: '40%' }} />}
        </Order>
      </ItemContainer>
    </>
  );
}
