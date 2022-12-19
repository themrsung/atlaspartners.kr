import { useState } from "react"
import { Link } from "react-router-dom"
import { hashPassword } from "../auth/hash"
import { getUsersState, addUser } from "../redux/store"

const Register = function () {
    const [userId, setUserId] = useState("")
    const [userPassword, setUserPassword] = useState("")

    const onRegisterFormSubmit = function (event) {
        event.preventDefault()
        const user = {
            id: userId,
            password: hashPassword(userPassword)
        }

        let userIdIsAlreadyTaken = false
        getUsersState().forEach((user) => {
            if (user.id === userId) {
                userIdIsAlreadyTaken = true
            }
        })

        if (!userIdIsAlreadyTaken) {
            addUser(user)
            alert("회원가입 성공")
        } else {
            alert("이미 존재하는 ID입니다.")
        }
    }

    return (
        <main className="Register">
            <form className="RegisterForm" onSubmit={onRegisterFormSubmit}>
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
            <Link to="/login">go to login</Link>
            <button
                onClick={() => {
                    console.log(getUsersState())
                }}
            >
                show user db
            </button>
        </main>
    )
}

export default Register
