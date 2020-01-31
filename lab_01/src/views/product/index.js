import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './styles.css';

import API from '../../services/api';
import Loader from '../../components/Loader';

function Product(props) {
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadProduct = async () => {
      const { id } = props.match.params;
      await API.get(`/cards/${id}`)
        .then((response) => {
          if (response.data) {
            setProduct(response.data.card);
            setLoading(false);
          }
        });
    };
    loadProduct();
  }, []);

  if (loading) return <Loader asset="card" />;
  return (
    <section className="product-page">
      <section className="product">
        <img src={product.imageUrl} alt="" />
        <div className="product-info">
          <h1>{product.name}</h1>
          <span>{product.type}</span>
          <p>{product.text}</p>
          <p>{product.rarity}</p>
          <p>{product.artist}</p>
          <p>{product.setName}</p>
        </div>
      </section>
      <Link to={"/"}>Back to Homepage</Link>
    </section>
  );
}

export default Product;
