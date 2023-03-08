import * as React from "react";
import { useState } from "react";
import "../assets/css/components/ToDo.css"
import deleteIcon from "../assets/images/icons/garbage-bag.png"
import editIcon from "../assets/images/icons/pencil.png"
import doneIcon from "../assets/images/icons/accept.png"
import {v4 as uuidv4} from "uuid";
const ToDo = () => {
  const [toDos, setToDos] = useState([]);
  const [input, setText] = useState("");
  // const [edit, setEdit] = useState(null);

  const handleChange = (e) => {
    setText(e.target.value);
  }
  // const updateToDo = (note, od, completed) => {
  //   const new = toDo.map((toDo))
  // }
  const onSubmit =(e) => {
    e.preventDefault();
    if(toDos.length == 7){
      alert("Try and get some of your list done!")
    } else{
      setToDos([...toDos, {id: uuidv4(), note: input, completed: false}]);
      setText("");
    }
  }

  const handleDone = (id) => {
    let createMap = toDos.map(item => {
      return item.id == id ? {...item, completed: !item.completed } : {...item};
    });
    setToDos(createMap);
  }

  const handleDelete = ({id}) => {
    setToDos(toDos.filter((toDo) => toDo.id !== id));
  }

  return (
    <div className="toDoContainer boxShadow">
      <h3 className="toDoHeader">HONEY DO</h3>
      <section className="toDoMainContainer">
        {/* this is the area where user can write the notes for the day */}
        <form className="toDoSeachContainer" onSubmit={onSubmit}>
          <input className="toDoInput searchBar" onChange={handleChange} value={input} placeholder= " What do you need to get done?">
          </input>
          <button className="button" type="submit" typeof="submit">+</button>
        </form>
          {toDos.map((toDo) => (
            <div className=" newItemContainer" key={toDo.id} id="itemContainer">
                <p className={toDo.completed ? "items completedTask" : "items"}  value={toDo.note} onChange={handleChange}>{toDo.note}</p>
                <div>
                    <button className="toDoButtons" onClick={() => handleDone(toDo.id)}>
                      <img  className="icon" src={doneIcon} title="garbage bag icons"/>
                    </button>
                    {/* <button className="toDoButtons" onClick={() => handleEdit(toDo.id)}>
                      <img  className="icon" src={editIcon} title="garbage bag icons"/>
                    </button> */}
                    <button className="toDoButtons" onClick={() => handleDelete(toDo)}>
                      <img  className="icon" src={deleteIcon} title="garbage bag icons"/>
                    </button>
                </div>
            </div>
          ))}
        
      </section>
     
    </div>
  );
};
export default ToDo;
