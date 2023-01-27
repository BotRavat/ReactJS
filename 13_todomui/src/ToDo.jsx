import { useState } from "react";
import Button from "@mui/material/Button";
import AddIcon from "@mui/icons-material/Add";
import List from "./List";

const ToDo = () => {
  const [item, setItem] = useState("");
  const [fitem, fsetItem] = useState([]);

  const OnChange = (e) => {
    setItem(e.target.value);
  };

  const Sub = () => {
    fsetItem((preValue) => {
      return [...preValue, item];
    });

    setItem("");
  };

  const DeleteItem = (id) => {
    fsetItem((preValue) => {
      return preValue.filter((arr, index) => {
        return index !== id;
      });
    });
  };

  return (
    <>
      <div classNameName="main_div">
        <div classNameName="center_div">
          <h1> ToDo List</h1>
          <input
            type="text"
            placeholder="add an item"
            onChange={OnChange}
            value={item}
          />
          <Button classNameName="newBtn" onClick={Sub}>
            <AddIcon />
          </Button>

          <ul>
            {fitem.map((ival, index) => {
              return (
                <List key={index} tx={ival} id={index} onSelec={DeleteItem} />
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};
export default ToDo;
