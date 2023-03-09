import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';

const SingleItem = () => {
  const [singleItem, setSingleItem] = useState([]);
  const location = useLocation();
  const path = location.pathname.split('/').at(-1);

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
    </div>
  );
};

export default SingleItem;
