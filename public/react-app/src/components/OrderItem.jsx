import React from "react";

export default function OrderItem({ order }) {
  return (
    <div>
      <li>{order.title}</li>
    </div>
  );
}
