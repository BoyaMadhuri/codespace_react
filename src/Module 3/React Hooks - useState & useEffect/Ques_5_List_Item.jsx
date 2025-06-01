import React, { useState } from 'react';

function Ques_5_List_Item() {
  const [currentItem, setCurrentItem] = useState('');       // Input value
  const [items, setItems] = useState([]);                   // List of { id, value }

  const handleAdd = () => {
    const trimmedItem = currentItem.trim();

    if (!trimmedItem) {
      alert("Please enter a valid item.");
      return;
    }

    // Check for duplicates
    if (items.some(({ value }) => value.toLowerCase() === trimmedItem.toLowerCase())) {
      alert("This item is already in the list.");
      return;
    }

    // Add new item with unique id (timestamp)
    setItems([...items, { id: Date.now(), value: trimmedItem }]);
    setCurrentItem('');
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Item List</h2>
      <input
        type="text"
        value={currentItem}
        onChange={(e) => setCurrentItem(e.target.value)}
        placeholder="Enter item"
        style={{ padding: '10px', fontSize: '16px', width: '60%' }}
      />
      <br /><br />
      <button 
        onClick={handleAdd} 
        style={{ padding: '10px 20px', fontSize: '16px' }}
      >
        Add
      </button>

      <ul style={{ marginTop: '30px', listStyleType: 'none', padding: 0 }}>
        {items.map(({ id, value }) => (
          <li key={id} style={{ fontSize: '18px', margin: '10px 0' }}>
            {value}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ques_5_List_Item;
