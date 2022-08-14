import React from 'react'
import { Link} from 'react-router-dom';
import { Outlet } from 'react-router-dom';
import arrow from "../assets/imgs/arrow.png";
import '../style/Layout.css';

const Layout = () => {

  return (
    <>
      <div className="contenedor">

        <section className="containerHome">
          <h3>Bienvenido</h3>
          <section className="informacionCliente">
            <Link className='link' to="/"><img src={arrow} alt="" /></Link>
            <h2 className="nombreCliente">Ricardo Said Perez</h2>
            
          </section>
        </section>
      </div>
      <Outlet />
    </>
  )
}

export default Layout