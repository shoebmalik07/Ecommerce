import asyncHandler from "express-async-handler";
import Order from "../models/orderModel.js";

// @desc    Create New Order
// @route   POST /api/orders
// @access  private

const addOrderItems = asyncHandler(async (req, res) => {
  const {
    orderItems,
    shippingAddress,
    paymentMethod,
    itemsPrice,
    taxPrice,
    shippingPrice,
    totalPrice,
  } = req.body;
  if (orderItems && orderItems.length === 0) {
    res.status(404); // bad request
    throw new Error("no order items");
  } else {
    const order = new Order({
      orderItems,
      user: req.user._id,
      shippingAddress,
      paymentMethod,
      itemsPrice,
      taxPrice,
      shippingPrice,
      totalPrice,
    });
    const createdOrder = await order.save();
    res.status(201).json(createdOrder);
  }
});

// @desc    Get order ID
// @route   GET /api/orders/:id
// @access  private

const getOrderById = asyncHandler(async (req, res) => {
  const order = await Order.findById(req.params.id).populate(
    "user",
    "name email"
  );

  if (order) {
    res.json(order);
  } else {
    res.status(404);
    throw new Error("order not found");
  }
});

//@desc  update oder ID
//@route PUT /api/orders/:id/pay
//@access  private

const updateOrderToPaid = async (req, res) => {
  const order = await Order.findById(req.params.id);

  if (order) {
    (order.isPaid = true), (order.paidAt = Date.now());
    order.paymentResult = {
      id: req.params.id,
      state: req.body.state,
      update_time: req.body.update_time,
      email_address: req.body.email_address,
    };
    const updateOrder = await order.save();
    res.json(updateOrder);
  } else {
    res.status(404);
    throw new Error("order not found");
  }
};

//@desc Get logged in user's orders
//@route GET /api/orders/myOrders
//@access private

const getMyOrders = async (req, res) => {
  const orders = await Order.find({ user: req.user._id });
  res.json(orders);
};

//@desc get all orders
//@route GET /api/orders
//access private/admin

const getOrders = asyncHandler(async (req, res) => {
  const orders = await Order.find({}).populate("user", "name");
  res.json(orders);
});


//@desc update  order to delivered
//@route PUT /api/orders/:id/deliver
//access private/admin

const updateOrderToDelivered = async (req, res) => {
  const order = Order.findById(req.params.id);

  if (order) {
    order.isDelivered = true;
    order.deliveredAt = Date.now();

    const updatedOrder = await order.save();
    res.json(updatedOrder);
  } else {
    res.status(404);
    throw new Error("order not found");
  }
};

export {
  addOrderItems,
  getOrderById,
  updateOrderToPaid,
  getMyOrders,
  getOrders,
  updateOrderToDelivered
};
