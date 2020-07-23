import React from "react";

//CHALLENGE: Make this app work by applying what you've learnt.
//1. When new text is written into the input, its state should be saved.
//2. When the add button is pressed, the current data in the input should be
//added to an array.
//3. The <ul> should display all the array items as <li>s

function App() {
  const [newText, setNewText] = React.useState("");
  const [newItems, newSetItems] = React.useState([]);

  function setOnChange(event) {
    const newText = event.target.value;
    setNewText(newText);
  }

  function setNewItem() {
    newSetItems(prevValue => {
      return [...prevValue, newText];
    });

    setNewText("");
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={setOnChange} value={newText} type="text" />
        <button onClick={setNewItem}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {newItems.map(item => (
            <li> {item} </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
