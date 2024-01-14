import { Outlet } from "react-router-dom";
import Footer from './assets/Components/Footer';

function App() {
  return (
    <>
        <Outlet />
        <Footer />
        </>
  );
}

export default App;