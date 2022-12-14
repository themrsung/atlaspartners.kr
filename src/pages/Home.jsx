import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import logo from "../logo.svg"
import "../style/Home.css"

const Home = () => {
    return (
        <div className="Home">
            <Header type="BarHeader" activePage="Home" />
            <div className="Wrap">
                <img src={logo} className="App-logo" alt="logo" />
            </div>
            <Footer />
        </div>
    )
}

export default Home
