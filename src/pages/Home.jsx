import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import logo from "../logo.svg"
import "../style/Home.css"

const Home = () => {
    const wrapStyle = {
        height: "94vh",
        backgroundColor: "gray",

        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "stretch"
    }

    const wrapLeftStyle = {
        marginLeft: "5%",
        marginRight: "auto"
    }

    const wrapRightStyle = {
        marginRight: "10%",
        marginLeft: "auto",

        textAlign: "right"
    }

    return (
        <div className="Home">
            <Header type="BarHeader" activePage="Home" />
            <div className="Wrap" style={wrapStyle}>
                <div className="WrapLeft" style={wrapLeftStyle}>
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="WrapRight" style={wrapRightStyle}>
                    <h1>안녕하세요!</h1>
                    <h3>ATLAS PARTNERS에 오신 것을 환영합니다.</h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
