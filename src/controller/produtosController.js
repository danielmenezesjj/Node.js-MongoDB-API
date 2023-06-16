import produtos from "../models/Produto.js";

class ProdutosController {

  static listProducts(req, res) {
    produtos
      .find()
      .then((produtos) => {
        return res.status(200).json(produtos);
      })
      .catch((error) => {
        return res.status(500).json(error.message);
      });
  }

  static listOneProducts(req, res){
    const {id} = req.params;
    produtos.findById(id)
    .then((produtos)=>{
        return res.status(200).json(produtos)
    })
    .catch((error)=>{
        return res.status(404).json(error.message)
    })
  }


  static createProducts(req, res) {
    const dados = req.body;
    produtos.create(dados)
    .then((produtos)=>{
        return res.status(201).json(produtos);
    })
    .catch((error)=>{
        return res.status(500).json(error.message);
    })
  }

  static updateProducts(req, res){
    const {id} = req.params
    const newInfos = req.body;
    const filter = { _id: id };
    produtos.updateOne(filter, newInfos)
    .then((produtos)=>{
        return res.status(200).json(`Produto de id: ${id} atualizado com sucesso!`);
    })
    .catch((error)=>{
        return res.status(404).json(error.message);
    })
  }

  static deleteProducts(req, res){
    const {id} = req.params
    const filter = {_id: id}
    produtos.deleteOne(filter)
    .then((produtos)=>{
        return res.status(200).json(`Produto de id: ${id} deletado com sucesso!`)
    })
    .catch((error)=>{
        return res.status(404).json(error.message);
    })
  }

}
export default ProdutosController;
