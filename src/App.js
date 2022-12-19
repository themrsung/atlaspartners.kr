import { BrowserRouter, Route, Routes } from "react-router-dom"
import Admin from "./pages/Admin"
import Contact from "./pages/Contact"
import Home from "./pages/Home"
import Portfolio from "./pages/Portfolio"
import PortfolioDetails from "./pages/PortfolioDetails"
import Products from "./pages/Products"
import "./style/App.css"

function App() {
    return (
        <div className="App">
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route
                        path="/portfolio/details"
                        element={<PortfolioDetails />}
                    />
                    <Route path="/products" element={<Products />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="/admin" element={<Admin />} />
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default App
