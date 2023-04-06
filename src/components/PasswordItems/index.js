import './index.css'

const PasswordItems = props => {
  const {passwordDetails, onDeletePassword, isShowPassword} = props
  const {id, website, username, password} = passwordDetails
  const imgUrl =
    'https://assets.ccbp.in/frontend/react-js/password-manager-stars-img.png'
  const deletePassword = () => onDeletePassword(id)
  return (
    <li className="list-item">
      <p className="profile">{website[0].toUpperCase()}</p>
      <div className="card3">
        <p className="website-name">{website}</p>
        <p className="username website-name">{username}</p>
        <p className="password website-name">
          {isShowPassword ? (
            password
          ) : (
            <img className="stars" alt="stars" src={imgUrl} />
          )}
        </p>
      </div>
      <button
        className="delete"
        type="button"
        data-testid="delete"
        onClick={deletePassword}
      >
        <img
          className="delete-icon"
          alt="delete"
          src="https://assets.ccbp.in/frontend/react-js/password-manager-delete-img.png"
        />
      </button>
    </li>
  )
}

export default PasswordItems
