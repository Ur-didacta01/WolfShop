import React, { Fragment } from 'react'
import "../../App.css"
import {Link} from "react-router-dom"
import { Search } from './Search'

const Header = () => {
  return (
    <Fragment>
<nav className='navbar row'>
            <div className='col-12 col-md-3'>
                <div className='navbar-brand'>
                    <img className='card-img-top mx-auto' src="../images/WolfShop.png" alt="WolfShop Logo"></img>
                </div>
            </div>
            <div className='col-12 col-md-6 mt-2 mt-md-0'>
            {/*Aquí va buscar*/}
            <Search />
            </div>
            <div className="col-12 col-md-3 mt-4 mt-md-0 text-center">
                <div className="ml-4 dropdown d-inline">
                    <Link to="#!" classNae="btn dropdown-toggle text-white mr-4" type="button"
                    id="dropDownMenu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <span>Panel de control</span></Link>
                        <div className='dropdown-menu' aria-labelledby='dropDownMenu'>
                            <Link className="dropdown-item" to="/dashboard">Administración de productos</Link>
                            <Link className="dropdown-item" to="/dashboard">Pedidos</Link>
                            <Link className="dropdown-item" to="/dashboard">Mi cuenta</Link>
                            <Link className="dropdown-item" to="/dashboard">Cerrar sesión</Link>
                        </div>
                </div>
                <Link to="/carrito"><i class="fa fa-shopping-cart fa-2x text-white" aria-hidden="false"></i>
                    <span className="ml-1" id="cart_count">2</span></Link>
            </div>
        </nav>
    </Fragment>

  )
}

export default Header