const { MongoClient, ObjectId } = require('mongodb')

const connectionUrl = 'mongodb://localhost:27017'
const dbName = 'blogchallenge'

let db;

const init = () => {
  return MongoClient.connect(connectionUrl).then((client) => {
    db = client.db(dbName)
    console.log('connected to database!', dbName)
  })
}

const show = id => {
    const collection = db.collection('blogposts');
    return collection.find({ _id: ObjectId(id) }).toArray()
}

const create = newPost => {
    const collection = db.collection('blogposts')
    return collection.insertOne(newPost)
}

// const index = () => {
//     const collection = db.collection('blogposts')
//     return collection.find({}).toArray()
// }

module.exports = { init, create, show }