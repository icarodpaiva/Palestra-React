import { useEffect, useState } from "react"
import { searchCharacters } from "../apis/searchCharacters"

export const useCharacters = page => {
  const [charactersList, setCharactersList] = useState([])

  useEffect(() => {
    const request = async () => {
      const response = await searchCharacters(page)
      setCharactersList(response)
    }

    request()
  }, [page])

  return { charactersList }
}
