const express = require("express");
const adminController = require("../controllers/admin");
const shopAPIController = require("../controllers/shopAPI");
const router = express.Router();

// /admin/add-product => GET

router.get('/apiAllProduct', shopAPIController.apiAll);

router.post('/apiAddProduct', shopAPIController.apiNew);

router.put('/apiUpdateProduct/:id', shopAPIController.apiUpdate);

router.delete('/apiDeleteProduct/:id', shopAPIController.apiDelete);

router.get('/add-product',adminController.getAddProduct); 

// /admin/add-product => POST

router.post('/add-product',adminController.postAddProduct);

router.get('/products',adminController.getProducts); 

router.get('/edit-product/:productId',adminController.getEditProduct)

router.post('/edit-product',adminController.postEditProduct);

router.post('/delete-product',adminController.postDeleteProduct);

module.exports = router;
