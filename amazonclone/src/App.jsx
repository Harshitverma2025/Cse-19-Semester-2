import React, { useState } from "react";
import "./App.css";

function App() {
  const [cart, setCart] = useState([]);
  const [showCart, setShowCart] = useState(false);

  const products = [
    {
      id: 1,
      name: "Wireless Headphones",
      price: 1999,
      image:
        "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=500",
    },
    {
      id: 2,
      name: "Smart Watch",
      price: 2999,
      image:
        "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=500",
    },
    {
      id: 3,
      name: "Laptop",
      price: 54999,
      image:
        "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=500",
    },
    {
      id: 4,
      name: "Mobile Phone",
      price: 14999,
      image:
        "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=500",
    },
    {
      id: 5,
      name: "Gaming Mouse",
      price: 899,
      image:
        "https://images.unsplash.com/photo-1527814050087-3793815479db?w=500",
    },
    {
      id: 6,
      name: "Bluetooth Speaker",
      price: 2499,
      image:
        "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=500",
    },
  ];

  const addToCart = (product) => {
    const existing = cart.find((item) => item.id === product.id);

    if (existing) {
      setCart(
        cart.map((item) =>
          item.id === product.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        )
      );
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const increaseQty = (id) => {
    setCart(
      cart.map((item) =>
        item.id === id
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
    );
  };

  const decreaseQty = (id) => {
    setCart(
      cart
        .map((item) =>
          item.id === id
            ? { ...item, quantity: item.quantity - 1 }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  };

  const removeItem = (id) => {
    setCart(cart.filter((item) => item.id !== id));
  };

  const totalItems = cart.reduce(
    (total, item) => total + item.quantity,
    0
  );

  const totalPrice = cart.reduce(
    (total, item) => total + item.price * item.quantity,
    0
  );

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">amazon.in</div>

        <div className="location">
          📍 Delivering to Ghaziabad
        </div>

        <div className="search">
          <input
            type="text"
            placeholder="Search Amazon.in"
          />
          <button>🔍</button>
        </div>

        <div
          className="cart-icon"
          onClick={() => setShowCart(!showCart)}
        >
          🛒 Cart ({totalItems})
        </div>
      </header>

      {!showCart ? (
        <>
          <section className="hero">
            <h1>Welcome to Amazon Clone</h1>
            <p>Shop Electronics, Fashion & More</p>
          </section>

          <section className="products">
            {products.map((product) => (
              <div
                className="product-card"
                key={product.id}
              >
                <img
                  src={product.image}
                  alt={product.name}
                />

                <h3>{product.name}</h3>

                <p className="price">
                  ₹{product.price.toLocaleString()}
                </p>

                <button
                  onClick={() =>
                    addToCart(product)
                  }
                >
                  Add to Cart
                </button>
              </div>
            ))}
          </section>
        </>
      ) : (
        <div className="cart-page">
          <div className="cart-left">
            <h1>Shopping Cart</h1>

            {cart.length === 0 ? (
              <h3>Your Cart is Empty</h3>
            ) : (
              cart.map((item) => (
                <div
                  className="cart-product"
                  key={item.id}
                >
                  <img
                    src={item.image}
                    alt={item.name}
                  />

                  <div className="product-info">
                    <h2>{item.name}</h2>

                    <p className="stock">
                      In Stock
                    </p>

                    <div className="qty-box">
                      <button
                        onClick={() =>
                          decreaseQty(item.id)
                        }
                      >
                        -
                      </button>

                      <span>
                        {item.quantity}
                      </span>

                      <button
                        onClick={() =>
                          increaseQty(item.id)
                        }
                      >
                        +
                      </button>
                    </div>

                    <div className="actions">
                      <span
                        onClick={() =>
                          removeItem(item.id)
                        }
                      >
                        Delete
                      </span>
                    </div>
                  </div>

                  <h2>
                    ₹
                    {(
                      item.price *
                      item.quantity
                    ).toLocaleString()}
                  </h2>
                </div>
              ))
            )}
          </div>

          <div className="cart-right">
            <h3>
              Subtotal ({totalItems} items)
            </h3>

            <h2>
              ₹
              {totalPrice.toLocaleString()}
            </h2>

            <button className="buy-btn">
              Proceed to Buy
            </button>
          </div>
        </div>
      )}

      <footer>
        <div className="back-top">
          Back to Top
        </div>

        <div className="footer-content">
          <div>
            <h4>Get to Know Us</h4>
            <p>About Amazon</p>
            <p>Careers</p>
            <p>Press Releases</p>
          </div>

          <div>
            <h4>Connect with Us</h4>
            <p>Facebook</p>
            <p>Twitter</p>
            <p>Instagram</p>
          </div>

          <div>
            <h4>Make Money with Us</h4>
            <p>Sell on Amazon</p>
            <p>Advertise Products</p>
          </div>

          <div>
            <h4>Help</h4>
            <p>Your Account</p>
            <p>Returns</p>
            <p>Support</p>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;