import { useEffect } from "react";

import Navbar from "../components/navbar/navbar";
import NumberCall from "../ui/calls/callToActionNumber/callToActionNumber";

export default function SPA() {
  useEffect(() => {
    document.title = "Home";
  });

  return (
    <main>
      <Navbar />

      <NumberCall />
    </main>
  );
}
