const express = require('express')
const router = express.Router()

const {getAllProducts, createProduct, updateProduct, deleteProduct, getProductDetail} = require("../controllers/productController")

router.get('/products', getAllProducts)
router.get('/product/:id',getProductDetail)
router.post('/product/new', createProduct)
router.put('/product/:id', updateProduct)
router.delete('/product/:id',deleteProduct)

module.exports = router