import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import API from '../../services/api';
import './styles.css';
import Loader from '../../components/Loader';

function Main() {
  const [items, setItems] = useState([]);
  const [loadingScreen, setLoadingScreen] = useState(true);

  const loadProducts = async () => {
    await API.get('/cards')
      .then((response) => {
        if (response.data) {
          setItems(response.data.cards);
          setLoadingScreen(false);
        }
      });
  };

  useEffect(() => {
    loadProducts();
  }, []);

  if (loadingScreen) return <Loader asset="cards" />;
  return (
    <section className="items">
      <section className="items items-list">
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
      <section className="items actions">
        <button type="button">Previous</button>
        <button type="button">Next</button>
      </section>
    </section>
  );
}

export default Main;
