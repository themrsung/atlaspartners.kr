import { useState } from "react"
import { Link } from "react-router-dom"
import { nextProductIdStore, productsStore } from "../redux/reduxStores"

const Admin = (props) => {
    const [newProductName, setNewProductName] = useState("")
    const [newProductDescription, setNewProductDescription] = useState("")
    const [newProductPrice, setNewProductPrice] = useState(0)

    const addNewProductHandler = () => {
        const newProduct = {
            key: nextProductIdStore.getState().value,
            name: newProductName,
            description: newProductDescription,
            price: newProductPrice
        }
        productsStore.dispatch({ type: "products/added", payload: newProduct })
    }

    return (
        <div className="Admin">
            <Link to="/products">Go to products</Link>
            <div className="AddProductArea">
                <form
                    className="AddProductForm"
                    onSubmit={(event) => {
                        event.preventDefault()
                        addNewProductHandler()
                    }}
                >
                    <input
                        type="text"
                        placeholder="Product Name"
                        value={newProductName}
                        onChange={(event) => {
                            setNewProductName(event.target.value)
                        }}
                    />
                    <input
                        type="text"
                        placeholder="Product Description"
                        value={newProductDescription}
                        onChange={(event) => {
                            setNewProductDescription(event.target.value)
                        }}
                    />
                    <input
                        type="number"
                        placeholder="Product Price"
                        value={newProductPrice}
                        onChange={(event) => {
                            setNewProductPrice(event.target.value)
                        }}
                    />
                    <button type="submit">추가</button>
                </form>
            </div>
        </div>
    )
}

export default Admin
