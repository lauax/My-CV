import { Outlet } from "react-router-dom";
import Footer from '../Components/Footer';
import TransparentHeader from '../Components/TransparentHeader';

function App() {
  return (
    <>
        <TransparentHeader />
        <Outlet />
        <Footer />
        </>
  );
}

export default App;