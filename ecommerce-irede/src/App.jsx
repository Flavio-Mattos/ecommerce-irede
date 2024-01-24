import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home";
import Cadastro from "./pages/Cadastro";
import Login from "./pages/login";
import Pedidos from "./pages/pedidos";
import Footer from "./components/Footer";

function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/cadastro" element={<Cadastro />}></Route>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/pedidos" element={<Pedidos />}></Route>
      </Routes>
    </BrowserRouter>
    <Footer/>

    </>
  );
}

export default App;
