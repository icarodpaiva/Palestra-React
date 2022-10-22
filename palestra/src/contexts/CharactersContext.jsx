import React, { useContext, createContext, useState } from "react"
import { useCharacters } from "../hooks/useCharacters"

const CharactersContext = createContext(null)

export const CharactersContextProvider = ({ children }) => {
  const [page, setPage] = useState(1)
  const [characterOnModal, setCharacterOnModal] = useState()
  const { charactersList } = useCharacters(page)

  console.log("charactersList", charactersList)

  return (
    <CharactersContext.Provider
      value={{
        page,
        setPage,
        characterOnModal,
        setCharacterOnModal,
        charactersList
      }}
    >
      {children}
    </CharactersContext.Provider>
  )
}

export const useCharactersContext = () => useContext(CharactersContext)
