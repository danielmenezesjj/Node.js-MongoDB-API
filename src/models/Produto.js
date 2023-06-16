import mongoose from "mongoose";

const produtoSchema = new mongoose.Schema(
    {
        id: {type: String},
        nmProduto: {type: String, required: true},
        fornecedor: {type: String, required: true},
        fabricante: {type: String, required: true},
        valor: {type: Number}
    }
);

const produtos = mongoose.model('produtos', produtoSchema);

export default produtos;