import { useContext, useState } from "react";
import ContextTodo from "../contexte/ContextTodo";
import "./Todo.css";
import TodoForm from "./TodoForm";
import TodoItem from "./TodoItem";

function Todo() {
  const { todoItems, settodoItems } = useContext(ContextTodo);
  const checkTodoItem = (id) => {
    const newItem = todoItems.map((item) =>
      item.id === id ? { ...item, complete: !item.complete } : item
    );
    console.log(newItem);
    newItem.sort((a, b) => a.complete - b.complete);
    settodoItems(newItem);
  };

  // Suppression

  const removeTodoItem = (id) => {
    if (
      window.confirm("Êtes-vous sûr de bien vouloir supprimer cet élément?")
    ) {
      const index = todoItems.findIndex((item) => item.id === id);
      if (index > -1) {
        const newItems = [...todoItems];
        newItems.splice(index, 1);
        settodoItems(newItems);
      }
    } else {
      console.log("cancel");
    }
  };
  // Ajout

  const addTodoItem = (newItem) => {
    settodoItems([...todoItems, newItem]);
  };

  const [searchTerm, setSearchTerm] = useState("");
  const [searchResult, setSearchResult] = useState([]);

  const searchInput = (e) => {
    setSearchTerm(e.target.value);
    if (e.target.value === "") {
      setSearchResult([]);
    }
  };
  const searchTodoItem = () => {
    const result = todoItems.filter((item) =>
      item.todo.toLowerCase().includes(searchTerm.toLowerCase())
    );
    setSearchResult(result);
  };

  const getDate = () => {
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    console.log(date + day + month);
    return `${day}/${month}/${year} ${hours}:${minutes}:${seconds}`;
  };
  const updateTodoItem = (id) => {
    const itemToUpdate = todoItems.find((item) => item.id === id);
    const newItem = prompt("Modifier Todo", itemToUpdate.todo);
    const newPriority = prompt("Modifier Priority", itemToUpdate.priority);

    if (newItem === null || newPriority === null) {
      console.log("tahaja maradi tbadal" + itemToUpdate.todo);
      return;
    } else if (newItem === "") {
      alert("remplir le champ obligatoirement");
    } else {
      const updatedTodoItems = todoItems.map((item) =>
        item.id === id
          ? {
              ...item,
              todo: newItem,
              updateTodo: getDate(),
              priority: parseInt(newPriority, 3),
            }
          : item
      );

      console.log("updatedTodoItems");
      console.log(updatedTodoItems);
      console.log("*********hheellooooo ouijdaaaaaaaaaaane *********");
      settodoItems(updatedTodoItems);
    }
  };

  const searchPrioriteItem = (priority) => {
    const searchedItems = todoItems.filter((item) => item.priority === parseInt(priority));
    setSearchResult(searchedItems);
  };
  
  return (
    <>
      <header className="text-center text-light my-4">
        <h1 className="mb-5">Todo List</h1>
        <input
          type="text"
          className={`form-control m-auto ${
            searchTerm !== "" && searchResult.length === 0
              ? "is-invalid"
              : "is-valid"
          }`}
          name="search"
          placeholder="search todos"
          value={searchTerm}
          onChange={searchInput}
          onKeyDown={searchTodoItem}
          searchTodoItem={searchTodoItem}
        />
        <br />
        <h4 className="mb-5">Search By Priority</h4>
        <button
          style={{
            borderRadius: "26%",
            backgroundColor: "green",
            borderColor: "green",
            width: "31%",
            color: "white",
          }}
          onClick={()=>searchPrioriteItem(3)}
        >
          HIGH
        </button>
        <button
          style={{
            borderRadius: "26%",
            backgroundColor: "orange",
            borderColor: "orange",
            width: "31%",
            color: "white",
          }}
          onClick={()=>searchPrioriteItem(2)}
        >
          MEDUIM
        </button>
        <button
          style={{
            borderRadius: "26%",
            backgroundColor: "yellow",
            borderColor: "yellow",
            width: "31%",
            color: "black",
          }}
          
          onClick={()=>searchPrioriteItem(1)}
        >
          lOW
        </button>
      </header>
      {searchResult.length > 0
        ? searchResult.map((i) => (
            <TodoItem
              item={i}
              key={i.id}
              checkTodoItem={checkTodoItem}
              removeTodoItem={removeTodoItem}
              updateTodoItem={updateTodoItem}
            />
          ))
        : todoItems.map((i) => (
            <TodoItem
              item={i}
              key={i.id}
              checkTodoItem={checkTodoItem}
              removeTodoItem={removeTodoItem}
              updateTodoItem={updateTodoItem}
            />
          ))}
      <TodoForm addTodoItem={addTodoItem} />
      <h6 style={{ color: "white" }}> Nbr Items : {todoItems.length}</h6>
      <h6 style={{ color: "white" }}>
        Nbr Items non complete :{" "}
        {todoItems.filter((item) => !item.complete).length}
      </h6>
    </>
  );
}

export default Todo;
