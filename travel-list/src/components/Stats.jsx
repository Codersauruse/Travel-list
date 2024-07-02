import "../index.css";

function Stats({ list }) {
  if (!list.length) {
    return (
      <footer className="stats">
        <p>
          <span>Add some items to your Packing list</span>
        </p>
      </footer>
    );
  }
  const totalItems = list.length;
  const numPacked = list.filter((item) => item.packed).length;
  const percent = Math.round((numPacked / totalItems) * 100);
  return (
    <footer className="stats">
      <p>
        <span>
          {numPacked === totalItems
            ? "you have everything packed! Ready to go! ✈️ "
            : `you have ${totalItems} amount things you have packed ${numPacked} :
      ${percent} %}`}
        </span>
      </p>
    </footer>
  );
}

export default Stats;
