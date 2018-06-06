import mongoose from 'mongoose';

// Mongo Connection
mongoose.Promise = global.Promise
mongoose.connect('mongodb://localhost/friends', {})

const friendSchema = new mongoose.Schema({
    firstName: { type: String },
    lastName: { type: String },
    language: { type: String },
    contacts: { type: Array },
    gender: { type: String },
    email: { type: String },
    age: { type: Number },
})

const Friends = mongoose.model('friends', friendSchema)

export { Friends }