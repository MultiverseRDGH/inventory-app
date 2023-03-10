import React, { useState } from 'react';
import { FormContainer, FormSection } from '../styles/styledComponents';
import { useNavigate } from 'react-router-dom';

export default function NewItemForm({ url, verb, update }) {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [price, setPrice] = useState();
  const [category, setCategory] = useState('');
  const [image, setImage] = useState('');

  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    await fetch(`${url}`, {
      method: `${verb}`,

      headers: { 'Content-type': 'application/json' },

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

    if (verb === 'PUT') {
      update();
    }
    navigate('/');
  };

  return (
    <FormContainer onSubmit={handleSubmit}>
      <div>
        <FormSection className="formSection">
          <label htmlFor="title">Title:</label>

          <input type="text" onChange={(e) => setTitle(e.target.value)} />
        </FormSection>

        <FormSection className="formSection">
          <label htmlFor="description">Description:</label>
          <input type="text" onChange={(e) => setDescription(e.target.value)} />
        </FormSection>

        <FormSection className="formSection">
          <label htmlFor="price">Price:</label>
          <input type="text" onChange={(e) => setPrice(e.target.value)} />
        </FormSection>

        <FormSection className="formSection">
          <label htmlFor="category">Category:</label>
          <input type="text" onChange={(e) => setCategory(e.target.value)} />
        </FormSection>

        <FormSection className="formSection">
          <label htmlFor="image">Image URL:</label>
          <input type="text" onChange={(e) => setImage(e.target.value)} />
        </FormSection>
      </div>

      <button type="submit">Submit</button>
    </FormContainer>
  );
}
