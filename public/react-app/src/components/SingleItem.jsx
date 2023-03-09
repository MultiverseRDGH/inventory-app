import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import NewItemForm from "./NewItemForm";

const SingleItem = () => {
  const [singleItem, setSingleItem] = useState([]);
  const [updateItem, setUpdateItem] = useState(false);

  const location = useLocation();
  const path = location.pathname.split("/").at(-1);

  useEffect(() => {
    const getSingleItem = async () => {
      const res = await fetch(`http://localhost:3000/items/${path}`);
      const data = await res.json();
      setSingleItem(data);
    };
    getSingleItem();
  }, [path]);

  return (
    <div>
      <h1>{singleItem.title}</h1>
      <h1>{singleItem.description}</h1>

      <button
        onClick={() => {
          setUpdateItem(true);
        }}
      >
        Update Items
      </button>
      <button>Delete Item</button>

      {updateItem && (
        <NewItemForm url={`http://localhost:3000/items/${path}`} verb="PUT" />
      )}
    </div>
  );
};

export default SingleItem;
