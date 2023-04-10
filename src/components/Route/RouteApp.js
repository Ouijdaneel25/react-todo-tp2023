import { Navigate, Route, Routes } from "react-router-dom";
import About from "../About/About";
import Todo from "../Todo/Todo";
import Detail from "../Detail/Detail";

const RouteApp = () => {
  return (
    <Routes>
      <Route path="*" element={<Navigate replace to="/todo" />} />
      <Route path="/about" element={<About />} />
      <Route path="/todo" element={<Todo />} />
      {/* <Route path="/detail/:id/:n/:c" element={<Detail />} /> */}
      <Route path="/detail/:id" element={<Detail />} />
    </Routes>
  );
};

export default RouteApp;
