import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import logo from "../logo.svg"
import "../style/Home.css"

const Home = () => {
    return (
        <div className="Home">
            <Header type="BarHeader" activePage="Home" />
            <div className="Wrap">
                <div className="WrapLeft">
                    <img src={logo} className="App-logo" alt="logo" />
                </div>
                <div className="WrapRight">
                    <h1>안녕하세요!</h1>
                    <h3>ATLAS PARTNERS에 오신 것을 환영합니다.</h3>
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Home
