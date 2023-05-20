const products = [];//////////////////////////////


exports.getaddproduct=(req, res, next) => {
    //  render views in Express, go render function 
    // When the render() function is called, it will look for the add-product view file in the views directory. If the view file is found, it will be rendered and the rendered HTML string will be sent to the client.
    res.render('add-product', {
      pageTitle: 'Add Product',
    //   The data object that is being passed to the view contains
      path: '/admin/add-product',
      formsCSS: true,
      productCSS: true,
      activeAddProduct: true
    });
  }

  exports.postaddproduct=(req, res, next) => {
    res.redirect('/');
  }


  exports.getproduct=(req, res, next) => {
    // const products = adminData.products;  //already available in file 
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
      hasProducts: products.length > 0,
      activeShop: true,
      productCSS: true
    });
  }