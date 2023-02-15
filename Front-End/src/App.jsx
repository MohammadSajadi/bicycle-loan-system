import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Home } from "./pages/home/Home";
import { List } from "./pages/lists/List";
import {Bike} from "./pages/bike/Bike"

export function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bikes" element={<List />} />
        <Route path="/bikes/:id" element={<Bike />} />
      </Routes>
    </BrowserRouter>
  );
}
