// import Message from "../../models/Message";
const connectDb = require('./database')
const { ObjectId } = require('mongodb')
const errorHandler = require('./errorHandler')

module.exports = {
    authUsuario: async (root, { email, password }) => {
        const defaults = {
            access: false
        };
        let usuario;
        let db;  
        try {
            db = await connectDb();
            usuario = await db.collection('usuarios').findOne({ email: email }); 
            if (usuario && usuario.state === 'Autorizado' && usuario.password === password) {
                    usuario.access = true;
            } else {
                usuario = Object.assign(defaults);
            } 
        } catch (error) {
            errorHandler(error);
        }
        return usuario;
    },
    getUsuarios: async (root, { role }) => {
        let db
        let usuarios = []
        try {
            db = await connectDb()
            usuarios = role ? await db.collection('usuarios').find({ role: role }).toArray() :
                await db.collection('usuarios').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return usuarios
    },
    getUsuario: async (root, { id }) => {
        let db
        let usuario
        try {
            db = await connectDb()
            usuario = await db.collection('usuarios').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return usuario
    },
    getProyectos: async (root, { leaderId }) => {
        let db
        let proyectos = []
        try {
            db = await connectDb()
            proyectos = leaderId ? await db.collection('proyectos').find({leaderId: leaderId}).toArray() : await db.collection('proyectos').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return proyectos
    },
    getProyecto: async (root, { id }) => {
        let db
        let proyecto
        try {
            db = await connectDb()
            proyecto = await db.collection('proyectos').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return proyecto
    },
    getInscripciones: async (root, { projectId }) => {
        let db
        let inscripciones = []
        try {
            db = await connectDb()
            inscripciones = projectId ?
                await db.collection('inscripciones').find({ projectId: { $in: projectId } }).toArray() :
                await db.collection('inscripciones').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return inscripciones
    },
    getInscripcion: async (root, { id }) => {
        let db
        let inscripcion
        try {
            db = await connectDb()
            inscripcion = await db.collection('inscripciones').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return inscripcion
    },
    getAvances: async () => {
        let db
        let avances = []
        try {
            db = await connectDb()
            avances = await db.collection('avances').find().toArray()
        } catch (error) {
            errorHandler(error)
        }
        return avances
    },
    getAvance: async (root, { id }) => {
        let db
        let avance
        try {
            db = await connectDb()
            avance = await db.collection('avances').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return avance
    }
}