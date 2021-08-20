const salonRepo = require("../repositories/salon.repository");

const getsalonpageData = async () => {
    console.log("calledd salon service")
    try {
        const response = await salonRepo.getsalonpageData();
        if (response) {
            return {status: 1, message: "Successfully fetched salon page data", response};
        } else {
            return {status: 0, message: "Failed to fetch data"};
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getsalonpageData
}