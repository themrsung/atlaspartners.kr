import axios from "axios"
import { useEffect, useState } from "react"
import { Link } from "react-router-dom"
import { hashPassword } from "../auth/hash"

const Login = function () {
    const [userId, setUserId] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const [users, setUsers] = useState([])

    const fetchUsers = async () => {
        const { data } = await axios.get("http://localhost:3001/users")
        setUsers(data)
    }

    useEffect(() => {
        fetchUsers()
    })

    const onLoginFormSubmit = function (event) {
        event.preventDefault()
        const user = users.filter((user) => user.id === userId)[0]
        if (user) {
            if (user.password === hashPassword(userPassword)) {
                alert("로그인 성공")
                return
            }
        }

        alert("아이디와 비밀번호를 확인해주세요.")
    }

    return (
        <main className="Login Wrap">
            <form className="LoginForm" onSubmit={onLoginFormSubmit}>
                <label>
                    <h3>ID</h3>
                </label>
                <input
                    type="text"
                    value={userId}
                    onChange={(event) => {
                        setUserId(event.target.value)
                    }}
                ></input>
                <label>
                    <h3>PASSWORD</h3>
                </label>
                <input
                    type="password"
                    value={userPassword}
                    onChange={(event) => {
                        setUserPassword(event.target.value)
                    }}
                ></input>
                <button type="submit">로그인</button>
            </form>
            <Link to="/register">go to register</Link>
        </main>
    )
}

export default Login
