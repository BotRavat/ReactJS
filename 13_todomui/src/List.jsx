import Button from "@mui/material/Button";
import DeleteForeverIcon from "@mui/icons-material/DeleteForever";

const List = (props) => {
  return (
    <>
      <div>
        <span>
          <Button
            onClick={() => {
              props.onSelec(props.id);
            }}
          >
            <DeleteForeverIcon />
          </Button>
        </span>
        <li>{props.tx}</li>
      </div>
    </>
  );
};

export default List;
