const express= require("express")
const router=express.Router();

const {getProducts, newProduct, getProductsById, updateProduct, deleteProduct}=require("../controllers/productsController")

router.route('/productos').get(getProducts) // Establecemos desde que ruta queremos ver el producto
router.route('/productos/nuevo').post(newProduct); //establecer la ruta 
router.route('/productos/:id').get(getProductsById); /// establecer ruta para buscar por Id
router.route('/productos/:id/').put(updateProduct); //establecer ruta para  para actualizar 
router.route('/productos/:id/').delete(deleteProduct); //establecer ruta para eliminar




module.exports = router;