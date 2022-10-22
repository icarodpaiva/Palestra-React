import { useCharactersContext } from "../contexts/CharactersContext"

export const Character = ({
  character,
  character: { image, name, species }
}) => {
  const { setCharacterOnModal } = useCharactersContext()

  return (
    <div
      className="container-character"
      role="button"
      onClick={() => setCharacterOnModal(character)}
    >
      <p>
        <img src={image} />
      </p>
      <p>
        Name: <strong>{name}</strong>
      </p>
      <p>Species: {species}</p>
    </div>
  )
}
