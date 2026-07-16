import SPA from "./SPA/spa";
import NotFound from "./components/notFound/notFound";

import { Route, Routes, BrowserRouter } from "react-router";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<SPA />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
