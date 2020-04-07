const db = require('../db')

db.query("SELECT * FROM `customers` WHERE `address` = 'Park Lane 38'", (err, result) => {
  if(err) throw err
  console.log(result)
})
