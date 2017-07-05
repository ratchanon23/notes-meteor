import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router'
import { Accounts } from 'meteor/accounts-base'
import { createContainer } from 'meteor/react-meteor-data'

export class Signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            error: ''
        }
    }

    onSubmit(event) {
        event.preventDefault()

        let email = this.refs.email.value.trim()
        let password = this.refs.password.value.trim()

        if(password.length < 9) {
            return this.setState({error: 'Password must be morethan 8 character long.'})
        }

        this.props.createUser({email, password}, (err) => {
            if(err) {
                this.setState({
                    error: err.reason
                })
            } else {
                this.setState({
                    error: ''
                })
            }
        })
    }

    render() {
        return (
            <div className='boxed-view'>
                <div className='boxed-view__box'>
                    <h1> Join </h1>
                    {this.state.error ? <p>{this.state.error}</p> : undefined}
                    <form onSubmit={this.onSubmit.bind(this)} noValidate className='boxed-view__form'>
                        <input type='email' name='email' ref='email' placeholder='Email' />
                        <input type='password' name='password' ref='password' placeholder='Password' />
                        <button className='button'>Create account</button>
                    </form>
                    <Link to='/'> Already have an account? </Link>
                </div>
            </div>
        )
    }
}

Signup.PropTypes = {
    createUser: PropTypes.func.isRequired
}

export default createContainer(() => {
    return {
        createUser: Accounts.createUser
    }
}, Signup)