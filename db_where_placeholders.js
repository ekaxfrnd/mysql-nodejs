const db = require('../db')

const name = 'Amy'
const adr = 'Mountain 21'
const sql = 'SELECT * FROM `customers` WHERE `name` = ? OR `address` = ?'
db.query(sql, [name, adr], (err, result) => {
  if(err) throw err
  console.log(result)
})
