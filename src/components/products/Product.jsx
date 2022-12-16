const Product = (props) => {
    return (
        <div className="Product">
            <h3>{props.product.name}</h3>
            <p>{props.product.description}</p>
            <p>{props.product.price}</p>
        </div>
    )
}

export default Product
