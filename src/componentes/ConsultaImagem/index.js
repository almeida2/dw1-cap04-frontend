import { useState, useEffect } from "react";
import axios from "axios";
function ConsultaImagem(props) {
  const [imagem, setImagem] = useState("");
  const [erro, setErro] = useState(null);
  useEffect(() => {
    const consulta = async () => {
      try {
        const response = await axios.get(
          `http://localhost:8080/api/v1/produtos/imadb/2/id`,
          {
            responseType: "arraybuffer"
          }
        );

        const blob = new Blob([response.data], { type: "image/jpeg" });
        const imageUrl = URL.createObjectURL(blob);
        setImagem(imageUrl);
      } catch (error) {
        setErro(error.message);
      }
    };
    consulta();
  }, []);
}
export default ConsultaImagem;
