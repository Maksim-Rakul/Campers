import { BrowserRouter, Route, Routes } from "react-router-dom";
// import Header from "../Header/Header";
import Home from "../Home/HomePage";
import Catalog from "../../pages/Catalog";
import Details from "../../pages/details";
import Header from "../Header/Header";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/details" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
