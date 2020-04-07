const db = require('../db')

const adr = 'Mountain 21'
const sql = 'SELECT * FROM `customers` WHERE `address` = ?'
db.query(sql, [adr], (err, result) => {
  if(err) throw err
  console.log(result)
})
