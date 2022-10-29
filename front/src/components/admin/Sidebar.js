import React from 'react'
import {Link} from "react-router-dom"

export const Sidebar = () => {
  return (
    <div className="sidebar-wrapper">
        <nav id="sidebar">
            <ul className="list-unstyled components">
                <li>
                    <Link to="/admin/dashboard"><i className='fa fa-tachometer'></i>Administración</Link>
                </li>
                {/*Botones de productos*/}
                <li>
                    <a href="#productSubmenu" data-toggle="collapse" aria-expanded="false" 
                    className='dropdown-toggle'><i className='fa fa-product-hunt'></i>Productos</a>
                    <ul className="collapse list-unstyled" id="productSubmenu">
                        <li>
                            <Link to="/listaProductos"><i className='fa fa-clipboard'></i>Lista de productos</Link>
                        </li>
                        <li>
                            <Link to="/"><i className='fa fa-plus'></i>Nuevo producto</Link>
                        </li>
                    </ul>
                </li>
                {/*Botones de pedidos*/}
                <li>
                    <Link to="/"><i className='fa fa-shopping-basket'></i>Pedidos</Link>
                </li>

                {/*Botones de usuarios*/}
                <li>
                    <Link to="/"><i className='fa fa-users'></i>Usuarios</Link>
                </li>

                {/*Botones de opiniones*/}
                <li>
                    <Link to="/"><i className='fa fa-users'></i>Reviews</Link>
                </li>


            </ul>
        </nav>
    </div>
  )
}
export default Sidebar