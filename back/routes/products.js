const express=require("express")
const router=express.Router();

const {getProducts, newProduct, getProductById, updateProduct, deleteProduct, createProductReview, getProductReviews, deleteReview} = require("../controllers/productsController"); //Traemos la respuesta json desde el controlador
const { isAuthenticatedUser, authorizeRoles } = require("../middleware/auth");

router.route('/productos').get(getProducts)  //Establecemos desde que ruta queremos ver el getProducts
router.route('/producto/nuevo').post(isAuthenticatedUser, authorizeRoles("admin","user"), newProduct); //Estableciendo ruta
router.route('/producto/:id').get(getProductById); //Ruta para consultar id
router.route('/producto/:id').put(isAuthenticatedUser, authorizeRoles("admin","user"), updateProduct); //Creación ruta de actualización
router.route('/producto/:id').delete(isAuthenticatedUser, authorizeRoles("admin","user"), deleteProduct);// Creación ruta eliminación

router.route("/review").put(isAuthenticatedUser, createProductReview)
router.route("/reviews").get(isAuthenticatedUser, getProductReviews)
router.route("/review").delete(isAuthenticatedUser, deleteReview)

module.exports=router;