'use strict'

const connectDb = require('./db');
const { ObjectId } = require('mongodb');
const errorHandler = require('./errorHandler');

module.exports = {
    createUser: async (root, { input }) => {
        const defaults = {
            state: 'Pendiente'
        };
        const newUser = Object.assign(input, defaults);
        let db;
        let user;
        try {
            db = await connectDb()
            user = await db.collection('usuarios').insertOne(newUser);
            newUser._id = user.insertedId;
        } catch (error) {
            errorHandler(error);
        }
        return newUser;
    },
    updateUser: async (root, { _id, input }) => {
        let db;
        let user;
        try {
            db = await connectDb();
            await db.collection('usuarios').updateOne(
                { _id: ObjectId(_id) },
                { $set: input }
            );
            user = await db.collection('usuarios').findOne(
                { _id: ObjectId(_id) }
            );
        } catch (error) {
            errorHandler(error);
        }
        return user 
    },
    createProject: async (root, { input }) => {
        const defaults = {
            state: 'Inactivo'
        };
        const newProject = Object.assign(input, defaults);
        let db;
        let project;
        try {
            db = await connectDb()
            project = await db.collection('proyectos').insertOne(newProject);
            newProject._id = project.insertedId;
        } catch (error) {
            errorHandler(error);
        }
        return newProject;
    },
    updateProject: async (root, { _id, input }) => {
        let db;
        let project;
        try {
            db = await connectDb();
            await db.collection('proyectos').updateOne(
                { _id: ObjectId(_id) },
                { $set: input }
            );
            project = await db.collection('proyectos').findOne(
                { _id: ObjectId(_id) }
            );
        } catch (error) {
            errorHandler(error);
        }
        return project;
    },
    createEntry: async (root, { input }) => {
        let db;
        let entry;
        try {
            db = await connectDb()
            entry = await db.collection('inscripciones').insertOne(input);
            input._id = entry.insertedId;
        } catch (error) {
            errorHandler(error);
        }
        return input;
    },
    updateEntry: async (root, { _id, input }) => {
        let db;
        let entry;
        try {
            db = await connectDb();
            await db.collection('inscripciones').updateOne(
                { _id: ObjectId(_id) },
                { $set: input }
            );
            entry = await db.collection('inscripciones').findOne(
                { _id: ObjectId(_id) }
            );
        } catch (error) {
            errorHandler(error);
        }
        return entry;
    },
    createAdvance: async (root, { input }) => {
        let db;
        let advance;
        try {
            db = await connectDb()
            advance = await db.collection('avances').insertOne(input);
            input._id = advance.insertedId;
        } catch (error) {
            errorHandler(error);
        }
        return input;
    },
    updateAdvance: async (root, { _id, input }) => {
        let db;
        let advance;
        try {
            db = await connectDb();
            await db.collection('avances').updateOne(
                { _id: ObjectId(_id) },
                { $set: input }
            );
            advance = await db.collection('avances').findOne(
                { _id: ObjectId(_id) }
            );
        } catch (error) {
            errorHandler(error);
        }
        return advance;
    },
}