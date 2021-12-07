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
    }
}