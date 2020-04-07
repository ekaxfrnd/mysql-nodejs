const db = require('../db')

db.query('SELECT * FROM `customers` LIMIT 2, 5', (err, result) => {
  if(err) throw err
  console.log(result)
})
