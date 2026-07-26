import { useEffect, useState } from "react";
import Buttol from "../buttol/Buttol";
import './buttols.css'

const Buttols = () => {

    const [buttols, setButtols] = useState([]); 

    useEffect(() => {
        fetch('buttols.json')
        .then(res => res.json())
        .then(data => setButtols(data))
    },[])

    return (
        <div>
            <h3>product :{buttols.length}</h3>

            <div className="buttols-container">
                {
                buttols.map(buttol => <Buttol 
                    key={buttol.id}
                    buttol={buttol}
                
                ></Buttol>)
            }
            </div>
        </div>
    );
};

export default Buttols;