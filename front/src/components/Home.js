import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import{useDispatch} from 'react-redux'
import { getProducts } from '../actions/product.Actions'

export const Home = () => {
    const dispatch = useDispatch();
    useEffect(()=>{
        dispatch(getProducts());
    }, [dispatch])


  return (
    <Fragment>
        <MetaData title="Lo más beneficioso para tí"></MetaData>
        <h1 id="encabezado_productos">Lo último</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {/*Producto 1*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Kumis-COLANTA-x150-g.webp' alt="Kumis colanta"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Kumis Colanta 150g</a></h5>
                            <div className='Rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="Cantidad-de-opiniones">8 reviews</span>
                            </div>
                            <p className='card-text'>$1.800</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalles del producto
                            </a>
                        </div>
                    </div>
                </div>
                {/*Producto 2*/}
                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Leche-deslactosada-alqueria-3000ml-6u.jpeg' alt="Kumis colanta"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Leche deslactosada Alquería 6u</a></h5>
                            <div className='Rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="Cantidad-de-opiniones">20 reviews</span>
                            </div>
                            <p className='card-text'>$25.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalles del producto
                            </a>
                        </div>
                    </div>
                </div>

                           {/*Producto 3*/}
                           <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Leche-entera-alpina-caja-4-und.png' alt="Kumis colanta"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Leche entera alpina caja 4und</a></h5>
                            <div className='Rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="Cantidad-de-opiniones">19 reviews</span>
                            </div>
                            <p className='card-text'>$21.000</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalles del producto
                            </a>
                        </div>
                    </div>
                </div>
                                {/*Producto 4*/}
                                <div className='col-sm-12 col-md-6 col-lg-3 my-3'>
                    <div className='card p-3 rounded'>
                        <img className='card-img-top mx-auto' src='./images/Leche-uht-entera-caja-colanta-1000ML.jpeg' alt="Kumis colanta"></img>
                        <div className='card-body d-flex flex-column'>
                            <h5 id="titulo_producto"><a href='http://localhost:3000'>Leche uht entera caja Colanta</a></h5>
                            <div className='Rating mt-auto'>
                                <div className='rating-outer'>
                                    <div className='rating-inner'></div>
                                </div>
                                <span id="Cantidad-de-opiniones">14 reviews</span>
                            </div>
                            <p className='card-text'>$1.400</p><a href='http://localhost:3000' id="view_btn" className='btn btn-block'>
                                Ver detalles del producto
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </Fragment>
  )
}
export default Home
