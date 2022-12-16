import { Link } from "react-router-dom"
import "../../style/Header.css"

const Header = (props) => {
    const navListInactiveButtonClassName = "Button BigButton MenuButton"
    const navListActiveButtonClassName =
        navListInactiveButtonClassName + " ActiveMenuButton"

    return (
        <header className="Header">
            <div className="HeaderLeft">
                <h1 className="HeaderLeftTitle">Atlas Partners 개발중</h1>
            </div>
            <div className="HeaderRight">
                <nav className="HeaderRightNav">
                    <ul className="HeaderRightNavList">
                        <li>
                            <Link to="/">
                                <button
                                    className={
                                        props.activePage === "Home"
                                            ? navListActiveButtonClassName
                                            : navListInactiveButtonClassName
                                    }
                                >
                                    Home
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/portfolio">
                                <button
                                    className={
                                        props.activePage === "Portfolio"
                                            ? navListActiveButtonClassName
                                            : navListInactiveButtonClassName
                                    }
                                >
                                    Porfolio
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/products">
                                <button
                                    className={
                                        props.activePage === "Products"
                                            ? navListActiveButtonClassName
                                            : navListInactiveButtonClassName
                                    }
                                >
                                    Products
                                </button>
                            </Link>
                        </li>
                        <li>
                            <Link to="/contact">
                                <button
                                    className={
                                        props.activePage === "Contact"
                                            ? navListActiveButtonClassName
                                            : navListInactiveButtonClassName
                                    }
                                >
                                    Contact
                                </button>
                            </Link>
                        </li>
                    </ul>
                </nav>
                <div className="HeaderRightProfileMenu">
                    <ul className="HeaderRightProfileMenuList">
                        <li>
                            <button className="Button BigButton SecondaryButton">
                                Log In
                            </button>
                        </li>
                        <li>
                            <button className="Button BigButton SecondaryButton">
                                Sign Up
                            </button>
                        </li>
                    </ul>
                </div>
            </div>
        </header>
    )
}

export default Header
