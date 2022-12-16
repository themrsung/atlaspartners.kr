import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"

const Products = () => {
    const wrapStyle = {
        height: "94vh",
        backgroundColor: "gray",

        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "stretch"
    }

    return (
        <div className="Products">
            <Header type="BarHeader" activePage="Products" />
            <div className="Wrap" style={wrapStyle}>
                wrap
            </div>
            <Footer />
        </div>
    )
}

export default Products
