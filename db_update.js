const db = require('../db')

const sql = "UPDATE `customers` SET `address` = 'Canyon 123' WHERE `address` = 'Valley 345'"
db.query(sql, (err, result) => {
  if(err) throw err
  console.log(`${result.affectedRows} record(s) updated`)
})
