import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"

const Portfolio = () => {
    const wrapStyle = {
        height: "94vh",
        backgroundColor: "gray",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "stretch"
    }

    return (
        <div className="Portfolio">
            <Header type="BarHeader" activePage="Portfolio" />
            <div className="Wrap" style={wrapStyle}>
                wrap
            </div>
            <Footer />
        </div>
    )
}

export default Portfolio
