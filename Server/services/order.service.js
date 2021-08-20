const orderRepo = require("../repositories/order.repository");

const getorderData = async () => {
    console.log("calledd order service")
    try {
        const response = await orderRepo.getorderData();
        if (response) {
            return {status: 1, message: "Successfully fetched order page data", response};
        } else {
            return {status: 0, message: "Failed to fetch data"};
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getorderData
}