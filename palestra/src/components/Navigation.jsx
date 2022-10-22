export const Navigation = ({ imgPosition, items }) => {
  return (
    <div className="container-main">
      <div className="container-header">
        {imgPosition === "top" && (
          <a href="/">
            <img
              src="https://seeklogo.com/images/F/Fatec-logo-9710C99301-seeklogo.com.png"
              alt="logo"
              width="50px"
            />
          </a>
        )}
        <nav>
          <ul className="nav-list">
            {items.map(({ href, text }, index) => (
              <li key={index}>
                <a href={href}>{text}</a>
              </li>
            ))}
          </ul>
        </nav>
        {imgPosition === "bottom" && (
          <a href="/">
            <img
              src="https://seeklogo.com/images/F/Fatec-logo-9710C99301-seeklogo.com.png"
              alt="logo"
              width="50px"
            />
          </a>
        )}
      </div>
    </div>
  )
}
