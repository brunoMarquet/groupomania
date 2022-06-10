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
      {items &&
        items.map((item) => {
          return (
            <div key={item.id}>
              <Element2
                item={item}
                removeItem={removeItem}
                updateItem={updateItem}
              />
            </div>
          );
        })}
    </div>
  );
};
function Element2(props) {
  const item = props.item;
  return (
    <>
      <li key={item.id}>
        <input
          id={item.id}
          type="text"
          value={item.name}
          onChange={props.updateItem}
        />
        <button onClick={() => props.removeItem(item.id)} type="button">
          Remove Item
        </button>
      </li>
    </>
  );
}

export default Crud;
