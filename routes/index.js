import express from 'express'
import phoneTabs_router from './phoneTabs.js'
import audioVideo_router from './audiovideo.js';
import gamers_router from './gamers.js';
import products_router from './products.js';

let router = express.Router()

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

router.use('/audiovideo', audioVideo_router)
router.use('/products', products_router)
router.use('/phoneTabs' , phoneTabs_router)
router.use('/gamers', gamers_router)

export default router