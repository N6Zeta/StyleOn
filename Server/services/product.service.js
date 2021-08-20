const productRepo = require("../repositories/product.repository");

const getproductData = async () => {
    console.log("calledd product service")
    try {
        const response = await productRepo.getproductData();
        if (response) {
            return {status: 1, message: "Successfully fetched productpage data", response};
        } else {
            return {status: 0, message: "Failed to fetch data"};
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getproductData
}