import Nav from "./components/Nav";
import { Routes, Route } from "react-router-dom";
import Slider from "./components/Slider";
import Home from "./pages/Home";
import Categories from "./pages/Categories";
import Contact from "./pages/Contact";
import Products from "./pages/Products";
import Error from "./pages/Error";

function App() {
    return (
        <>
            <Nav />
            <Slider />
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="categories" element={<Categories />} />
                <Route path="contact" element={<Contact />} />
                <Route path="products" element={<Products />} />
                <Route path="*" element={<Error />} />
            </Routes>
        </>
    );
}

export default App;
