import React, { Fragment } from 'react';
import '../style/styleComponents/EstadoDeCuenta.css';
import avatar from "../assets/imgs/avatar1.png";

const CartaSaldo = ({cuenta}) => {
    return (
        <Fragment>
            <div className="componenteSaldo">
                <img src={avatar} alt="" />
                <div className="saldoActual">
                    <h3>Saldo</h3>
                    <p> <span>&#36; </span> {cuenta}</p>
                </div>
            </div>

        </Fragment>
    );
}

export default CartaSaldo;