import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./Components/Header/NavBar";
import Headroom from "react-headroom";
import Homepage from "./Components/Main/Homepage";
import Footer from "./Components/Footer/Footer";
function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Headroom className="headroom">
          <NavBar></NavBar>
        </Headroom>
        <Homepage></Homepage>
        <Footer></Footer>
      </div>
    </BrowserRouter>
  );
}

export default App;
