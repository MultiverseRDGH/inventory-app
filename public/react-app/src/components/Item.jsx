import React from "react";

export default function Item(props) {
  return (
    <div>
      <li>{props.item.title}</li>
    </div>
  );
}
