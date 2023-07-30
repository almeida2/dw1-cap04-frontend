import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const ConsultaCatalogo = () => {
  const [nomeArquivo, setNomeArquivo] = useState("");
  const [imagem, setImagem] = useState("");
  const [erro, setErro] = useState(null);
  useEffect(() => {
    const carregarImagem = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/produtos/imadb/produto1.jpg`,
          {
            responseType: "arraybuffer"
          }
        );

        const blob = new Blob([response.data], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(blob);
        setImagem(imageUrl);
        setErro(null);
      } catch (error) {
        setErro("Erro ao carregar a imagem: " + error.message);
        console.log("Erro ao carregar a imagem:", error);
      }
    };
    carregarImagem();
  }, []);

  return (
    <div className="tudo">
      <h3>Consulta Catalogo </h3>
      <section class="container">
        <article class="card">
          <header>
            <h1>Nome do produto lorem modelo 2345</h1>
          </header>
          <figure>
            <img src={imagem} alt="Imagem " />
          </figure>
          <ul>
            <li>
              <strong> Descrição </strong>Componente de maquina{" "}
            </li>
            <li>
              <strong>Preço:</strong> <span>R$1.019,99</span>(ou 10 x R101,99)
            </li>
          </ul>
          <footer>
            <a href="#">Comprar</a>
          </footer>
        </article>
      </section>
    </div>
  );
};
export default ConsultaCatalogo;
