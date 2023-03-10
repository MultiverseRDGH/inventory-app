import React from "react";
import { useState, useEffect } from "react";
import Item from "./Item";
import { v4 } from "uuid";
import { AllItems, AllItemsHeader } from "../styles/styledComponents";

export default function ItemList() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const res = await fetch("http://localhost:3000/items");

      const data = await res.json();

      setItems(data);
    };
    fetchItems();
  }, []);

  console.log(items, "items");

  return (
    <>
      <AllItemsHeader>All Items</AllItemsHeader>
      <AllItems>
        {items.map((item) => (
          <Item key={v4()} item={item} />
        ))}
      </AllItems>
    </>
  );
}
