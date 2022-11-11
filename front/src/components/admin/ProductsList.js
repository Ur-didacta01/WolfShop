import React, { Fragment, useEffect } from 'react'
import{useDispatch, useSelector} from 'react-redux'
import { getProducts } from '../../actions/product.Actions'
import { useAlert } from 'react-alert'
import MetaData from '../layout/MetaData'
import Sidebar from './Sidebar'
import {MDBDataTable} from "mdbreact"

export const ProductList = () => {

    const { loading, productos, error } = useSelector(state=> state.products)
    const dispatch = useDispatch();

    const alert=useAlert();
    useEffect(()=>{
        if (error){
            return alert.error(error)
        }
        dispatch(getProducts());
    }, [dispatch])

    const setProducts=()=>{
        const data={
            columns:[
                {
                    label: 'ID',
                    field: 'id',
                    sort: 'asc'
                },
                {
                    label:"Nombre",
                    field:"nombre",
                    sort:"asc"           
                },
                {
                    label:"Precio",
                    field:"precio",
                    sort:"asc"
                },
                {
                    label:"Inventario",
                    field:"Inventario",
                    sort:"asc"
                },
                {
                    label:"Vendedor",
                    field:"vendedor",
                    sort:"asc"
                },

            ],
            rows:[]
        }
if(productos){
        productos.forEach(producto =>{
            data.rows.push({
                id: producto._id,
                nombre:producto.nombre,
                precio:`$${producto.precio}`,
                inventario:producto.inventario,
                vendedor:producto.vendedor
            })
        })
    }
        return data;
    }

  return (
    <Fragment>
        <MetaData title={"Todos los productos"}></MetaData>
        <div className='row'>
            <div className='col-12 col-md-2'>
                <Sidebar />
            </div>

            <div className='col-12 col-md-10'>
                <Fragment>
                    <h1 className='my-5'>Productos registrados</h1>
                    {loading ?<i class="fa fa-spinner fa-spin fa-3x fa-fw"></i>:(
                        <MDBDataTable 
                        data={setProducts()}
                            className="px-3"
                            borderered
                            striped
                            hover

                        />
                    )}
                </Fragment>
            </div>
        </div>
    </Fragment>
  )
}

export default ProductList
