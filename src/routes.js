import Home from "./components/Home";
import Login from "./components/Login";
import Signup from "./components/Signup";

export const routes = [
  {
    path: "/",
    exact: true,
    component: <Home/>,
  },
  {
    path: "/login",
    exact: true,
    component: <Login/>,
  },
  {
    path: "/signup",
    exact: true,
    component: <Signup/>,
  },
];