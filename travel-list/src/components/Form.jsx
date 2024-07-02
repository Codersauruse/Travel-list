import { useState } from "react";
import "../index.css";
import Item from "./Item.jsx";

function Form({ items, AddItems }) {
  const [Desc, setDesc] = useState("");
  const [Qty, setQty] = useState(1);
  function handleSubmit(event) {
    event.preventDefault();
    const newItem = {
      id: Date.now(),
      description: Desc,
      quantity: Qty,
      packed: false,
    };
    AddItems(newItem);
    setDesc("");
    setQty(1);
  }
  return (
    <form className="add-form" onSubmit={handleSubmit}>
      <h3>What do you need for your trip ?</h3>
      <select value={Qty} onChange={(e) => setQty(Number(e.target.value))}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="...items"
        value={Desc}
        onChange={(e) => setDesc(e.target.value)}
      />
      <button>Add</button>
    </form>
  );
}

export default Form;
