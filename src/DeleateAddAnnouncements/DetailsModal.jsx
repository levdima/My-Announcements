import React,{useContext,useState} from "react";
import TodoContex from "../Provider/TodoContex";
import "./DetailsModal.scss";

function DetailsModal({ onClose,title,description,todo}) {

  const [filteredData, setFilteredData] = useState([]);
  const [wordEntered, setWordEntered] = useState("");
  const [descriptionEntered, setDescriptionEntered] = useState("");
  const {todos}=useContext(TodoContex)

  const handleFilter = () => {
    const searchTitle = todo.title;
    const searchDescription= todo.description;

    setWordEntered(searchTitle);
    setDescriptionEntered(searchDescription);
    const newFilter = todos.filter((value) => {
      return value.title.toLowerCase().includes(searchTitle.toLowerCase())&&value.description.toLowerCase().includes(searchDescription.toLowerCase());
    });

  
      setFilteredData(newFilter);
    
  };
  return (
    <div className="modalBackground">
      <div className="modalContainer">
        <div className="titleCloseBtn">
          <button
            onClick={onClose}
          >
            X
          </button>
        </div>
        <div className="title">
          <h1>{title}</h1>
        </div>
        <div className="body">
          <p>{description}</p>
          <p>{todo.date}</p>
          <h1>show top3 announcemets</h1>
          <input
          type="checkbox"

          value={wordEntered}
          onChange={handleFilter}
        />
        
          {filteredData.length != 1 && filteredData.sort(function(a, b) {
            return a.date.localeCompare(b.date);
}).slice(0,3).map((value, key) => {
            return (
                <div className="topAnounsments"><p>{value.title} </p><p>{value.description} </p></div>
              
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default DetailsModal;