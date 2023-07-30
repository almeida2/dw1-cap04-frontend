import React from "react";

function Converte({ base64String }) {
  // Cria uma URL temporária a partir da string base64
  const imageUrl = `data:image/jpg;base64,${base64String}`;

  return <img src={imageUrl} alt="Imagem" />;
}

export default Converte;
