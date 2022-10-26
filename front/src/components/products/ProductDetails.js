import React, {Fragment, useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux'
import MetaData from "../layout/MetaData"
import { useParams } from 'react-router-dom'
import { clearErrors, getProductDetails } from '../../actions/product.Actions'
import { useAlert } from 'react-alert'
import { Carousel } from 'react-bootstrap'

export const ProductDetails = () => {
  const {loading, product, error} =useSelector(state =>state.productDetails)
  const {id} =useParams();
  const dispatch= useDispatch();
  const alert=useAlert();
  const [quantity, setQuantity] = useState(1)
  const consumo={
    "_id": "6345db1d6165e0dd8a117d71",
    "nombre": "Nutra gold Gatos 1,5kg",
    "precio": 68000,
    "descripcion": "Pienso para gatos adultos, super premium. Alimento balanceado para control de dieta. Alimento holistico",
    "calificacion": 4.9,
    "imagen": [
        {
            "public_id": "productos/dsvbpny402gelwugv2le",
            "url": "https://www.agrocampo.com.co/media/catalog/product/cache/d51e0dc10c379a6229d70d752fc46d83/1/1/111110880_ed-min.jpg",
            "_id": "6346b2bd48574bfefb79eece"
        }
    ],
    "categoria": "Alimentos para mascotas",
    "vendedor": "Natali Velasquez",
    "inventario": 50,
    "numCalificaciones": 32,
    "opiniones": [],
    "fechaCreacion": "2022-10-11T21:07:41.110Z",
    "__v": 0
}


  useEffect(()=>{
    dispatch(getProductDetails(id))
    if (error){
      alert.error(error);
      dispatch(clearErrors())
    }
  }, [dispatch, alert, error, id])

  const increaseQty = () => {
    const contador = document.querySelector('.count')

    if (contador.valueAsNumber>=product.inventario) return;

    const qty = contador.valueAsNumber+1;
    setQuantity(qty)
 }
 const decreaseQty = () => {
  const contador = document.querySelector('.count')

  if (contador.valueAsNumber<=1) return;

  const qty = contador.valueAsNumber-1;
  setQuantity(qty)
}



  return (
    <Fragment>
    {loading ? <i class="fa fa-refresh fa-spin fa-3x fa-fw"></i> :(
      <Fragment>
      <MetaData title={product.nombre}></MetaData>
      <div className='row d-flex justify-content-around'>
          <div className='col-12 col-lg-5 img-fluid' id="imagen_producto">
              <Carousel pause='hover'>
                {product.imagen && product.imagen.map(img =>(
                  <Carousel.Item key={img.public_id}>
                    <img className="d-block w-100" src={"../"+img.url} alt={product.nombre}></img>
                  </Carousel.Item>
                ))}
              </Carousel>
          </div>
          <div className='col-12 col-lg-5 mt-5'>
                    <h3>{consumo.nombre}</h3>
                    <hr />
                    <p id="product_id">ID del producto: {product._id}</p>
                    <hr />
                    <div className='rating-outer'>
                      <div className="rating-inner" style={{width: `${(product.calificacion/5)*100}%`}}></div>
                    </div>
                    <span id="No_de_reviews">  ({product.numCalificaciones} Reviews)</span>
                    <hr />
                    <p id="precio_producto">${product.precio}</p>
                    <div className="stockCounter d-inline">
                      <span className="btn btn-danger minus" onClick={decreaseQty}>-</span>
                      <input type="number" className="form-control count d-inline" value={quantity} readOnly></input>
                      <span className="btn btn-primary plus" onClick={increaseQty}>+</span>
                    </div>
                    <button type="button" id="carrito_btn" className="btn btn-primary d-inline ml-5" disabled={product.inventario===0}>Agregar al Carrito</button>
                    <hr />
                    <p>Estado: <span id="stock_stado" className={product.inventario>0 ? 'greenColor':'redColor'}>{product.inventario>0 ? "En existencia": "Agotado"}</span></p>
                    <hr />
                    <h4 className="mt-2">Descripción:</h4>
                    <p>{product.descripcion}</p>
                    <hr />
                    <p id="vendedor">Vendido por: <strong>{product.vendedor}</strong></p>
                    <button id="btn_review" type="button" className="btn btn-primary mt-4" data-toggle="modal" data-target="#ratingModal">Deja tu opinión por favor</button>
                    <div className="alert alert-danger mt-5" type="alert">Inicia sesión para dejar tu review</div>
                    {/*Mensaje para dejar opinion y calificaciones*/}
                    <div className="row mt-3 mb-4">
                      <div className="rating w-50">
                        <div className="modal fade" id="ratingModal" tabIndex="-1" role="dialog"
                        aria-labelledby='ratingModalLabel' aria-hidden="true">
                          <div className="modal-dialog" role="document">
                            <div className="modal-content">
                              <div className="model-header">
                                <h5 className="modal-title" id="ratingModalLabel">Enviar Review</h5>
                                <button type="button" className='close' data-dismiss="modal" aria-label='Close'>
                                  <span aria-hidden="true">&times;</span>
                                </button>
                              </div>
                              <div className="modal-body">
                                <ul className="stars">
                                  <li className="star"><i className="fa fa-star"></i></li>
                                  <li className="star"><i className="fa fa-star"></i></li>
                                  <li className="star"><i className="fa fa-star"></i></li>
                                  <li className="star"><i className="fa fa-star"></i></li>
                                  <li className="star"><i className="fa fa-star"></i></li>
                                </ul>
                                <textarea name="review" id="review" className="form-control mt3"></textarea>
                                <button className="btn my-3 float-right review-btn px-4 text-white" data-dismiss="modal" aria-label="Close">Enviar</button>
                              </div>
                            </div>
                          </div>

                        </div>
                      </div>
                    </div>
              </div>
          </div>
      </Fragment>

      )}
    </Fragment>
    

  )
}
