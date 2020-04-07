const db = require('../db')

db.query('SELECT name, address FROM `customers`', (err, result, fields) => {
  if(err) throw err
  console.log(fields)
})
