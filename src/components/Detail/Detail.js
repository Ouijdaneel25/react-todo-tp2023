import { useContext } from "react";
import { useParams } from "react-router-dom";
import ContextTodo from "../../components/contexte/ContextTodo";

function Detail() {
  const { id } = useParams();
  const { findTodoById } = useContext(ContextTodo);

  const todo = findTodoById(id);

  return (
    <>
      <center>
        <h1 style={{ color: "white",marginLeft: "-9%" }}>Detail</h1>
        <br/>
        <br/>
        <table>
          <tr>
            <td>
              <h4 style={{ color: "white" }}>ID  :</h4>
            </td>
            <td>
              <h4 style={{ color: "white" }}>{id}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 style={{ color: "white" }}>Todo  :</h4>
            </td>
            <td>
              <h4 style={{ color: "white" }}>{todo.todo}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 style={{ color: "white" }}>Priorite  :</h4>
            </td>
            <td>
           
              <h4 style={{ color: "white" }}> { todo.priority===1 ? "lOW" : todo.priority===2 ? "MEDUIM" :"HIGH"}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 style={{ color: "white" }}>Create Todo  :</h4>
            </td>
            <td>
              <h4 style={{ color: "white" }}>{todo.createTodo}</h4>
            </td>
          </tr>
          <tr>
            <td>
              <h4 style={{ color: "white" }}>Update Todo  :</h4>
            </td>
            <td>
              <h4 style={{ color: "white" }}>{todo.updateTodo}</h4>
            </td>
          </tr>
        </table>
      </center>
    </>
  );
}

export default Detail;
