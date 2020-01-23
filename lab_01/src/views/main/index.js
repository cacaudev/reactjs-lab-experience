import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import api from '../../services/api';
import './styles.css';

class Main extends Component {
  state = {
    items: []
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await api.get('/cards');
    console.log('response.data ', response.data);
    if (response.data)
      this.setState({ items: response.data.cards })
  }

  render() {
    const { items } = this.state;
    return (
      <section className="items-list">
        {items.map(item => (
          <article key={item.id}>
            <h3>{item.name}</h3>
            <p>
              <strong>{item.type}</strong>
              <br />
              {item.text}
            </p>
            <Link to={`/products/${item.id}`}>Link to card details</Link>
          </article>
        ))}
        <section className="actions">
          <button>Previous</button>
          <button>Next</button>
        </section>
      </section>
    )
  }
}

export default Main;
