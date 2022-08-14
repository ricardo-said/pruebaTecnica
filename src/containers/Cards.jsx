import React from 'react';
import { Link} from 'react-router-dom';
import '../style/styleContainers/Cards.css';

import retirar from "../assets/imgs/money.png";
import depositar from "../assets/imgs/depositar.png";
import info from "../assets/imgs/info.png";


const Cards = () => {
    return (
        <>
    <section className="cotainerMainCard">
        
        <div className="containerCard">
            <div className="img">
                <img src={depositar} alt=""/>
            </div>
            <Link className='link' to="/deposito">Depositar</Link>
        </div>
        <div className="containerCard">
            <div className="img">
                <img src={retirar} alt=""/>
            </div>
            <Link className='link' to="/retiro">Retirar</Link>
        </div>
        <div className="containerCard">
            <div className="img">
                <img src={info} alt=""/>
            </div>
            <Link className='link' to="/informacion">Informacion</Link>
        </div>
    </section>
        </>

    );
}

export default Cards;