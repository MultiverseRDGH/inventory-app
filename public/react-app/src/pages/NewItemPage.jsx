import React from "react";
import NewItemForm from "../components/NewItemForm";

const NewItemPage = () => {
  return (
    <div>
      <NewItemForm url="http://localhost:3000/items" verb="POST" />
    </div>
  );
};

export default NewItemPage;
