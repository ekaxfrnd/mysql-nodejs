const db = require('../db')

const sql = 'ALTER TABLE `customers` ADD COLUMN `id` INT AUTO_INCREMENT PRIMARY KEY'
db.query(sql, (err, result) => {
  if(err) throw err
  console.log('Table altered')
})
