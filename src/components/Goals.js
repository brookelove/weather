import * as React from "react";

const Goals = () => {
  return (
    <div>
      <h1>Goals</h1>
      <section>
        {/* this is the area where user can write the notes for the day */}
        <div>
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
        </div>
        <div>
          <input type="checkbox"></input>
          <input type="input"></input>
          <button>Trash</button>
        </div>
      </section>
      <button>+</button>
    </div>
  );
};
export default Goals;
