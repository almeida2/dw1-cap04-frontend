import Home from "./Home";
import "./styles.css";
//import DownloadImagem from "./componentes/DownloadImagem";
import ConsultaCatalogo from "./componentes/ConsultaCatalogo";
import CadastrarProduto from "./componentes/CadastrarProduto";
import UploadImagem from "./componentes/UploadImagem";

import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route index element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/produtos/catalogo" element={<ConsultaCatalogo />} />
        <Route path="/produtos/cadastrar" element={<CadastrarProduto />} />
        <Route path="/produtos/upload" element={<UploadImagem />} />
      </Routes>
    </Router>
  );
};
export default App;
