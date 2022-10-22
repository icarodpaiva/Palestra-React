export const searchCharacters = async page => {
  const query = `query SEARCH_CHARACTERES ($page: Int) {
    characters (page: $page){
      info {
        next
        prev
      }
      results {
        id
        image
        name
        species
        status        
        origin {
          name
          dimension
        }              
      }
    }
  }`

  const variables = { page }

  const response = await fetch("https://rickandmortyapi.com/graphql", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({
      query,
      variables
    })
  })
  const {
    data: {
      characters: { results }
    }
  } = await response.json()

  return results
}
