const bookingRepo = require("../repositories/booking.repository");

const getbookingData = async () => {
    console.log("calledd booking service")
    try {
        const response = await bookingRepo.getbookingData();
        if (response) {
            return {status: 1, message: "Successfully fetched booking page data", response};
        } else {
            return {status: 0, message: "Failed to fetch data"};
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getbookingData
}