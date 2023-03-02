const Product = require('../models/product')

const APIFeatures = require('../utils/apiFeatures')

// Create new product => /api/v1/product/new

exports.newProduct = async (req, res, next) => {
    try {
        // req.body.user = req.user.id;
        const product = await Product.create(req.body)
        res.status(201).json({
            success: true,
            product
        })
    }
    catch (error) {
        res.json({
            success: false,
            error: error.stack
        })
    }
}


// Show all product => /api/v1/product    ==============> PAGINATIONS

exports.getProducts = async (req, res, next) => {
    try {
        // return next(new ErrorHandler('My Error', 400));
        const resPerPage = 4;
        const productsCount = await Product.countDocuments();
        const apiFeatures = new APIFeatures(Product.find(), req.query)
            .search()
            .filter()
            .pagination(resPerPage)
        const products = await apiFeatures.query;

        // res.status(200).json({
        //     success: true,
        //     // count: products.length,
        //     productsCount,
        //     products
        // })

        setTimeout(() => {
            res.status(200).json({
                success: true,
                productsCount,
                resPerPage,
                products
            })
        }, 2000);


    }

    catch (error) {
        res.json({
            success: false,
            error: error.stack
        })
    }
}




// Get single product details   => /api/v1/product/:public_id

exports.getSingleProduct = async (req, res, next) => {
    try {
        const products = await Product.findById(req.params.id);
        return res.status(200).json({
            success: true,
            products
        })
    }
    catch (error) {
        res.json({
            success: false,
            error: error.stack
        })
    }
}


// Update Product => /api/v1/admin/product/update/:id

exports.updateProduct = async (req, res, next) => {
    try {
        let product = await Product.findById(req.params.id);

        product = await Product.findByIdAndUpdate(req.params.id, req.body, {
            new: true,
            runValidators: true,
            useFindAndModify: false
        });

        res.status(200).json({
            success: true,
            product
        })
    }
    catch (error) {
        res.json({
            success: false,
            error: error.stack
        })
    }
}

// Delete Product => /api/v1/admin/product/delete/:id

exports.deleteProduct = async (req, res, next) => {
    try {
        const product = await Product.findById(req.params.id);
        await product.remove();

        res.status(200).json({
            success: true,
            message: "Product is deleted."
        })
    }
    catch (error) {
        res.json({
            success: false,
            error: error.stack
        })
    }

}







