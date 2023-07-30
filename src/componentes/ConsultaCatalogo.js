import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import ConverteBase64ToImage from "./ConverteBase64ToImage";
import "./styles.css";

const ConsultaTodosProdutos = () => {
  const [produtos, setProdutos] = useState([]);
  const [erro, setErro] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    const consulta = async () => {
      try {
        const resposta = await fetch("http://localhost:8080/api/v1/produtos");
        if (!resposta.ok) {
          throw new Error();
        }
        const dados = await resposta.json(); //retorna um array de objetos json

        //carrega os dados na variavel produto
        setProdutos(dados);
      } catch (error) {
        setErro(error.message);
      }
    };
    consulta();
  }, []);
  const handleVoltar = () => {
    // Navegar para a rota "/home"
    navigate("/home");
  };

  return (
    <div>
      <head>
        <title>
          <h3> Consulta Produtos </h3>
        </title>
      </head>
      <table id="produtos">
        <thead>
          <tr>
            <th>ID</th>
            <th>Descrição</th>
            <th>Custo</th>
            <th>Quant</th>
            <th>Peça</th>
          </tr>
        </thead>
        <tbody>
          {produtos.map((produto) => (
            <tr key={produto.id}>
              <td>{produto.id}</td>
              <td>{produto.descricao}</td>
              <td>{produto.custo}</td>
              <td>{produto.quantidade}</td>
              <td>
                <img
                  src={ConverteBase64ToImage(produto.imagem)}
                  alt="Imagem "
                />
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <p></p>
      <button onClick={handleVoltar}>Voltar</button>
      <p></p>
      {erro && (
        <>
          <p>Erro na consulta: {erro} </p>{" "}
        </>
      )}
    </div>
  );
};

export default ConsultaTodosProdutos;
