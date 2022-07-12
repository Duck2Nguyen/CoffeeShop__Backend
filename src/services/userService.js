// import db from '../models/index';
// import bcrypt from 'bcryptjs';

let handleUserLogin = (email, password) => {
    return new Promise(async (resolve, reject) => {
        try {
            let userData = {};
            userData.errCode = 0;
            userData.errMessage = `OK`;
            // delete data.password;
            userData.user = {};
            resolve(userData)
        } catch (e) {
            reject(e)
        }
    })
}

module.exports = {
    handleUserLogin: handleUserLogin,
}