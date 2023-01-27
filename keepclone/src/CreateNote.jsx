import "./CSS/CreateNote.css";
import { useState } from "react";

const CreateNote = (props) => {
  const [item, setItem] = useState({ title: "", content: "" });

  const OnChange = (e) => {
    const { value, name } = e.target;
    setItem((preValue) => {
      return { ...preValue, [name]: value };
    });
  };

  const OnAdd = (e) => {
   e.preventDefault();
    props.passNote(item);
    setItem({ title: "", content: "" });
  };

  return (
    <>
      <div classNameName="createnote">
        <form onSubmit={OnAdd} classNameName="form">
          <input
            type="text"
            autoComplete="off"
            name="title"
            placeholder="add an item"
            value={item.title}
            onChange={OnChange}
          ></input>
          <textarea
            rows=""
            column=""
            autoComplete="off"
            name="content"
            placeholder="Write a note..."
            value={item.content}
            onChange={OnChange}
          />
          <button type="submit"  id="btn">Add</button>
        </form>
      </div>
    </>
  );
};
export default CreateNote;
