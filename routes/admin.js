const path = require('path');

const express = require('express');

const productcontroller  = require('../controller/product');//////////////


const router = express.Router();
// This line creates an Express router. The router is used to handle requests to the /admin/add-product path.



// /admin/add-product => GET
router.get('/add-product',productcontroller.getaddproduct);////////
// This line registers a GET route on the router. The GET route will call the getaddproduct() method on the productcontroller module.

/ 
// /admin/add-product => POST
router.post('/add-product', productcontroller.postaddproduct);/////////

module.exports = router;////////////

