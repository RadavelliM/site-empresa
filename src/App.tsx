import { Route, Routes, BrowserRouter } from "react-router";

import NotFound from "./components/notFound/notFound";
import SPA from "./SPA/spa";

import Shop from "./components/shop/shop";
import Products from "./components/products/products";

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={<NotFound />}></Route>
        <Route path="/" element={<SPA />}></Route>
        <Route path="/carrinho" element={<Shop />}></Route>
        <Route path="/produtos" element={<Products />}></Route>
      </Routes>
    </BrowserRouter>
  );
}
