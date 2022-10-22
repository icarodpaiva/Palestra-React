import { useCharactersContext } from "../contexts/CharactersContext"

export const Modal = () => {
  const {
    characterOnModal: {
      image,
      name,
      species,
      status,
      originName,
      originDimension
    },
    setCharacterOnModal
  } = useCharactersContext()

  return (
    <div id="modal">
      <h1>abcd</h1>
      <button onClick={() => setCharacterOnModal()}>X</button>
      <div className="container-character">
        <p>
          <img src={image} />
        </p>
        <p>
          Name: <strong>{name}</strong>
        </p>
        <p>Species: {species}</p>
        <p>Status: {status}</p>
        <p>Origin name: {originName}</p>
        <p>Origin dimension: {originDimension}</p>
      </div>
    </div>
  )
}
