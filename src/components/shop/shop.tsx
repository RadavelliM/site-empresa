import { useEffect } from "react";

export default function Shop() {
  useEffect(() => {
    document.title = "Carrinho";
  });

  return (
    <div className="shop">
      <h1>carrinho</h1>
    </div>
  );
}
