import { render, fireEvent, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import { BrowserRouter as Router } from "react-router-dom";
import Home from "./Home";
import ConsultaTodosProdutos from "./componentes/ConsultaTodosProdutos";
describe("Home Component", () => {
  test("ct01 - verifica a existencia do home", () => {
    //dado que o componente foi instanciado
    render(
      <Router>
        <Home />
      </Router>
    );
    //quando procuro o elemento html botao
    const txtLabel = screen.getByText(/Home/i);
    //entao o botao eh localizado
    expect(txtLabel).toBeInTheDocument();
  });
  test("ct02 - click no link cadastrar produto navega corretamente", () => {
    render(
      <Router>
        <Home />
      </Router>
    );
    const linkElement = screen.getByText("Cadastrar produto");
    fireEvent.click(linkElement);
    //entao verifica se a rota correta foi ativada apos o click
    expect(window.location.pathname).toBe("/produtos/cadastrar");
  });
});

describe("Componente ConsultaTodosProdutos ", () => {
  test("ct03 renderiza tabela com dados", async () => {
    // Renderiza o componente com dados falsos para testar a tabela
    render(
      <Router>
        <Home />
        <ConsultaTodosProdutos />
      </Router>
    );

    // Simula o clique no link "Consulta todos produtos"
    const linkElement = screen.getByText("Consulta todos produtos");
    linkElement.click();

    // Aguarda até que os dados da tabela sejam carregados
    const tableElement = await screen.findByRole("table");

    // Verifica se os dados são exibidos corretamente na tabela
    expect(tableElement).toBeInTheDocument();
    // Verifica os dados carregados na tabela
    await screen.findByText(/eletrobomba/i);
    // Verifica a quantidade de itens na tabela 3 produtos + linha de cabeçalho
    const dataRows = screen.getAllByRole("row");
    expect(dataRows.length).toBe(4);
    //expect(dataRows.length).toBeGreaterThan(1);
    // Espera-se que haja pelo menos 1 item + cabeçalho na tabela
  });
});
