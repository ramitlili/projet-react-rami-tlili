import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Accueil from "./Pages/Accueil";
import Competences from "./Pages/Competences";
import Apropos from "./Pages/Apropos";
function App() {
  return (

    <> 
        <BrowserRouter>
          <Routes>

          <Route path="/" exact element={<Accueil/>} />
          <Route path="/Competences" exact element={<Competences/>} />
          <Route path="/Apropos" element={<Apropos/>} />

          </Routes>
        </BrowserRouter>
    </>
    
  );
}

export default App;
