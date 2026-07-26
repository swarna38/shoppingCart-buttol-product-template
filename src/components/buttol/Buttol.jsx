import './buttol.css'

const Buttol = ({buttol, handelAddToCart, handelRemoveFromCart}) => {

    const {id, title, stock, image, price, rating} = buttol;
    return (
        <div className="buttol">
            
            <h3>Name: {title}</h3>
            <img src={image} alt="" />
            <h3>Stock: {stock}</h3>
            <h3>Price: {price}</h3>
            <h3>Rating: {rating}</h3>
            <button onClick={() => handelAddToCart(buttol)}>Purches</button>
            <button onClick={() => handelRemoveFromCart(id)}>Remove</button>
        </div>
    );
};

export default Buttol;