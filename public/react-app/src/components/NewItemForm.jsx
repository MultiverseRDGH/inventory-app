import React, { useState } from "react";

export default function NewItemForm() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState();
  const [category, setCategory] = useState("");
  const [image, setImage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch("http://localhost:3000/items", {
      method: "POST",

      headers: { "Content-type": "application/json" },

      body: JSON.stringify({
        title,
        description,
        price,
        category,
        image,
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.message) {
          console.log(data.message);
        } else {
          console.log(data.error);
        }
      });

    e.target.reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="title">Title:</label>
      <input type="text" onChange={(e) => setTitle(e.target.value)} />

      <label htmlFor="description">Description:</label>
      <input type="text" onChange={(e) => setDescription(e.target.value)} />

      <label htmlFor="price">Price:</label>
      <input type="text" onChange={(e) => setPrice(e.target.value)} />

      <label htmlFor="category">Category:</label>
      <input type="text" onChange={(e) => setCategory(e.target.value)} />

      <label htmlFor="image">Image URL:</label>
      <input type="text" onChange={(e) => setImage(e.target.value)} />

      <button type="submit">Submit</button>
    </form>
  );
}
