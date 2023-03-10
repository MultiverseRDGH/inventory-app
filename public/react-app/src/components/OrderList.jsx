import React, { useContext } from "react";
import { OrderContext } from "../App";
import OrderItem from "./OrderItem";
import { v4 } from "uuid";
import {
  AllItems,
  AllItemsHeader,
  OrderContainer,
} from "../styles/styledComponents";
export default function OrderList() {
  const { orders } = useContext(OrderContext);
  return (
    <OrderContainer>
      <AllItemsHeader>You have {orders.length} Orders</AllItemsHeader>
      <AllItems>
        {orders.map((item) => (
          <OrderItem key={v4()} order={item} />
        ))}
      </AllItems>
    </OrderContainer>
  );
}
