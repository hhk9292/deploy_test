const mysql = require('mysql')
const db_info = require('db_config.json')

module.exports = {
    init: function () {
        return mysql.createConnection(db_info);
    },
    connect: function(conn) {
        conn.connect(function(err) {
            if(err) {
                console.error('mysql connection error: ' + err)
            }
            else {
                console.log('mysql is connected successfully!')
            }
        })
    }
}
