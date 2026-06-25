import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../Home/HomePage";
import Catalog from "../../pages/Catalog/components/Catalog/Catalog";
import Header from "../Header/Header";
import Details from "../../pages/DetailsPage/Details/Details";

const App = () => {
  return (
    <BrowserRouter>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/details/:id" element={<Details />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
