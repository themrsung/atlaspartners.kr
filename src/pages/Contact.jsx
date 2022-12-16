import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"

const Contact = () => {
    const wrapStyle = {
        height: "94vh",
        backgroundColor: "gray",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "stretch"
    }
    return (
        <div className="Contact">
            <Header type="BarHeader" activePage="Contact" />
            <div className="Wrap" style={wrapStyle}>
                wrap
            </div>
            <Footer />
        </div>
    )
}

export default Contact
