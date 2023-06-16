import mongoose from "mongoose";

mongoose.connect("mongodb+srv://daniel:123@node-estudos.be3gcpk.mongodb.net/produtos")

let db = mongoose.connection;

export default db;