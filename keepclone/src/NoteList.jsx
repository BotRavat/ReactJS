const NoteList = (props) => {
  return (
    <>
      <div classNameName="note">
        <h1> {props.title}</h1>

        <p> {props.content}</p>

        <button
          type="submit"
          onClick={() => {
            props.onSelect(props.id);
          }}
        >
          Remove
        </button>
      </div>
    </>
  );
};

export default NoteList;
