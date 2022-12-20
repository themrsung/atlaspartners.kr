import { useState } from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Footer from "./components/Footer"
import Header from "./components/Header"
import Login from "./pages/Login"
import Newsfeed from "./pages/Newsfeed"
import Register from "./pages/Register"
import { getUsersState } from "./redux/store"

function App() {
    const [users, setUsers] = useState(getUsersState)

    // useEffect(() => {
    //     async function getRecords() {
    //         const response = await fetch(
    //             "http://backend.atlaspartners.kr/user",
    //             {
    //                 method: "GET",
    //                 mode: "no-cors",
    //                 headers: {
    //                     "Access-Control-Allow-Origin": "*",
    //                     "Access-Control-Allow-Headers": "*"
    //                 }
    //             }
    //         )

    //         if (!response.ok) {
    //             const message = `An error occurred: ${response.statusText}`
    //             window.alert(message)
    //             return
    //         }

    //         const records = await response.json()
    //         setUsers(records)
    //     }
    //     getRecords()
    // }, [users.length])

    return (
        <div className="App">
            <Header />
            <button
                onClick={() => {
                    console.log(users)
                }}
            >
                get users
            </button>
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
