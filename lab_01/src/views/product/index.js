import React, { Component } from 'react';
import './styles.css';

import api from '../../services/api';

class Product extends Component {
  state = {
    product: {}
  };

  componentDidMount() {
    console.log('component did mount');
    this.loadProduct();
  }

  loadProduct = async () => {
    const { id } = this.props.match.params;
    console.log(' id ', id);
    const product_response = await api.get(`/cards/${id}`);
    console.log('product_response ', product_response.data);
    this.setState({ product: product_response.data.card });
  }

  render() {
    const { product } = this.state;
    return (
      <div className="product-info">
        <aside>
          <img src={product.imageUrl} />
        </aside>
        <main>
          <h1>{product.name}</h1>
          <p>
            <strong>{product.type}</strong>
            <br />
            {product.text}
          </p>
        </main>
      </div>
    )
  };
};

export default Product;
