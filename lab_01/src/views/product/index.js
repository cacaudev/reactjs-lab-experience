import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import API from '../../services/api';

export default function Product(props) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const loadProduct = async () => {
      const { id } = props.match.params;
      const product_response = await API.get(`/cards/${id}`);
      setLoading(false);
      setProduct(product_response.data.card);
    }
    loadProduct();
  }, []);

  return (
    <>
      <section className="product">
        <img src={product.imageUrl} />
        <div className="product-info">
          <h1>{product.name}</h1>
          <span>{product.type}</span>
          <p>{product.text}</p>
          <p>{product.rarity}</p>
          <p>{product.artist}</p>
          <p>{product.setName}</p>
        </div>
      </section>
      <Link to={`/`}>Back to Homepage</Link>
    </>
  )
};
