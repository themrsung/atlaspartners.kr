import { useParams } from "react-router-dom"
import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import { portfolioStore } from "../redux/reduxStores"

const PortfolioDetails = (props) => {
    let params = useParams()
    const portfolioItem = portfolioStore
        .getState()
        .value.filter((item) => item.key === Number(params["key"]))[0]

    const wrapStyle = {
        height: "94vh",
        backgroundColor: "gray",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "stretch"
    }

    return (
        <div className="PortfolioDetails">
            <Header type="BarHeader" activePage="Products" />
            <div className="Wrap" style={wrapStyle}>
                portfolio item
            </div>
            <Footer />
        </div>
    )
}

export default PortfolioDetails
