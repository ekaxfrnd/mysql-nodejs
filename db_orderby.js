const db = require('../db')

db.query('SELECT * FROM `customers` ORDER BY `name`', (err, result) => {
  if(err) throw err
  console.log(result)
})
