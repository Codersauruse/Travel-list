import { useState } from "react";
import "../index.css";
import Item from "./Item.jsx";
function PackingList({
  items,
  handleDeleteItems,
  HandleToggleItems,
  ClearList,
}) {
  const [sortBY, setSortBY] = useState("input");
  let SortedItems;
  if (sortBY === "input") {
    SortedItems = items;
  }
  if (sortBY === "description") {
    SortedItems = items
      .slice()
      .sort((a, b) => a.description.localeCompare(b.description));
  }
  if (sortBY === "packed") {
    SortedItems = items.slice().sort((a, b) => a.packed - b.packed);
  }
  return (
    <div className="list">
      <ul>
        {SortedItems.map((init) => (
          <Item
            item={init}
            key={init.id}
            handleDeleteItems={handleDeleteItems}
            HandleToggleItems={HandleToggleItems}
          />
        ))}
      </ul>
      <div className="actions">
        <select value={sortBY} onChange={(e) => setSortBY(e.target.value)}>
          <option value="input">Sort by input order</option>
          <option value="description">Sort by description</option>
          <option value="packed">Sort by packed status</option>
        </select>
        <button onClick={ClearList}>Clear List</button>
      </div>
    </div>
  );
}

export default PackingList;
