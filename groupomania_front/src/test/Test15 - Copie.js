import React, { useState } from "react";

export const Crud = () => {
  const [items, setItems] = useState([]);

  const addItem = () => {
    const id = Math.max(...items.map((item) => item.id), 0) + 1;
    setItems([...items, { id, name: `item ${id}` }]);
  };

  const removeItem = (id) => {
    setItems(items.filter((item) => item.id !== id));
  };

  const updateItem = (event) => {
    const newItems = items.map((item) => {
      if (event.target.id == item.id) {
        return { ...item, name: event.target.value };
      }
      return item;
    });
    setItems(newItems);
  };

  return (
    <div>
      <h3>Items</h3>
      <button onClick={addItem} type="button">
        Add Item
      </button>
      <ul>
        {items.map((item) => (
          <li key={item.id}>
            <input
              id={item.id}
              type="text"
              value={item.name}
              onChange={updateItem}
            />
            <button onClick={() => removeItem(item.id)} type="button">
              Remove Item
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
export default Crud;
