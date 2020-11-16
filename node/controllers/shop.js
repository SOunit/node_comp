const Product = require('../models/product');

exports.getProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'shop.html'));
  const products = Product.fetchAll((products) => {
    res.render('./shop/product-list', {
      pageTitle: 'test',
      prods: products,
      pageTitle: 'Shop',
      path: '/products',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true,
    });
  });
};

exports.getCart = (req, res, next) => {
  res.render('./shop/cart', {
    pageTitle: 'Cart',
    path: '/cart',
  });
};

exports.getIndex = (req, res, next) => {
  res.render('./shop/index', {
    pageTitle: 'Index',
    path: '/',
  });
};

exports.getCheckout = (req, res, next) => {
  res.render('./shop/checkout', {
    pageTitle: 'Checkout',
    path: '/checkout',
  });
};
