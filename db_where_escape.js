const db = require('../db')
const mysql = require('mysql')

const adr = 'Mountain 21'
const sql = 'SELECT * FROM `customers` WHERE `address` = ' + mysql.escape(adr)
db.query(sql, (err, result) => {
  if(err) throw err
  console.log(result)
})
