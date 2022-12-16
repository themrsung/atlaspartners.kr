import Product from "../components/products/Product"
import Footer from "../components/shared/Footer"
import Header from "../components/shared/Header"
import { productsStore } from "../redux/reduxStores"

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
                <div className="ProductList">
                    {productsStore.getState().value.map((product) => {
                        return <Product product={product} />
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products
