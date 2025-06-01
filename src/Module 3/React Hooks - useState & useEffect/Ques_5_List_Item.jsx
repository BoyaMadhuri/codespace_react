import React, { useState } from 'react';

const styles = {
  container: { textAlign: 'center', marginTop: '50px' },
  input: { padding: '10px', fontSize: '16px', width: '60%' },
  button: { padding: '10px 20px', fontSize: '16px' },
  list: { marginTop: '30px', listStyleType: 'none', padding: 0 },
  listItem: { fontSize: '18px', margin: '10px 0' },
  errorMsg: { color: 'red', marginTop: '10px' }
};

function Ques_5_List_Item() {
  const [currentItem, setCurrentItem] = useState('');
  const [items, setItems] = useState([]);
  const [error, setError] = useState('');

  const handleAdd = () => {
    const trimmedItem = currentItem.trim();

    if (!trimmedItem) {
      setError("Please enter a valid item.");
      return;
    }

    if (items.some(({ value }) => value.toLowerCase() === trimmedItem.toLowerCase())) {
      setError("This item is already in the list.");
      return;
    }

    // Use functional update to safely update state based on previous state
    setItems(prevItems => [...prevItems, { id: Date.now(), value: trimmedItem }]);
    setCurrentItem('');
    setError('');
  };

  return (
    <div style={styles.container}>
      <h2>Item List</h2>
      <input
        type="text"
        value={currentItem}
        onChange={(e) => setCurrentItem(e.target.value)}
        placeholder="Enter item"
        style={styles.input}
      />
      <br /><br />
      <button onClick={handleAdd} style={styles.button}>
        Add
      </button>

      {error && <div style={styles.errorMsg}>{error}</div>}

      <ul style={styles.list}>
        {items.map(({ id, value }) => (
          <li key={id} style={styles.listItem}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ques_5_List_Item;
