import { BrowserRouter, Route, Routes } from "react-router-dom"
import Create from "./components/create"
import Edit from "./components/edit"
import Footer from "./components/Footer"
import Header from "./components/Header"
import RecordList from "./components/recordList"
import Login from "./pages/Login"
import Newsfeed from "./pages/Newsfeed"
import Register from "./pages/Register"

function App() {
    return (
        <div className="App">
            <Header />
            <button
                onClick={async function () {
                    const newPerson = { id: 0, name: "James" }
                    await fetch("http://localhost:5000/record/add", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify(newPerson)
                    }).catch((error) => {
                        window.alert(error)
                        return
                    })
                }}
            >
                add data to mongodb
            </button>
            <button>get data from mongodb</button>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Newsfeed />} />
                    <Route path="login" element={<Login />} />
                    <Route path="register" element={<Register />} />
                    <Route exact path="/" element={<RecordList />} />
                    <Route path="/edit/:id" element={<Edit />} />
                    <Route path="/create" element={<Create />} />
                </Routes>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App
