import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";

export default function SPA() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <main>
      <Navbar />
    </main>
  );
}
