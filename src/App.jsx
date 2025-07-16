import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import AboutUs from "./pages/AboutUs";
import MainLayouts from "./layouts/MainLayouts";
import AuthLayout from "./layouts/AuthLayout";
import Login from "./Auth/Login";
import Register from "./Auth/Register";
import Dashboard from "./layouts/Dashboard";
import Sidebar from "./Dashboard/Sidebar";
import TodoList from "./pages/TodoList";
import Store from "./pages/Store";
import Store2 from "./pages/Store2";
import { ThemeProvider } from "@material-tailwind/react";
function App() {
  return (
    <>
      <ThemeProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<MainLayouts />}>
              <Route index element={<Home />} />
              <Route path="/shop" element={<Shop />} />
              <Route path="/about-us" element={<AboutUs />} />
              <Route path="todolist" element={<TodoList />} />
              <Route path="store" element={<Store />} />

              <Route path="Store2" element={<Store2 />} />
            </Route>

            <Route path="/auth" element={<AuthLayout />}>
              <Route path="login" element={<Login />} />
              <Route path="signup" element={<Register />} />
            </Route>

            <Route path="/dashboard" element={<Dashboard />}>
              <Route path="homes" element={<Sidebar />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </>
  );
}

export default App;
