import { useEffect, useState } from "react";
import Buttol from "../buttol/Buttol";
import './buttols.css'

const Buttols = () => {
    //buttol variable
    const [buttols, setButtols] = useState([]); 

    //cart variable
    const [carts, setCart] = useState([]);

    useEffect(() => {
        fetch('buttols.json')
        .then(res => res.json())
        .then(data => setButtols(data))
    },[])

    const handelAddToCart = buttol => {
        const newCart = [...carts, buttol];
        setCart(newCart)
    }

    return (
        <div>
            <h3>product :{buttols.length}</h3>
            <h4>carts: {carts.length}</h4>

            <div className="cart-container">
                {
                    carts.map((cart, index) => (
                      <div key={index}>
                        <img src={cart.image} alt={cart.title} width="50" />
                        <p>{cart.title}</p>
                        </div>
                    ))
                }
            </div>

            <div className="buttols-container">
                {
                buttols.map(buttol => <Buttol 
                    key={buttol.id}
                    buttol={buttol}
                    handelAddToCart={handelAddToCart}
                ></Buttol>)
            }
            </div>
        </div>
    );
};

export default Buttols;