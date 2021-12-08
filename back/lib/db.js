'use strict'

const { MongoClient } = require('mongodb')

const mongoUrl = 'mongodb+srv://Admin:12345@devcode.kme5b.mongodb.net/test'

let connection

async function connectDB() {
    if (connection) return connection

    let client
    try {
        client = await MongoClient.connect(mongoUrl,{
            useNewUrlParser: true
        })
        connection = client.db('devCode')
    } catch (error) {
        console.error('Could not connect to db', mongoUrl, error)
        process.exit(1)
    }
    return connection
}

module.exports = connectDB