const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct} = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser,authorizeRoles } = require("../middleware/auth");

router.route('/productos').get(isAuthenticatedUser, authorizeRoles("admin","user"), getProducts)  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(newProduct); //Estableciendo ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar id
router.route('/producto/:id').put(updateProduct); //Creación ruta de actualización
router.route('/producto/:id').delete(deleteProduct);// Creación ruta eliminación

module.exports=router;