import { CssBaseline } from "@mui/material";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Chats from "./pages/Chats";
import Login from "./pages/Login";
import ChatRoom from "./pages/ChatRoom";
import SignUp from "./pages/SignUp";


const router = createBrowserRouter([
  {
    path: "/",
    element: <SignUp/>,
  },
  {
    path: "/login",
    element: <Login/>,
  },
  {
    path: "/chat-room/:id",
    element: <ChatRoom />,
  },
  {
    path: "/chats",
    element: <Chats/>
  }
]);
function App() {
  return (
    <>
      <CssBaseline />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
