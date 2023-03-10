import React, { useContext, useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import NewItemForm from "./NewItemForm";
import {
  SingleItemContainer,
  ItemImage,
  ItemName,
  ItemDescription,
  ItemDeskptopDiv,
  ItemDescButtonDiv,
} from "../styles/styledComponents";
import { OrderContext } from "../App";

const SingleItem = () => {
  const [singleItem, setSingleItem] = useState([]);
  const [updateItem, setUpdateItem] = useState(false);

  const { orders, setOrders } = useContext(OrderContext);

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

  const navigate = useNavigate();

  const handleDelete = async () => {
    await fetch(`http://localhost:3000/items/${path}`, {
      method: "DELETE",
    });
    alert("Item Deleted!");
    navigate("/items");
  };

  const update = () => {
    alert("Item Updated");
    navigate("/items");
  };

  return (
    <SingleItemContainer>
      <ItemName>{singleItem.title}</ItemName>
      <ItemDeskptopDiv>
        <ItemImage src={`${singleItem.image}`} alt="" />
        <ItemDescButtonDiv>
          <ItemDescription>{singleItem.description}</ItemDescription>

          <button
            onClick={() => {
              setUpdateItem(true);
            }}
          >
            Update Items
          </button>

          <button
            onClick={() => {
              setOrders([...orders, singleItem]);
              alert("Item has been ordered");
              navigate("/items");
            }}
          >
            Add to your Orders
          </button>

          <button onClick={handleDelete}>Delete</button>
        </ItemDescButtonDiv>
      </ItemDeskptopDiv>
      {updateItem && (
        <NewItemForm
          url={`http://localhost:3000/items/${path}`}
          verb="PUT"
          update={update}
        />
      )}
    </SingleItemContainer>
  );
};

export default SingleItem;
