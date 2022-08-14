import React,{useState} from 'react';
import Layout from './Layout';
import Retirar from "../assets/imgs/cash.png";
import '../style/Deposito.css';

const Retiro = ({cuenta, setCuenta})=> {
  const[deposito, setDeposito] = useState(0)
  const [subTotal, setSubTotal] = useState(cuenta);
  // definir el state
 
const sumaFn = e =>{
  e.preventDefault();
  setCuenta(cuenta -deposito );
  setSubTotal(cuenta - subTotal  );
  
}
  return (
    <>
    <Layout/>
    <div className="containerVista">
        <img src={Retirar} alt=""/>
        <div className="contenedorSaldo">
            <div className="saldoActualizado">
                <h3>Cuanto quieres retirar</h3>
                <span>&#36;<input type="number"
                onChange={e=> 
                  {setDeposito(parseInt(e.target.value));
                  setSubTotal(cuenta-parseInt(e.target.value)) }}
                /></span>
            </div>
            <div className="contenedorOperaciones">
                <p>Saldo Actual:</p>
                <p>&#36;{cuenta}</p>
                <p>Subtotal:</p>
                <p>&#36;{subTotal}</p>
            </div>
            <button onClick={sumaFn}>Continuar</button>
        </div>

    </div>
    </>
  )
}

export default Retiro