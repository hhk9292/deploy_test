const db = require('../../database')
const conn = db.init()

exports.userlist = (req, res, next) => {
    const sql = 'select * from users';
    conn.query(sql, (err, rows, fields) => {
        if (err) {
            console.log('query is not executed' + err)
        }
        else {
            res.send(rows)
        }
    })
}