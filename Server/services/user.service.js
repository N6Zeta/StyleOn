const userRepo = require("../repositories/user.repository");

const getuserData = async () => {
    console.log("calledd user service")
    try {
        const response = await userRepo.getuserData();
        if (response) {
            return {status: 1, message: "Successfully fetched userpage data", response};
        } else {
            return {status: 0, message: "Failed to fetch data"};
        }
    } catch (err) {
        console.log(err)
    }
}


module.exports = {
    getuserData
}