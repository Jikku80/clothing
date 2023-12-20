const Product = require("../models/product");

exports.apiNew = (req, res, next) => {
    const title = req.body.title;
    const imageUrl = req.body.imageUrl;
    const price = req.body.price;
    const description = req.body.description;
    req.user
      .createProduct({
        title: title,
        price: price,
        imageUrl: imageUrl,
        description: description,
      })
      .then((result) => {
        try{
            res.status(201).json({
                message: "New cloth Has Been Added to DB",
                result
            })
        }catch(err){
          console.log(err);
        }
      })
      .catch((err) => console.log(err));
  };

  exports.apiAll = (req, res, next) => {

    req.user.getProducts()
      .then((products) => {
            try{
                res.status(200).json({
                    message: "All of your cloth products",
                    products
                })
            }catch(err){
            console.log(err);
            }
      })
      .catch((err) => console.log(err));
  };

  exports.apiUpdate = (req, res, next) => {
    const productId = req.params.id;
    const productTitle = req.body.title;
    const productImageUrl = req.body.imageUrl;
    const productPrice = req.body.price;
    const productDescription = req.body.description;
  
    Product.findByPk(productId)
      .then((product) => {
        product.title = productTitle;
        product.imageUrl = productImageUrl;
        product.price = productPrice;
        product.description = productDescription;
        return product.save();
      })
      .then((result) =>
        {
            try{
                res.status(200).json({
                    message: "Clothing items has Been Updated successfully",
                    result
                })
            }catch(err){
              console.log(err);
            }
        }
      )
      .catch((err) => console.log(err));
  };

  exports.apiDelete = (req, res, next) => {
    const id = req.params.id;
    Product.findByPk(id)
      .then((product) => {
        return product.destroy();
      })
      .then((result) => {
        try{
            res.status(200).json({
                message: "Your Clothing detail Has Been Deleted successfully",
                result
            })
        }catch(err){
          console.log(err);
        }
      })
      .catch((err) => console.log(err));
  };