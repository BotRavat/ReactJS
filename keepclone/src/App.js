import Header from "./Header";
import Footer from "./Footer";
import CreateNote from "./CreateNote";
import NoteList from "./NoteList";
import { useState } from "react";

const App = () => {
  const [fitem, fsetItem] = useState([]); // or const [fitem, fsetItem] = useState([{ title: " ", content: "" }]); // or const [fitem, fsetItem]=useState([item]);

  const AddNote = (item) => {
    fsetItem((preValue) => {
      return [...preValue, item];
    });
  };

  const DeleteItem = (id) => {
    fsetItem((preValue) => {
      preValue.filter((arr, indx) => {
        return indx !== id;
      });
    });
  };

  return (
    <>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          height: "100vh",
        }}
      >
        <Header />
        <CreateNote passNote={AddNote} />

        {fitem.map((val, index) => {
          return (
            <NoteList
              key={index}
              id={index}
              title={val.title}
              content={val.content}
              onSelect={DeleteItem}
            />
          );
        })}

        <Footer />
      </div>
    </>
  );
};
export default App;
