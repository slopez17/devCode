'use strict'

const connectDb = require('../lib/db')
const { ObjectId } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
    Usuario: {
        usuario : async ({ usuario }) => {
            let db
            let usuarioData
            let ids
            try {
                db = await connectDb()
                ids = usuario ? usuario.map(id => ObjectId(id)): []
                usuarioData = ids.length > 0
                    ? await db.collection('usuarios').find(
                        { _id: { $in: ids}}
                    ).toArray()
                    : [] 
            } catch (error) {
                errorHandler(error)
            }
            return usuarioData
        }
    }
}