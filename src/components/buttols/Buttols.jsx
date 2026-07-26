import { useEffect, useState } from "react";
import Buttol from "../buttol/Buttol";
import './buttols.css'

const Buttols = () => {
    //buttol variable
    const [buttols, setButtols] = useState([]); 

    //cart variable
    const [cart, setCart] = useState([]);

    useEffect(() => {
        fetch('buttols.json')
        .then(res => res.json())
        .then(data => setButtols(data))
    },[])

    const handelAddToCart = buttol => {
        const newCart = [...cart, buttol];
        setCart(newCart)
    }

    return (
        <div>
            <h3>product :{buttols.length}</h3>
            <h4>cart: {cart.length}</h4>

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