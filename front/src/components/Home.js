import React, { Fragment, useEffect } from 'react'
import MetaData from './layout/MetaData'
import{useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../actions/product.Actions'
import { Link } from 'react-router-dom'
import { useAlert } from 'react-alert'

export const Home = () => {
    const { loading, productos, error } = useSelector(state=> state.products)
    const dispatch = useDispatch();

    const alert=useAlert();
    useEffect(()=>{
        if (error){
            return alert.error(error)
        }
        dispatch(getProducts());
        alert.success("OK")
    }, [dispatch])


  return (
    <Fragment>
        {loading ?<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>:(
            <Fragment>
                       <MetaData title="Lo más beneficioso para tí"></MetaData>
        <h1 id="encabezado_productos">Lo último</h1>

        <section id="productos" className='container mt-5'>
            <div className='row'>
                {productos && productos.map (producto => (
                                   <div key= {producto._id} className='col-sm-12 col-md-6 col-lg-3 my-3'>
                                   <div className='card p-3 rounded'>
                                       <img className='card-img-top mx-auto' src={producto.imagen[0].url} alt={producto.imagen[0].public_id}></img>
                                       <div className='card-body d-flex flex-column'>
                                           <h5 id="titulo_producto"><Link to={`/producto/${producto._id}`}>{producto.nombre}</Link></h5>
                                           <div className='Rating mt-auto'>
                                               <div className='rating-outer'>
                                                   <div className='rating-inner' style={{width: `${(producto.calificacion/5)*100}%`}}></div>
                                               </div>
                                               <span id="Cantidad-de-opiniones">{producto.numCalificaciones} Reviews</span>
                                           </div>
                                           <p className='card-text'>${producto.precio}</p><Link to={`/producto/${producto._id}`} id="view_btn" className='btn btn-block'>
                                               Ver detalles del producto
                                           </Link>
                                       </div>
                                   </div>
                               </div>

                ))}
            </div>
        </section>

            </Fragment>
        )}
 
    </Fragment>
  )
}
export default Home