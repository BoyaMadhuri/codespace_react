// List Items Input and Display
// Description: Build a component that allows users to enter items into a list. Each new item should be added when the "Add" button is clicked, and displayed on the page.

// Steps:
//     - Write your code within the file, by the name of component as List_Item
import React, { useState } from 'react';

function Ques_5_List_Item() {
  const [item, setItem] = useState('');       // Input value
  const [items, setItems] = useState([]);     // List of items

  // Function to add the current item to the list
  const handleAdd = () => {
    const trimmedItem = item.trim();
    if (trimmedItem) {
      setItems([...items, trimmedItem]); // Add new item
      setItem(''); // Clear input field
    } else {
      alert("Please enter a valid item.");
    }
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '50px' }}>
      <h2>Item List</h2>
      <input
        type="text"
        value={item}
        onChange={(e) => setItem(e.target.value)}
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
        {items.map((it, index) => (
          <li key={index} style={{ fontSize: '18px', margin: '10px 0' }}>
            {it}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Ques_5_List_Item;
