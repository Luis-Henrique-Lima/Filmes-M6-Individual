import db from '../infra/db.js'

class ContentsDAO {
    static listar() {
        const query = 'SELECT * FROM filmes';
        return new Promise((resolve, reject) => {
            db.all(query, (err, rows) => {
                if (err) {
                    reject(err);
                }

                resolve(rows)
            });
        });
    }

    static inserir(filmes) {
        const query = 'INSERT INTO filmes (gereno, diretor, ano) VALUES (?, ?, ?)';
        return new Promise((resolve, reject) => {
            db.run(query, [filmes.gereno, filmes.diretor, filmes.ano], function (err) {
                if (err) {
                    reject({
                        mensagem: 'Erro ao inserir o filmes',
                        erro: err
                    })
                }

                resolve({
                    mensagem: 'filmes criado com sucesso',
                    contentId: this.lastID
                 })
            });
        });
    }

    static deletar(id) {
      const query = 'DELETE FROM filmes WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao deletar o filmes',
                      erro: err
                  })
              }

              resolve({ mensagem: 'filmes deletado com sucesso' })
          });
      });
    }

    static atualizar(id, filmes) {
      const query = 'UPDATE filmes SET gereno = ?, diretor = ?, ano = ? WHERE id = ?';
      return new Promise((resolve, reject) => {
          db.run(query, [filmes.gereno, filmes.diretor, filmes.ano, id], (err) => {
              if (err) {
                  reject({
                      mensagem: 'Erro ao atualizar o filmes',
                      erro: err
                  })
              }

              resolve({ mensagem: 'filmes atualizado com sucesso' })
          });
      });
    }
}

export default ContentsDAO;