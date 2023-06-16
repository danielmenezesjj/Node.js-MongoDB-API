import express from 'express'
import ProdutosController from '../controller/produtosController.js';

const router = express.Router();

router.get('/produtos', ProdutosController.listProducts)
router.get('/produtos/:id', ProdutosController.listOneProducts)
router.post('/produtos', ProdutosController.createProducts)
router.put('/produtos/:id', ProdutosController.updateProducts)
router.delete('/produtos/:id', ProdutosController.deleteProducts)




export default router;
