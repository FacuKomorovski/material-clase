// ************ Require's ************
const express = require('express');
const router = express.Router();
const productsRouter = require('./products');
// ************ Controller Require ************
const mainController = require('../controllers/mainController');

router.get('/', mainController.index);
router.use('/products', productsRouter); 
//router.use('/search', mainController.search); 

module.exports = router;
