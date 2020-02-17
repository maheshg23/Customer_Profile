# CRUD operations using NodeJS, ExpressJS and MongoDB.

Create a web app that displays a single Collection(Table) from MongoDB as a Table in HTML
using ExpressJS which is a NodeJS Node.js web application framework.
We can then Insert, Modify and Delete records from the HTML page.

## Installation

1. Clone repo
2. run `npm install` 

## Usage 

1. run `npm run start`
2. Navigate to `localhost:3000`

### MongoDb Commands. 

Change Database <br>
`use <DatabaseName>`

Show the existing collections <br>
`show tables`

Insert the first record into the collections "customers". <br>
`db.customers.insert({ "name" : "user1", "email" : "user1@webapp.com", "phone": "1234567890"})`

Display the contents of the Collection <br>
`db.customers.find().pretty()`

Removing record from a collection <br>
`db.customers.remove({'name' :"user1"})`

<br>
<br>
Reference - https://zellwk.com/blog/crud-express-mongodb/
