import { BrowserRouter } from "react-router-dom";
import Navbar from "./components/Navbar";
import AnimatedRoutes from "./components/AnimatedRoutes";

function App() {  
  return (
    <>
      <BrowserRouter>
        <Navbar pages={["Home", "About"]}/>
        <AnimatedRoutes/>
      </BrowserRouter>
    </>
  );
}

export default App;
