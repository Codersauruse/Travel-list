import "./index.css";
import Form from "./components/Form.jsx";
import Logo from "./components/Logo.jsx";
import PackingList from "./components/PackingList.jsx";
import Stats from "./components/Stats.jsx";
import { useState } from "react";

function App() {
  const [items, setItems] = useState([]);

  function AddItems(newItem) {
    setItems((items) => [...items, newItem]);
  }

  function HandleToggleItems(id) {
    const updatedItems = (items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      );
    setItems(updatedItems);
  }

  function handleDeleteItems(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }
  function ClearList() {
    const confirm = window.confirm("Are you sure you want to clear the list?");
    if (confirm) setItems([]);
  }
  return (
    <div className="app">
      <Logo />
      <Form items={items} AddItems={AddItems} />
      <PackingList
        items={items}
        handleDeleteItems={handleDeleteItems}
        HandleToggleItems={HandleToggleItems}
        ClearList={ClearList}
      />
      <Stats list={items} />
    </div>
  );
}

export default App;
