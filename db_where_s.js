const db = require('../db')

db.query("SELECT * FROM `customers` WHERE `address` LIKE 'S%'", (err, result) => {
  if(err) throw err
  console.log(result)
})
