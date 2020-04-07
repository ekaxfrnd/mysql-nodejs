const db = require('../db')

const sql = "INSERT INTO `customers` (`name`, `address`) VALUES ('Company Inc', 'Highway 37')"
db.query(sql, (err, result) => {
  if(err) throw err
  console.log('1 record inserted')
})
