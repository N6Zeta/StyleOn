const groomingServiceRepo = require("../repositories/groomingServices.repository");

const getGroomingServiceData = async () => {
    try {
        const response = await groomingServiceRepo.getGroomingServiceData();
        if (response) {
            return {status: 1, message: "Successfully fetched grooming service data", response};
        } else {
            return {status: 0, message: "Failed to fetch data"};
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getGroomingServiceData
}