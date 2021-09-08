/*
    This file contains CRUD operations performed on USER table

*/

/**
 * insertUsers method is responsible for inserting a user into the user table
 * 
 * @param {User} user 
 * @returns A promise - response object with id on successful insert, and error message on failure
 */

var insertUsers = async function (connPool, user) {
    return new Promise((resolve, reject) => {
        let resp = {
            data: undefined,
            error: true,
            message: "Something went wrong"
        }

        connPool.query('INSERT INTO "user"(username,password,email,location,phone_num,is_owner,created_date,created_by,updated_date,updated_by) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10) RETURNING id', [user.username, user.password, user.email, user.location, user.phone_num, user.is_owner, new Date(), 0, new Date(), 0], (error, results) => {
            if (error) {
                resp = {
                    error: true,
                    message: error.message
                }
                reject(resp)
            } else {
                resp = {
                    data: results.rows[0].id,
                    error: false,
                    message: "Registered user success"
                }
            }

            resolve(resp)
        })
    });
}

module.exports = insertUsers