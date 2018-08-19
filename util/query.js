/**
 * Query helpers
 * Author: Sashiraj Chan
 * Date Created: 19-August-2018
 * Date Edited: 19-August-2018
 */

const db = require('../db');
exports.insertQuery = function (queryParam, queryValue) {

    return new Promise((resolve, reject) => {

        const query = `INSERT INTO ${queryParam}`;

        db.pool.getConnection(function (err, connection) {
            if (!err && connection) {

                connection.query(query, queryValue, function (err, result, fields) {

                    if (err) return reject(err);
                    if (result.affectedRows == queryValue[0].length) return resolve('success');
                    else return reject('Some students were not added');

                });

                connection.release();

            } else return reject(err);
        });
    });
}

exports.selectQuery = function (queryParam) {
    return new Promise((resolve, reject) => {
        const query = `SELECT DISTINCT ${queryParam.queryFor} FROM ${queryParam.table} WHERE (${queryParam.queryCondition})`;
    

        db.pool.getConnection(function (err, connection) {
            if (!err && connection) {

                connection.query(query, function (err, result, fields) {
                    
                    if (err) return reject(err);
                    if (result) return resolve(result);
                    
                });
                connection.release();

            } else return reject(err);
        });
    });
}