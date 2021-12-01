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
    },
    editUsuario: async (root, { _id, input }) => {
        let db
        let usuario
        try {
            db = await connectDb()
            await db.collection('usuarios').updateOne(
                { _id: ObjectId(_id)},
                {$set: input}
            )
            usuario = await db.collection('usuarios').findOne(
                {_id: ObjectId(_id)}
            )
        } catch (error) {
            errorHandler(error)
        }
        return usuario
    }
}