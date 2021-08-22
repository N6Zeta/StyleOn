const userModel = require("../models/user.model");

const getuserData = async (data) => {
    console.log("calledd user repo")
    try {
        const snapshot = await userModel.get();
        let data = snapshot.docs.map((doc) => ({ id: doc.id, ...doc.data() }));
        console.log("data",data);
        return data;
    } catch (e) {
        throw e;
    }
}

const saveUser = async (data) => {
    console.log("calledd saveUser  repo")
    console.log("data", data)
    try {
        let singleData = await userModel.where('email', '==', data.email.toLowerCase())
        .get()
        .then(snapshots => {
            console.log("snapshots", snapshots.docs)
            // if (snapshots.size > 0) {
            //   snapshots.forEach(orderItem => {
            //     userModel.doc(orderItem.email).update({ status: 1 })
            //   })
            // }
        })
        return 
    } catch (e) {
        throw e;
    }

    // console.log("calledd saveUser  repo")
    // console.log("data", data)
    // try {
    //     let singleData = await userModel.where('email', '==', data.email.toLowerCase())
    //     .get()
    //     .then(querySnapshot => {
    //       if(!querySnapshot.empty) {
    //         const user = querySnapshot.docs[0].data()
    //         console.log("user", user);
    //         // rest of your code 
    //       }else{
    //           console.log("elsee")
    //       }
    //     })


    //     return 
    // } catch (e) {
    //     throw e;
    // }
}

const updateUserData = async (data) => {
    console.log("calledd saveUser  repo")
    console.log("data", data)
    try {
        let singleData = await userModel.where('email', '==', data.email.toLowerCase())
        .get()
        .then(snapshots => {
            if (snapshots.size > 0) {
              snapshots.forEach(orderItem => {
                userModel.doc(orderItem.email).update({ status: 1 })
              })
            }
        })
        return 
    } catch (e) {
        throw e;
    }
}

const getSingleUser = async (data) => {
    console.log("calledd saveUser  repo")
    console.log("data", data)
    try {
        let singleData = await userModel.where('email', '==', data.email.toLowerCase())
        .get()
        .then(querySnapshot => {
          if(!querySnapshot.empty) {
            const user = querySnapshot.docs[0].data()
            console.log("user", user);
            // rest of your code 
          }else{
              console.log("elsee")
          }
        })
        // let dataa = await userModel.doc("t43CHzRhqf7sUvyONW22").update(data);
        // console.log("dataa", dataa)

        return 
    } catch (e) {
        throw e;
    }
}


module.exports = {
    getuserData,
    saveUser,
    updateUserData
}