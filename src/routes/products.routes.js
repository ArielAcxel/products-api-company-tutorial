
import { Router } from 'express'
const router =  Router()
import * as productsCtrl from '../controllers/products.controller'

router.post('/', productsCtrl.createrProduct)
router.get('/', productsCtrl.getProducts)
router.get('/:productId', productsCtrl.getProductByid)
router.put('/:productId', productsCtrl.updateProductByid)
router.delete('/:productId', productsCtrl.deleteProductByid)

export default router;