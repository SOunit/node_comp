const Product = require('../models/product');

exports.getAddProduct = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  res.render('admin/add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
    formsCSS: true,
    productCSS: true,
    activeAddProduct: true,
  });
};

exports.getAdminProducts = (req, res, next) => {
  // res.sendFile(path.join(rootDir, 'views', 'add-product.html'));
  Product.fetchAll((products) => {
    res.render('admin/products', {
      pageTitle: 'Products',
      prods: products,
      path: '/admin/products',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true,
    });
  });
};

exports.postAddProduct = (req, res, next) => {
  const title = req.body.title;
  const imageUrl = req.body.imageUrl;
  const description = req.body.description;
  const price = req.body.price;
  const product = new Product(title, imageUrl, description, price);
  product.save();
  res.redirect('/');
};
