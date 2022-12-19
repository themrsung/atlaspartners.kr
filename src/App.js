import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./pages/Login"
import Newsfeed from "./pages/Newsfeed"
import Register from "./pages/Register"

function App() {
    return (
        <div className="App">
            <Header />
            <button onClick={() => {}}>add data to mongodb</button>
            <button>get data from mongodb</button>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Newsfeed />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App
