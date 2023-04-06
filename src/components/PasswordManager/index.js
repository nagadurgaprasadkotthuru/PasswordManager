import {Component} from 'react'

import {v4} from 'uuid'

import './index.css'

import PasswordItems from '../PasswordItems'

class PasswordManager extends Component {
  state = {
    website: '',
    username: '',
    password: '',
    searchInput: '',
    isShowPassword: false,
    passwordsList: [],
  }

  onCheckBoxClicked = () =>
    this.setState(prevState => ({
      isShowPassword: !prevState.isShowPassword,
    }))

  onDeletePassword = id =>
    this.setState(prevState => ({
      passwordsList: prevState.passwordsList.filter(each => each.id !== id),
    }))

  getUnorderedList = filteredList => {
    const {isShowPassword} = this.state
    return (
      <ul className="unordered-lists-container">
        {filteredList.map(each => (
          <PasswordItems
            passwordDetails={each}
            key={each.id}
            onDeletePassword={this.onDeletePassword}
            isShowPassword={isShowPassword}
          />
        ))}
      </ul>
    )
  }

  getNoPasswordsContainer = () => (
    <div className="no-passwords-container">
      <img
        className="no-passwords-image"
        alt="no passwords"
        src="https://assets.ccbp.in/frontend/react-js/no-passwords-img.png"
      />
      <p className="no-passwords-para">No Passwords</p>
    </div>
  )

  onSubmitFrom = event => {
    event.preventDefault()
    const {website, username, password} = this.state
    const newPasswordItem = {
      id: v4(),
      website,
      username,
      password,
    }
    this.setState(prevState => ({
      passwordsList: [...prevState.passwordsList, newPasswordItem],
      website: '',
      username: '',
      password: '',
    }))
  }

  onChangeWebsite = event => this.setState({website: event.target.value})

  onChangeUsername = event => this.setState({username: event.target.value})

  onChangePassword = event => this.setState({password: event.target.value})

  onChangeSearchInput = event =>
    this.setState({searchInput: event.target.value})

  render() {
    const {website, username, password, searchInput, passwordsList} = this.state
    const filteredList = passwordsList.filter(each =>
      each.website.toLowerCase().includes(searchInput.toLowerCase()),
    )
    const noOfPasswords = filteredList.length
    const isPasswordsPresent = noOfPasswords === 0
    return (
      <div className="bg-container">
        <div className="content-container">
          <img
            className="app-logo"
            alt="app logo"
            src="https://assets.ccbp.in/frontend/react-js/password-manager-logo-img.png"
          />
          <div className="form-container">
            <form className="form" onSubmit={this.onSubmitFrom}>
              <h1 className="form-heading">Add New Password</h1>
              <div className="website-input-container">
                <img
                  className="website"
                  alt="website"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-website-img.png"
                />
                <input
                  className="website-input"
                  type="text"
                  placeholder="Enter Website"
                  value={website}
                  onChange={this.onChangeWebsite}
                />
              </div>
              <div className="website-input-container">
                <img
                  className="website"
                  alt="username"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-username-img.png"
                />
                <input
                  className="website-input"
                  type="text"
                  placeholder="Enter Username"
                  value={username}
                  onChange={this.onChangeUsername}
                />
              </div>
              <div className="website-input-container">
                <img
                  className="website"
                  alt="password"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-password-img.png"
                />
                <input
                  className="website-input"
                  type="password"
                  placeholder="Enter Password"
                  value={password}
                  onChange={this.onChangePassword}
                />
              </div>
              <button className="button" type="submit">
                Add
              </button>
            </form>
            <img
              className="form-container-image"
              alt="password manager"
              src="https://assets.ccbp.in/frontend/react-js/password-manager-lg-img.png"
            />
          </div>
          <div className="password-list-container">
            <div className="header">
              <div className="card1">
                <h1 className="no-of-passwords">Your Passwords</h1>
                <p className="span-ele">{noOfPasswords}</p>
              </div>
              <div className="search-input-logo-container">
                <img
                  className="search-logo"
                  alt="search"
                  src="https://assets.ccbp.in/frontend/react-js/password-manager-search-img.png"
                />
                <input
                  className="search-input"
                  type="search"
                  placeholder="Search"
                  onChange={this.onChangeSearchInput}
                />
              </div>
            </div>
            <hr className="horizontal-line" />
            <div className="card2">
              <input
                className="check-box"
                type="checkbox"
                id="check"
                onClick={this.onCheckBoxClicked}
              />
              <label className="label-text" htmlFor="check">
                Show Passwords
              </label>
            </div>
            <div>
              {isPasswordsPresent
                ? this.getNoPasswordsContainer()
                : this.getUnorderedList(filteredList)}
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default PasswordManager
