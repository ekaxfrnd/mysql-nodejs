const db = require('../db')

const sql = "DELETE FROM `customers` WHERE `address` = 'Mountain 21'"
db.query(sql, (err, result) => {
  if(err) throw err
  console.log(`Number of records deleted: ${result.affectedRows}`)
})
