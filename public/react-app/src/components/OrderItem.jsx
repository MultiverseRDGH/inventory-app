import React from "react";
import { ItemContainer } from "../styles/styledComponents";
import { Order } from "../styles/styledComponents";

export default function OrderItem({ order }) {
  return (
    <>
      <ItemContainer>
        <Order>{order.title}</Order>
      </ItemContainer>
    </>
  );
}
