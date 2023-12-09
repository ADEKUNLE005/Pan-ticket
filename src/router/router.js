import { createBrowserRouter } from "react-router-dom";
import Get from "../Get/Get";
import Ticket from "../ticket/ticket";
import App from "../App";
import Home from "../Pages/Home";
import Get2 from "../Get2/Get2";
import Get3 from "../Get3/Get3";
export const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      { index: true, element: <Home /> },
      { path: "/Home", element: <Home /> },
      { path: "/Ticket", element: <Ticket /> },
      { path: "/Get", element: <Get /> },
      { path: "/Get2", element: <Get2 /> },
      { path: "/Get3", element: <Get3 /> },

    ],
  },
]);
