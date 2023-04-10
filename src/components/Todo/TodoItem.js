import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faBan,
  faCheck,
  faPenToSquare,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import { faCircle } from "@fortawesome/free-solid-svg-icons";

function TodoItem(props) {
  return (
    <>
      <ul className="list-group todos mx-auto text-light">
        <li
          style={{
            backgroundColor: props.item.complete ? "#3c3b45" : "transparent",
          }}
          className={`list-group-item d-flex justify-content-between align-items-center`}
        >
          <Link
            to={`/detail/${props.item.id}`}
            style={{ textDecoration: "none", color: "white" }}
          >
            <span>{props.item.todo}</span>
          </Link>
          <div>
            {props.item.priority === 1 && (
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "yellow", marginRight: "10px" }}
              />
            )}
            {props.item.priority === 2 && (
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "orange", marginRight: "10px" }}
              />
            )}
            {props.item.priority === 3 && (
              <FontAwesomeIcon
                icon={faCircle}
                style={{ color: "green", marginRight: "10px" }}
              />
            )}
            <FontAwesomeIcon
              onClick={() => props.checkTodoItem(props.item.id)}
              style={{
                marginRight: "0.3em",
              }}
              icon={props.item.complete ? faCheck : faBan}
              className="pointer"
            />
            <FontAwesomeIcon
              style={{
                marginRight: "0.3em",
              }}
              icon={faPenToSquare}
              className="pointer"
              onClick={() => props.updateTodoItem(props.item.id)}
            />
            <FontAwesomeIcon
              icon={faTrashAlt}
              className="pointer"
              onClick={() => props.removeTodoItem(props.item.id)}
            />
          </div>
        </li>
      </ul>
    </>
  );
}

export default TodoItem;
