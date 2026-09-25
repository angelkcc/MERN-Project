import express from "express";

import {
  getCart,
  addToCart,
  removeFromCart,
  updateCartItem,
  clearCart,
} from "../controllers/cart.controllers";

const router = express.Router();

// Get cart
router.get("/:userId", getCart);

// Add product
router.post("/:userId", addToCart);

// Update quantity
router.put("/:userId/:productId", updateCartItem);

// Remove one product
router.delete("/:userId/:productId", removeFromCart);

// Clear cart
router.delete("/:userId", clearCart);

export default router;