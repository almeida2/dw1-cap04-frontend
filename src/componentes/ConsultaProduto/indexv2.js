import React, { useState, useEffect } from "react";
import axios from "axios";
import "./styles.css";

const ConsultaCatalogo = () => {
  const [imagem1, setImagem1] = useState([]);

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
        setImagem1(imageUrl);
        setErro(null);
      } catch (error) {
        setErro("Erro ao carregar a imagem: " + error.message);
        console.log("Erro ao carregar a imagem:", error);
      }
    };
    carregarImagem();
  }, []);
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch(
          "http://localhost:8080/api/v1/produtos/imadb"
        );
        const data = await response.json();

        // Atualizando o estado com os dados do servidor
        setProducts(data);
      } catch (error) {
        console.error("Erro ao carregar os produtos:", error);
      }
    }

    fetchProducts();
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
            <Converte base64String={products.imagem} />
            <img src={imagem1} alt="Imagem " />
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
