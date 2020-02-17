const express = require('express');
const bodyParser= require('body-parser')
const app = express();
const MongoClient = require('mongodb').MongoClient

app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended: true}))
app.use(express.static('public'));
app.use(bodyParser.json())
// app.listen(3000,function(){
// 	console.log('listening on 3000')
// })

var db

MongoClient.connect('mongodb://localhost:27017',{ useUnifiedTopology: true }, (err, client) => {
  if (err) return console.log(err)
  // Database Name 
  db = client.db('webapp') 
  app.listen(3000, () => {
    console.log('listening on 3000')
  })
})

app.get('/', (req, res) => {
  //Insert the Collection (Table) name 
	db.collection('customers').find().toArray(function(err, results) {
	  //console.log(results)
	  // send HTML file populated with the users
	  res.render('index.ejs', {users: results})
	  
	})
})

//ES6 code format
app.post('/users', (req, res) => {
	console.log(req.body)
  //Insert the Collection (Table) name 
	db.collection('customers').insertOne(req.body, (err, result) => {
    if (err) return console.log(err)
    console.log('saved to database')
    res.redirect('/')
  })
})

//Update Request
app.put('/users', (req, res) => {
  //Insert the Collection (Table) name 
  db.collection('customers')
  .findOneAndUpdate({name: req.body.name}, {
    $set: {
      name: req.body.name,
      email: req.body.email,
      phone: req.body.phone,
    }
  }, {
    // sort: {_id: -1},
    upsert: true
  }, (err, result) => {
    if (err) return res.send(err)
    res.send(result)
    console.log('Record Updated')
  })
})

//Delete Request
app.delete('/users', (req, res) => {
  //Insert the Collection (Table) name 
  db.collection('customers').findOneAndDelete({name: req.body.name},
  (err, result) => {
    if (err) return res.send(500, err)
    res.send({message: 'The User record was deleted'})
    console.log('The User record was deleted')
  })
})



