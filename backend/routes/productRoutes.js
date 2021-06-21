const express = require('express');

const router = express.Router();
const { getAllProducts, getProductById} = require('../controller/productControllers');


//@desc get product from db
// @route get /api/product
//@access public
router.get('/', getAllProducts);



//@desc get product by id from db
// @route get /api/product/:id
//@access public
router.get('/:id', getProductById);

module.exports = router;