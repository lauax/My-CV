import { Outlet } from "react-router-dom";
import Chat from "./Components/Chat";
import Footer from './Components/Footer';
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  return (
    <>
        <Outlet />
        <Chat/>
        <ScrollToTop></ScrollToTop>
        <Footer />
        </>
  );
}

export default App;