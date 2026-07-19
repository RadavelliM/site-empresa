import { useEffect } from "react";
import { useNavigate } from "react-router";

export default function SPA() {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/404");

    document.title = "Página Não Encontrada";
  });

  return (
    <div>
      <h1>não encontrada</h1>
    </div>
  );
}
