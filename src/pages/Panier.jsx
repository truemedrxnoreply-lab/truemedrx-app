import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import AuthContext from '../context/AuthContext'; // Import AuthContext
import './Panier.css';

const Panier = () => {
  const navigate = useNavigate();
  const { cartItems, removeFromCart, updateQuantity } = useContext(CartContext);
  const { user } = useContext(AuthContext); // Get user from AuthContext

  const total = cartItems.reduce(
    (sum, item) => sum + item.price * item.quantity,
    0
  );

  const handleWhatsAppCheckout = () => {
    // Check if user is logged in
    if (!user) {
      // If not logged in, redirect to login page
      navigate('/login');
      return; // Stop the function here
    }

    // If logged in, proceed with WhatsApp checkout
    const message = cartItems
      .map(item => `📦 *${item.name}* - Quantity: ${item.quantity}, Price: ${item.price} €`)
      .join('\n');

    const totalMessage = `\n💰 *Total*: ${total.toFixed(2)} €`;

    const fullMessage = encodeURIComponent(`${message}${totalMessage}`);

    const phoneNumber = '15752652226';
    const whatsappURL = `https://wa.me/${phoneNumber}?text=${fullMessage}`;

    window.open(whatsappURL, '_blank');
  };

  return (
    <div className="panier-container">
      <h2>My Cart</h2>
      {cartItems.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        <>
          <table className="panier-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Product</th>
                <th>Price</th>
                <th>Quantity</th>
                <th>Total</th>
                <th>Remove</th>
              </tr>
            </thead>
            <tbody>
              {cartItems.map((item) => (
                <tr key={item.id}>
                  <td>
                    <img
                      src={item.image.startsWith('http') ? item.image : process.env.PUBLIC_URL + item.image}
                      alt={item.name}
                      className="panier-image"
                    />
                  </td>
                  <td>{item.name}</td>
                  <td>{item.price} €</td>
                  <td>
                    <input
                      type="number"
                      min="1"
                      value={item.quantity}
                      onChange={(e) => {
                        const value = Math.max(1, parseInt(e.target.value) || 1);
                        updateQuantity(item.id, value);
                      }}
                      className="quantity-input"
                    />
                  </td>
                  <td>{(item.price * item.quantity).toFixed(2)} €</td>
                  <td>
                    <button
                      className="remove-btn"
                      onClick={() => removeFromCart(item.id)}
                    >
                      Remove
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>

          <div className="panier-total">
            <h3>Total: {total.toFixed(2)} €</h3>
            <button className="checkout-btn" onClick={handleWhatsAppCheckout}>
              Checkout via WhatsApp
            </button>
          </div>
        </>
      )}
    </div>
  );
};

export default Panier;
