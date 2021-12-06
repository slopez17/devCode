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
    },
    createInscripcion: async (root, { input }) => {
        let db
        let inscripcion
        try {
            db = await connectDb()
            inscripcion = await db.collection('inscripciones').insertOne(input)
            input._id = inscripcion.insertedId
        } catch (error) {
            errorHandler(error)
        }
        return input
    },
    editInscripcion: async (root, { _id, input }) => {
        let db
        let inscripcion
        try {
            db = await connectDb()
            await db.collection('inscripciones').updateOne(
                { _id: ObjectId(_id)},
                {$set: input}
            )
            proyecto = await db.collection('inscripciones').findOne(
                {_id: ObjectId(_id)}
            )
        } catch (error) {
            errorHandler(error)
        }
        return inscripcion
    },
    createAvance: async (root, { input }) => {
        let db
        let avance
        try {
            db = await connectDb()
            avance = await db.collection('avances').insertOne(input)
            input._id = avance.insertedId
        } catch (error) {
            errorHandler(error)
        }
        return input
    },
    editAvance: async (root, { _id, input }) => {
        let db
        let avance
        try {
            db = await connectDb()
            await db.collection('avances').updateOne(
                { _id: ObjectId(_id)},
                {$set: input}
            )
            avance = await db.collection('avances').findOne(
                {_id: ObjectId(_id)}
            )
        } catch (error) {
            errorHandler(error)
        }
        return avance
    }
}