function Cart({ cart, setCart }) {
  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <h1>Cart</h1>

      {cart.map((item, index) => (
        <div key={index}>
          <h3>{item.title}</h3>
          <p>₹{item.price}</p>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}

      <h2>Total: ₹{total.toFixed(2)}</h2>
    </div>
  );
}

export default Cart;