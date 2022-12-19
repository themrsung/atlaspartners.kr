import { useState } from "react"
import { Link } from "react-router-dom"
import { hashPassword } from "../auth/hash"
import { getUsersState } from "../redux/store"

const Login = function () {
    const [userId, setUserId] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const onLoginFormSubmit = function (event) {
        event.preventDefault()
        const user = getUsersState().filter((user) => user.id === userId)[0]
        if (user) {
            if (user.password === hashPassword(userPassword)) {
                alert("로그인 성공")
                return
            }
        }

        alert("아이디와 비밀번호를 확인해주세요.")
    }

    return (
        <main className="Login">
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
