import ContentsDAO from "../DAO/ContentsDAO.js"

class ControllerFilmes {
  static rotas(app){
    app.get('/filmes', ControllerFilmes.listar)
    app.post('/filmes', ControllerFilmes.inserir)                     //contentsController
    app.delete('/filmes/:id', ControllerFilmes.deletar)
    app.put('/filmes/:id', ControllerFilmes.atualizar)
  }

  static async listar(req, res){
    const filmes = await ContentsDAO.listar()

    res.send(filmes)
  }

  static async inserir(req, res){
    const filmes = {
      gereno: req.body.gereno,
      diretor: req.body.diretor,
      ano: req.body.ano
    }

    const result = await ContentsDAO.inserir(filmes)

    if(result.erro) {
      res.status(500).send(result)
    }

    res.send(result)
  }

  static async deletar(req, res){
    const filmes = await ContentsDAO.deletar(req.params.id)

    if(filmes.erro){
        res.status(500).send('Erro ao deletar o conteúdo')
    }

    res.send({mensagem: 'Conteúdo removido com sucesso'})
  }

  static async atualizar(req, res){
    const filmes = {
      gereno: req.body.gereno,
      diretor: req.body.diretor,
      ano: req.body.ano
    }

    const result = await ContentsDAO.atualizar(req.params.id, filmes)

    if(result.erro){
        res.status(500).send('Erro ao atualizar o conteúdo')
    }

    res.send({mensagem: 'Conteúdo alterado com sucesso'})
  }
}

export default ControllerFilmes