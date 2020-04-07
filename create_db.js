const db = require('../db')

db.query('CREATE DATABASE `mydb`', (err, result) => {
  if(err) throw err
  console.log('Database created')
})

