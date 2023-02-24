const ContentsApi = () => {
  const url = 'http://localhost:3000'

  return {
      getContents () {
          return fetch(`${url}/filmes`, {
              method: 'GET',
              headers: {
                  'Content-Type': 'application/json'
              }
          })
      },
      deleteContent (contentId) {
        return fetch(`${url}/filmes/${contentId}`, {
          method: 'DELETE',
          headers: {
              'Content-Type': 'application/json'
          }
       })
      },
      createContent (genero, diretor, ano) {
        return fetch(`${url}/filmes`, {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              gereno: gereno,
              diretor: diretor,
              ano: ano
            }
          )
       })
      },
      updateContent(contentId, gereno, diretor, ano) {
        return fetch(`${url}/filmes/${contentId}`, {
          method: 'PUT',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(
            {
              gereno: gereno,
              diretor: diretor,
              ano: ano
            }
          )
       })
      },
  }
}

export default ContentsApi