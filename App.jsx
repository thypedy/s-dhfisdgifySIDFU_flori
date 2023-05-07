import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Sobre from "./pages/Sobre";
import Contato from "./pages/Contato";
import Login from "./pages/Login";
import Produtos from "./pages/Produtos";


function App() {
  return (
      <div>
        <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/sobre" element={<Sobre/>}/>
          <Route path="/contato" element={<Contato/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/produtos" element={<Produtos/>}/>
        </Routes>
        </BrowserRouter>
        
        
      </div>
  )
}

export default App
