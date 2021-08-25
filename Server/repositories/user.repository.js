const userModel = require("../models/user.model");

const getuserData = async (params) => {
    console.log("typeof params.uid", typeof params.uid)
    try {
        let snapshot 
        if(typeof params.uid === "string" || params.uid === "number")
            snapshot= await userModel.where("uid", "==", parseInt(params.uid)).get();
        else if (params !== undefined)
            snapshot= await userModel.where('uid', 'in', params).get();

        let reviewData = snapshot.docs.map((doc) => ({
            id: doc.id,
            ...doc.data(),
        }));
        return reviewData;
    } catch (e) {
        console.log(e);
    }
};

const saveUser = async (params) => {
    try {
        return await userModel.add(params);
    } catch (e) {
        console.log(e);
    }
};

const updateUser = async (params) => {
    console.log("update reviewData params", params);
    let user;
    try {
        await userModel
            .where("uid", "==", params.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    user = doc.ref.update(params);
                });
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (e) {
        console.log(e);
    }
    return user;
};

const deleteUser = async (params) => {
    let user;
    try {
        await userModel
            .where("uid", "==", params.uid)
            .get()
            .then((querySnapshot) => {
                querySnapshot.forEach((doc) => {
                    user = doc.ref.delete();
                });
            })
            .catch((err) => {
                console.log(err);
            });
    } catch (e) {
        console.log(e);
    }
    return user;
};

module.exports = {
    getuserData,
    saveUser,
    updateUser,
    deleteUser,
};


// {
//     "uid":"",
//     "name":"",
//     "email":"",
//     "image":"",
//     "address": {
// 		"door_no": "",
// 		"street": "",
// 		"district": "",
// 		"state": "",
// 		"pincode": 641005
// 	},
//     "contact_number":9999999999
// }