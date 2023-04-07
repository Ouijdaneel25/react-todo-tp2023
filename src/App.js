import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.css";
import "./App.css";
import FloatingButton from "./components/UI/FloatingButton";
import Login from "./components/Login/Login";
import { BrowserRouter } from "react-router-dom";
import RouteApp from "./components/Route/RouteApp";
import ContextTodo from "./components/contexte/ContextTodo";

function App() {
  const [loginIn, setlogin] = useState(false);
  const logout = () => {
    setlogin(false);
  };
  const loginn = () => {
    setlogin(true);
  };
  const generateId = () => Math.floor(Math.random() * 1000);
  const [todoItems, settodoItems] = useState([
    {
      id: generateId(),
      todo: "Read books",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Journaling",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Make Dinner",
      complete: false,
    },
    {
      id: generateId(),
      todo: "Push-ups",
      complete: false,
    },
  ]);
  return (
    <BrowserRouter>
      <div className="container">
        <ContextTodo.Provider value={{todoItems,settodoItems}}>
          {loginIn ? (
            <>
              <FloatingButton logout={logout} />

              <RouteApp />
            </>
          ) : (
            <Login loginn={loginn} />
          )}
        </ContextTodo.Provider>
      </div>
    </BrowserRouter>
  );
}

export default App;
