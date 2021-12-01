'use strict'

const connectDb = require('../lib/db')
const { ObjectId } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
    createUsuario: async (root, { input }) => {
        let db
        let usuario
        try {
            db = await connectDb()
            usuario = await db.collection('usuarios').insertOne(input)
            input._id = usuario.insertedId
        } catch (error) {
            errorHandler(error)
        }
        return usuario
    }
}