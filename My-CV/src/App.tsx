import { Outlet } from "react-router-dom";
import Chat from "./Components/Chat";
import Footer from './Components/Footer';

function App() {
  return (
    <>
        <Outlet />
        <Chat/>
        <Footer />
        </>
  );
}

export default App;