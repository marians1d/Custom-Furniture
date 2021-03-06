const express = require('express');
const router = express.Router();
const { auth } = require('../utils');
const { orderController, commentController } = require('../controllers');
const formidable = require('express-formidable');



router.get('/', auth(false), orderController.getOrders);
router.post('/', auth(), formidable(), orderController.createOrder);

router.get('/:orderId', orderController.getOrder);
router.post('/:orderId', auth(), commentController.createComment);
router.put('/:orderId', auth(), orderController.provide);
router.put('/:orderId/edit', auth(), formidable(), orderController.updateOrder);
router.delete('/:orderId', auth(), orderController.deleteOrder);
router.put('/:orderId/comments/:commentId', auth(), commentController.editComment);
router.delete('/:orderId/comments/:commentId', auth(), commentController.deleteComment);

module.exports = router;