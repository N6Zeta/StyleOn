const homeRepo = require("../repositories/home.repository");

const getHomepageData = async () => {
    console.log("calledd home service")
    try {
        const response = await homeRepo.getHomepageData();
        if (response) {
            return {status: 1, message: "Successfully fetched homepage data", response};
        } else {
            return {status: 0, message: "Failed to fetch data"};
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getHomepageData
}