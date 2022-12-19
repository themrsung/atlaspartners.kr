import { useEffect, useState } from "react"
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
    const [users, setUsers] = useState([])

    useEffect(() => {
        async function getRecords() {
            const response = await fetch(
                `https://atlaspartners-kr-backend.vercel.app/user/`
            )

            if (!response.ok) {
                const message = `An error occurred: ${response.statusText}`
                window.alert(message)
                return
            }

            const records = await response.json()
            setUsers(records)
        }
        getRecords()
    }, [users.length])

    return (
        <div className="App">
            <Header />
            <button onClick={console.log(users)}>get users</button>
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
