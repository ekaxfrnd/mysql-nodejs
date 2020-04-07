const db = require('../db')

const sql = 'CREATE TABLE `customers` (`id` INT AUTO_INCREMENT PRIMARY KEY, `name` VARCHAR(255), `address` VARCHAR(255))'
db.query(sql, (err, result) => {
  if(err) throw err
  console.log('Table created')
})
