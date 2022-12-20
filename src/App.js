import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./pages/Login"
import Newsfeed from "./pages/Newsfeed"
import Register from "./pages/Register"
import { getPostsState, getUsersState } from "./redux/store"

function App() {
    const [users, setUsers] = useState(getUsersState)

    return (
        <div className="App">
            <BrowserRouter>
                <Header />
                <Routes>
                    <Route path="/" element={<Newsfeed />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                </Routes>
                <Footer />
            </BrowserRouter>
        </div>
    )
}

export default App
