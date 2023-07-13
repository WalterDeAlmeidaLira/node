import mongoose from 'mongoose';

mongoose.connect("mongodb+srv://discocerto:discocertodalivraria@livraria.dgtys3m.mongodb.net/biblioteca?");

let db = mongoose.connection;

export default db;