const db = require('../db')

const sql = "INSERT INTO `customers` (`name`, `address`) VALUES ('Michelle', 'Blue Village 1')"
db.query(sql, (err, result) => {
  if(err) throw err
  console.log(`1 record inserted, ID: ${result.insertId}`)
})


