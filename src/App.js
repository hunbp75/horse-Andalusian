import { BrowserRouter, Route, Routes, Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";
import "./App.css";
import Home from "./components/Home";
import Main from "./components/Main";
import AboutUs from "./components/AboutUs";
import Horses from "./components/Horses";
import ForSale from "./components/ForSale";
import ContactUs from "./components/ContactUs";
import Gallery from "./components/Gallery";

const Layout = () => (
  <div>
    <NavBar />
    <Main>
      <Outlet />
    </Main>
  </div>
);

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/AboutUs" element={<AboutUs />} />
          <Route path="/Horses" element={<Horses />} />
          <Route path="/ForSale" element={<ForSale />} />
          <Route path="/Gallery" element={<Gallery />} />
          <Route path="/ContactUs" element={<ContactUs />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
