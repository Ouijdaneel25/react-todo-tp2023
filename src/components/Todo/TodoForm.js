import { useState } from "react";

const TodoForm = ({ addTodoItem }) => {
  const generateId = () => Math.floor(Math.random() * 1000);

  const [newTodo, setNewTodo] = useState("");
  const [selectedPriority, setSelectedPriority] = useState(0);
  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };
  const addTodo = (event) => {
    event.preventDefault();
    if (selectedPriority===1 || selectedPriority===2 || selectedPriority===3) {
      if (newTodo.trim()) {
        addTodoItem({
          id: generateId(),
          todo: newTodo.trim(),
          complete: false,
          createTodo: getDate(),
          updateTodo: null,
          priority: selectedPriority,
        });
        setNewTodo("");
        clickPriorite(selectedPriority)
        console.log(newTodo);
        console.log(clickPriorite(selectedPriority));
      }
      
      //console.log(addTodoItem())
    } else {
      alert("Veuillez sélectionner une priorité avant d'ajouter la tâche");
    }
  };
  
  const newTodoChange = (event) => {
    setNewTodo(event.target.value);
  };

  const clickPriorite = (priority) => {
    setSelectedPriority(priority);
  };

  return (
    <>
      <form className="add text-center my-4" onSubmit={addTodo}>
        <label htmlFor="add" className="add text-light">
          Add a new todo
        </label>
        <h6 style={{ color: "white" }}>Choose a priority level:</h6>
        <center>
          <table>
            <tbody>
              <tr>
                <td>
                  <button
                    className={`btn btn-sm ${
                      selectedPriority === 1
                        ? "btn-warning"
                        : "btn-outline-warning"
                    }`}
                    style={{
                      borderRadius: "64%",
                      backgroundColor: "yellow",
                      borderColor: "yellow",
                      color: "black",
                    }}
                    onClick={() => clickPriorite(1)}
                  >
                    1
                  </button>
                </td>
                <td>
                  <button
                    className={`btn btn-sm ${
                      selectedPriority === 2
                        ? "btn-warning"
                        : "btn-outline-warning"
                    }`}
                    style={{
                      borderRadius: "64%",
                      backgroundColor: "orange",
                      borderColor: "orange",
                      color: "white",
                    }}
                    onClick={() => clickPriorite(2)}
                  >
                    2
                  </button>
                </td>
                <td>
                  <button
                    className={`btn btn-sm ${
                      selectedPriority === 3
                        ? "btn-warning"
                        : "btn-outline-warning"
                    }`}
                    style={{
                      borderRadius: "64%",
                      backgroundColor: "green",
                      borderColor: "green",
                      color: "white",

                    }}
                    onClick={() => clickPriorite(3)}
                  >
                    3
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </center>
        <br />
        <input
          type="text"
          className="form-control m-auto"
          name="add"
          id="add"
          value={newTodo}
          onChange={newTodoChange}
          onKeyPress={(event) => {
            if (event.key === "Enter") {
              addTodo(event);
            }
          }}
        />
      </form>
    </>
  );
};

export default TodoForm;
