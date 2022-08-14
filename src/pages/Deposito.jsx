import React,{useState} from 'react'
import Depositar from "../assets/imgs/depositar.png";
import '../style/Deposito.css';


const Deposito = ({cuenta, setCuenta}) =>{
  const[deposito, setDeposito] = useState(0)
  const [subTotal, setSubTotal] = useState(cuenta);
  // definir el state
 
const sumaFn = e =>{
  e.preventDefault();
  setCuenta(deposito + cuenta);
  setSubTotal(subTotal + cuenta);
  
}
// const subTotalFn=e =>{
//   // e.preventDefault();
//   // setSubTotal(subTotal + cuenta);
//   console.log('submit');
// }
  return (
    
    <>
        <div className="containerVista">
        <img src={Depositar} alt=""/>
        <div className="contenedorSaldo">
            <div className="saldoActualizado">
                <h3>Cuanto quieres Depositar</h3>
                <span>&#36;
                  <input type="number"
                  placeholder='0'
                  
                    // onSubmit={e=> {setSubTotal(subTotal + cuenta); }}
                   onChange={e=> {setDeposito(parseInt(e.target.value));setSubTotal(parseInt(e.target.value)+cuenta) }}
                  />
                  </span>
            </div>
            <div className="contenedorOperaciones">
                <p>Saldo Actual: </p>
                <p>&#36;{cuenta}</p>
                <p>Subtotal:</p>
                <p>&#36;{subTotal}</p>
            </div>
            <button onClick={sumaFn} >Continuar</button>
        </div>

    </div>
    </>
  )
}

export default Deposito;