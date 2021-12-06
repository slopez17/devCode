'use strict'

const connectDb = require('../lib/db')
const { ObjectId } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
    createUsuario: async (root, {input}) => {
        let db
        let usuario
        try {
            db = await connectDb()
            usuario = await db.collection('usuarios').insertOne(input)
            input._id = usuario.insertedId
        } catch (error) {
            errorHandler(error)
        }
        return input
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
    },
    createProyecto: async (root, { input }) => {
        let db
        let proyecto
        try {
            db = await connectDb()
            proyecto = await db.collection('proyectos').insertOne(input)
            input._id = proyecto.insertedId
        } catch (error) {
            errorHandler(error)
        }
        return input
    },
    editProyecto: async (root, { _id, input }) => {
        let db
        let proyecto
        try {
            db = await connectDb()
            await db.collection('proyectos').updateOne(
                { _id: ObjectId(_id)},
                {$set: input}
            )
            proyecto = await db.collection('proyectos').findOne(
                {_id: ObjectId(_id)}
            )
        } catch (error) {
            errorHandler(error)
        }
        return proyecto
    }
}