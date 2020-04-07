const db = require('../db')

const sql = 'SELECT * FROM `customers` LIMIT 5'
db.query(sql, (err, result) => {
  if(err) throw err
  console.log(result)
})
