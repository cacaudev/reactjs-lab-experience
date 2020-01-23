import React, { Component } from 'react';
import './styles.css';

import api from '../../services/api';

class Product extends Component {
  state = {
    product: {}
  };

  componentDidMount() {
    this.loadProduct();
  }

  loadProduct = async () => {
    const { id } = this.props.match.params;
    const product_response = await api.get(`/cards/${id}`);
    this.setState({ product: product_response.data.card });
  }

  render() {
    const { product } = this.state;
    return (
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
    )
  };
};

export default Product;
