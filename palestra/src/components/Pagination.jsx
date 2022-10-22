import { useCharactersContext } from "../contexts/CharactersContext"

export const Pagination = () => {
  const { page, setPage } = useCharactersContext()

  const disabled = page <= 1

  const handeNavigate = action => {
    if (action === "next") {
      setPage(page + 1)
    }

    if (action === "prev" && !disabled) {
      setPage(page - 1)
    }
  }

  return (
    <div className="container-pagination container-main">
      <button onClick={() => handeNavigate("prev")} disabled={disabled}>
        &lt;
      </button>

      <button onClick={() => handeNavigate("next")}>&gt;</button>
    </div>
  )
}
