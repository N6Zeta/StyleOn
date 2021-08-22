const productModel = require("../models/product.model");


const getProductData = async (params) => {
    try {
        const snapshot = await productModel.get();
        let productData = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data()}));
        return productData;
    } catch (e) {
        console.log(e);
    }
}

const createProductData = async (params) => {
    try {
        return await productModel.add(params)
    } catch (e) {
        console.log(e);
    }
}

const updateProductData = async (params) => {
    console.log("updateProductData params", params)
    let product;
    try{
        await productModel.where('product_id','==', params.product_id)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc=> {
                doc.ref.update(params)
                product =  {...doc.data(), ...params, id:doc.id}
            });
        })        
        .catch(err => {
            console.log(err)
        })
    }catch (e) { 
        console.log(e);
    }
    return product;
}

const deleteProductData = async (params) => {
    let product
    try{
        await productModel.where('product_id','==', params.product_id)
        .get()
        .then(querySnapshot => {
            querySnapshot.forEach(doc=> {
                doc.ref.delete()
                product = doc.id
            });
        })
        .catch(err => {
            console.log(err)
        })
    }catch (e) {
        console.log(e);
    }
    return product;
}


module.exports = {
    getProductData,
    createProductData,
    updateProductData,
    deleteProductData
}