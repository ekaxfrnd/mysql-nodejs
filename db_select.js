const db = require('../db')

db.query('SELECT * FROM `customers`', (err, result, fields) => {
  if(err) throw err
  console.log(result)
})

