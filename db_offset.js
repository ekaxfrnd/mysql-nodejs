const db = require('../db')

db.query('SELECT * FROM `customers` LIMIT 5 OFFSET 2', (err, result) => {
  if(err) throw err
  console.log(result)
})
