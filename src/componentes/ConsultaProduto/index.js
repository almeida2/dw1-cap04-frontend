import React, { useEffect, useState } from "react";
import "./styles.css";

function ProductList() {
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
    <div>
      <h1>Produtos</h1>
      <div className="produtos-container">
        {products.map((product) => (
          <div key={product.id} className="produto-item">
            <h3>{product.descricao}</h3>
            <p>{product.categoria}</p>
            <p>{product.custo}</p>
            <Converte base64String={products.imagem} />
            <img
              src={URL.createObjectURL(
                new Blob([product.imagem], { type: "image/jpeg" })
              )}
              alt={product.descricao}
              width="200"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
