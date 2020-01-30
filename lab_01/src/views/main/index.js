import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/api';
import './styles.css';
import Loader from '../../components/Loader';

class Main extends Component {
  state = {
    items: [],
    loadingS: true
  };

  componentDidMount() {
    this.loadProducts();
  }

  loadProducts = async () => {
    const response = await API.get('/cards');
    if (response.data) {
      this.setState({
        loading: false,
        items: response.data.cards,
      });
    }
  };

  render() {
    const { items, loading } = this.state;
    return (
      <div>
        {loading ? (
          <Loader />
        ) : (
            <section className="items-list">
              {items.map((item) => (
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
            </section>
          )}
      </div>
    );
  }
}

export default Main;
