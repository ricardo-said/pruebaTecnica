import React from 'react'
import EstadoDeCuenta from "../components/EstadoDeCuenta";
import Cards from "../containers/Cards";

const Inicio = ({cuenta}) =>{
  return (
    <>
    <EstadoDeCuenta
      cuenta={cuenta}
    />
    <Cards/>
    </>
  )
}

export default Inicio