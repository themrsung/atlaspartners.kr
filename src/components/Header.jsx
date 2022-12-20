import { Link, useNavigate } from "react-router-dom"
import "./Header.css"

const Header = function () {
    let navigate = useNavigate()
    return (
        <header className="Header">
            <div className="HeaderLeft">
                <div
                    className="HeaderTitleContainer"
                    onClick={() => {
                        navigate("/")
                    }}
                >
                    <h1 className="HeaderTitle">Atlas Partners</h1>
                </div>
            </div>
            <div className="HeaderRight">
                <div className="HeaderRightAuthMenu">
                    <Link to="/login">
                        <div className="HeaderRightLoginContainer">
                            <button>Login</button>
                        </div>
                    </Link>
                    <Link to="/register">
                        <div className="HeaderRightRegisterContainer">
                            <button>Register</button>
                        </div>
                    </Link>
                </div>
            </div>
        </header>
    )
}

export default Header
