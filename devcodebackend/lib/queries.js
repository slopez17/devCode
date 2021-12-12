'use strict'

const connectDb = require('./db');
const { ObjectId } = require('mongodb');
const errorHandler = require('./errorHandler');

module.exports = {
    authUser: async (root, { email, password }) => {
        let db;
        let user;
        let match = false;
        try {
            db = await connectDb();
            user = await db.collection('usuarios').findOne({ email: email });
            if (user && user.state === 'Autorizado' && user.password === password) {
                match = true;
            }
        } catch (error) {
            errorHandler(error);
        }
        return match;
    },
    getUser: async (root, { id }) => {
        let db
        let user
        try {
            db = await connectDb()
            user = await db.collection('usuarios').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return user
    },
    getUsers: async (root, { role }) => {
        let db;
        let users = [];
        try {
            db = await connectDb();
            users = role ? await db.collection('usuarios').find({ role: role }).toArray() :
                await db.collection('usuarios').find().toArray();
        } catch (error) {
            errorHandler(error);
        }
        return users;
    },
    getProject: async (root, { id }) => {
        let db
        let project
        try {
            db = await connectDb()
            project = await db.collection('proyectos').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return project
    },
    getProjects: async (root, { leaderId }) => {
        let db;
        let projects = [];
        try {
            db = await connectDb();
            projects = leaderId ? await db.collection('proyectos').find({leaderId: leaderId}).toArray() :
                await db.collection('proyectos').find().toArray();
        } catch (error) {
            errorHandler(error);
        }
        return projects;
    },
    getEntry: async (root, { id }) => {
        let db
        let entry
        try {
            db = await connectDb()
            entry = await db.collection('inscripciones').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return entry
    },
    getEntries: async (root, { projectId }) => {
        let db;
        let entries = [];
        try {
            db = await connectDb();
            
            entries = projectId.length > 0 ?
                await db.collection('inscripciones').find({ projectId: { $in: projectId } }).toArray() :
                await db.collection('inscripciones').find().toArray();
        } catch (error) {
            errorHandler(error);
        }
        return entries;
    },
    getAdvance: async (root, { id }) => {
        let db
        let advance
        try {
            db = await connectDb()
            advance = await db.collection('avances').findOne({ _id: ObjectId(id) })
        } catch (error) {
            errorHandler(error)
        }
        return advance
    },
    getAdvances: async (root, { projectId }) => {
        let db;
        let advances = [];
        try {
            db = await connectDb();
            
            advances = projectId.length > 0 ?
                await db.collection('avances').find({ projectId: { $in: projectId } }).toArray() :
                await db.collection('avances').find().toArray();
        } catch (error) {
            errorHandler(error);
        }
        return advances;
    }
}