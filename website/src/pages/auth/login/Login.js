import React from "react"
import { attemptLogin } from '../../../services/api'

import {
  withRouter
} from 'react-router-dom'
class Login extends React.Component {

  constructor(props) {
    super(props)

    this.state = {
      username: '',
      password: '',

      message: ''
    }

    this.handleSubmit = this.handleSubmit.bind(this)
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event) {
    let name = event.currentTarget.name
    let value = event.currentTarget.value

    if ( name in this.state ) {
      this.setState({
        [name]: value
      })
    }
  }

  async handleSubmit(event) {

    this.setState({
      message: ''
    })

    event.preventDefault()
    console.log(`Form submitted with username: ${this.state.username}, password: ${this.state.password}`)

    let loginRequest = await attemptLogin( this.state )

    console.log( loginRequest.status )

    if ( loginRequest && loginRequest.status === 200 ) {
      // navigate because you're logged in...
      this.props.history.push('/welcome')
    } else {
      this.setState({
        message: 'Invalid credentials'
      })
    }
  }

  render() {

    return (
      <div>
        <h2>Login</h2>
        <p>{ this.state.message !== '' ? this.state.message : '' }</p>
        <form onSubmit={this.handleSubmit}>

          <label>
            Username:
            <input type="text" value={this.state.username} name={'username'} onChange={this.handleChange} />
          </label>

          <label>
            Password:
            <input type="password" value={this.state.password} name={'password'} onChange={this.handleChange} />
          </label>

          <input type="submit" value="Submit" />

        </form>
      </div>
    )
  }
}

export default withRouter(Login)
