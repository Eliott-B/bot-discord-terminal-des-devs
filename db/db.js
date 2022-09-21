mysql = require('mysql');
const { db } = require('../config.json');

module.exports = (client) => {
    client.db = mysql.createConnection({
        host: db.ip,
        user: db.user,
        password: db.password,
        database: db.database
    });
    return(client.db)
};