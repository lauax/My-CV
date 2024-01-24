import { Outlet } from "react-router-dom";
import Chat from "./assets/Components/Chat";
import Footer from './assets/Components/Footer';

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