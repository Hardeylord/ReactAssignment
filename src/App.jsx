import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop"
import AboutUs from "./pages/AboutUs";
import MainLayouts from "./layouts/MainLayouts";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Dashboard from "./layouts/Dashboard";
import Sidebar from "./Dashboard/Sidebar";
import TodoList from "./pages/TodoList";

function App() {
  return (
    <>
      <BrowserRouter>
      <Routes>

        <Route path="/" element={<MainLayouts/>}>
          <Route index element={<Home />}/>
          <Route path="/shop" element={<Shop />}/>
          <Route path="/about-us" element={<AboutUs/>} />
          <Route path="todolist" element={<TodoList />}/>
        </Route>

        <Route path="/auth" element={<AuthLayout/>}>
          <Route path="login" element={<Login/>} />
          <Route path="signup" element={<Register/>} />
        </Route>

        <Route path="/dashboard" element={<Dashboard/>}>
          <Route path="homes" element={<Sidebar/>}/>
        </Route>

      </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
