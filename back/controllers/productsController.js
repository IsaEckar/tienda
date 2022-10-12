const producto = require("../models/productos");
const fetch =(url) => import('node-fetch').then(({default:fetch}) => fetch(url));


// ver la lista de productos
exports.getProducts = async (req, res, next) => {
  const productos = await producto.find();
  res.status(200).json({
    success: true,
    cantidad: productos.length,
    productos,
  });
};


// ver un producto por Id
exports.getProductsById = async (req, res, next) => {
  const product = await producto.findById(req.params.id);
  if (!product) {
    return res.status(404).json({
      success: false,
      message: "No se encontro el producto"
    });
  }

  res.status(200).json({
    success: true,
    message: "Aqui debajo encuentras informacion sobre tu producto",
    product,
  });
};


// update producto
exports.updateProduct = async (req, res, next) => {
  let product = await producto.findById(req.params.id); // variable de tipo modificable
  if (!product) {  // verififico que producto no exista para finalizar el proceso 
    return res.status(404).json({
      success: false,
      message: "No se encontro el producto"
    });
  }

  // si el objeto si existe, si ejecuta la actizacion de producto
  product = await producto.findByIdAndUpdate(req.params.id, req.body, {
    new: true, // valido 
    runValidators: true
});
//responde ok si el el producto se actualizo 
 res.status(200).json({
    success: true,
    message: "Producto actualizado correctamente",
    product
 });
};



// Eliminar un producto
exports.deleteProduct = async (req, res, next) => {
    const product = await producto.findById(req.params.id); // variable de tipo modificable
    if (!product) {  // verififico que producto no exista para finalizar el proceso 
      return res.status(404).json({
        success: false,
        message: "No se encontro el producto"
      });
    }
     await product.remove();
     res.status(200).json({
        success: true,
        message: "Producto eliminado correctamente"
     });
};

// crear nuevo producto /api/productos
exports.newProduct = async (req, res, next) => {
  const product = await producto.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};


//uso del fetch
//ver los productos
function verProducto(){
    fetch('http://localhost:4000/api/productos')
    .then(res => res.json())
    .then(res => console.log(res))
    .catch(err => console.log(err));
}

// verProducto();  llamamos el metodo para probar la consulta en la consola

// ver por id

function verProductoPorId(id){
   fetch('http://localhost:4000/api/productos/'+id)
   .then(res => res.json())
   .then(res => console.log(res))
   .catch(err => console.log(err));

}
// verProductoPorId('63456ab20993daee660c91b8');  llamamos el metodo por id 

