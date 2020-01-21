import React, { Component } from 'react';
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
    const response = await api.get('/random_ten');
    if (response.data)
      this.setState({ items: response.data })
  }

  render() {
    const { items } = this.state;
    return (
      <div className="items-list">
        {items.map(item => (
          <article key={item.id}>
            <h3>{item.type}</h3>
            <p>
              <strong>{item.setup}</strong>
              <br />
              {item.punchline}
            </p>
          </article>
        ))}
        <div className="actions">
          <button>Previous</button>
          <button>Next</button>
        </div>
      </div>
    )
  }
}

export default Main;
