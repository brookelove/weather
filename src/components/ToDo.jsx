import * as React from "react";
import "../assets/css/components/ToDo.css"
import deleteIcon from "../assets/images/icons/garbage-bag.png"
import editIcon from "../assets/images/icons/pencil.png"
import doneIcon from "../assets/images/icons/accept.png"
const ToDo = () => {
  const addToDo = () => {
    console.log("click")
    //create a new note on end
      //create a new div
  }
  return (
    <div className="toDoContainer">
      <h3 className="toDoHeader">TODO LIST</h3>
      <section className="toDoMainContainer">
        {/* this is the area where user can write the notes for the day */}
        <div className="toDoSeachContainer">
          <input className="toDoInput">
          </input>
          <button onClick={addToDo} className="addToDoBttn" >+</button>
        </div>
        <div className="newItemContainer">
          <p className="item">buy groceries</p>
          <div>
            <button className="toDoButtons"><img  className="icon" src={doneIcon} title="garbage bag icons"/></button>
            <button className="toDoButtons"><img  className="icon" src={editIcon} title="garbage bag icons"/></button>
            <button className="toDoButtons"><img  className="icon" src={deleteIcon} title="garbage bag icons"/></button>
          </div>
        </div>
        {/* <div>
          <input type="checkbox"></input>
          <input type="input"></input>
          <button>Trash</button>
        </div>
        <div>
          <input type="checkbox"></input>
          <input type="input"></input>
          <button>Trash</button>
        </div>
        <div>
          <input type="checkbox"></input>
          <input type="input"></input>
          <button>Trash</button>
        </div> */}
      </section>
     
    </div>
  );
};
export default ToDo;
