import React, { useContext } from "react";
import { OrderContext } from "../App";
import OrderItem from "./OrderItem";

export default function OrderList() {
  const { orders } = useContext(OrderContext);
  return (
    <ul>
      {orders.map((item) => (
        <OrderItem order={item} />
      ))}
    </ul>
  );
}
