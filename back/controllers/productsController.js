const producto=require("../models/productos")
const fetch =(url)=>import('node-fetch').then(({default:fetch})=>fetch(url));
exports.getProducts=async(req,res,next) =>{
    const productos= await producto.find();
    res.status(200).json({
        sucess:true,
        count: productos.length,
        productos
    })
}


//Ver un producto por ID
exports.getProductById= async(req,res,next)=>{
    const product= await producto.findById(req.params.id)
    if (!product){
        return res.status(404).json({
            success:false,
            message: "No encontramos el producto"
        })
    }
    res.status(200).json({
        success:true,
        mensaje:"Aquí debajo encuentras información sobre el producto:",
        product
    })
}

//Update un producto
exports.updateProduct= async (req,res,next)=>{
    let product= await producto.findById(req.params.id)
    if (!product){ //Verifico que el producto no exista
        return res.status(404).json({
            sucess:false,
            message: "No encontramos el producto"
        })
    }
//Si existe el producto, ejecuto la actualización
    product= await producto.findByIdAndUpdate(req.params.id, req.body,{
        nnew:true,
        runValidators:true
    });
    //Respondo ok si el producto se actualizó
    res.status(200).json({
        success:true,
        message:"Tu producto está actualizado",
        producto
    })
}

//Eliminar el producto
exports.deleteProduct=async (req,res,next)=>{
    const product= await producto.findById(req.params.id)
    if (!product){ //Verifico que el producto no exista
        return res.status(404).json({
            sucess:false,
            message: "No encontramos el producto"
        })
    }

    await product.remove();
    res.status(200).json({
        success:true,
        mensaje:"Producto eliminado"
    })
}


exports.newProduct=async(req,res,next)=>{
    const product= await producto.create(req.body);
    res.status(201).json({
        success:true,
        product
    })
}

//FETCH

function verProductos(){
    fetch('http://localhost:4000/api/productos')
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductos(); Llamamos al metodo para probar la consulta

function verProductoPorID(id){
    fetch('http://localhost:4000/api/producto/'+id)
    .then(res=>res.json())
    .then(res=>console.log(res))
    .catch(err=>console.error(err))
}

//verProductoPorID('6345db1d6165e0dd8a117d71'); probamos el método con id