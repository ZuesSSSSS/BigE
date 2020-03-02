import React from "react";

class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    event.preventDefault()
    console.log( event )
  }

  handleSubmit() {
    console.log(`Form submitted with username:${this.state.username}, password:${this.state.password}`)

  }

  render() {
    return (
      <div>
        <h2>Login</h2>
        <form onSubmit={this.handleSubmit}>

          <label>
            Username:
            <input type="text" value={this.state.username} onChange={this.handleChange} />
          </label>

          <label>
            Password:
            <input type="password" value={this.state.password} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />

        </form>
      </div>
    )
  }
}

export default Login
