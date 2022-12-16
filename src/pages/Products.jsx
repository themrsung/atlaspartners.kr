import { useState } from "react"
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

    const [products, setProducts] = useState(productsStore.getState().value)
    productsStore.subscribe(() => {
        setProducts(productsStore.getState().value)
    })

    return (
        <div className="Products">
            <Header type="BarHeader" activePage="Products" />
            <div className="Wrap" style={wrapStyle}>
                <div className="ProductList">
                    {products.map((product) => {
                        return <Product key={product.key} product={product} />
                    })}
                </div>
            </div>
            <Footer />
        </div>
    )
}

export default Products
