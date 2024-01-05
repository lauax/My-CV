import { Outlet } from "react-router-dom";
import Footer from './assets/Components/Footer';
import TransparentHeader from './assets/Components/TransparentHeader';

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