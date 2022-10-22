import React from "react"
import { Navigation } from "./components/Navigation"
import { items } from "./constants"
import { Character } from "./components/Character"
import { Modal } from "./components/Modal"
import { Pagination } from "./components/Pagination"
import { useCharactersContext } from "./contexts/CharactersContext"
import "./App.css"

function App() {
  const { charactersList, characterOnModal } = useCharactersContext()

  return (
    <>
      <header>
        <Navigation imgPosition="top" items={items} />
      </header>

      <main className="container-main">
        <h1>Rick and Morty characters</h1>

        <div id="container-characters">
          {charactersList.map(character => (
            <Character key={character.id} character={character} />
          ))}
        </div>

        {!!characterOnModal && <Modal />}

        <Pagination />
      </main>

      <footer>
        <Navigation imgPosition="bottom" items={items} />
      </footer>
    </>
  )
}

export default App
