import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'

export default class Login extends React.Component {
    constructor() {
        super() 
        this.state = {
            email: '',
            password: '',
            errors: {}
        }
    }

    onChange = e => {
        this.setState({ [e.target.id]: e.target.value })
    }

    onSubmit = e => {
        e.preventDefault()

        const userData = {
            email: this.state.email,
            password: this.state.password
        }
    }

    render() {
        const { errors } = this.state

        return(
            <Form style={{ maxWidth: '400px', margin: '100px auto' }}>
                <FadeIn>
                <h1>Hello, Welcome Back</h1>
                <br />
                <h3>Login</h3>
                <Form.Group controlId="formBasicEmail">
                    <Form.Label>Email address</Form.Label>
                    <Form.Control onChange={this.onChange} value={this.state.email} isInvalid={errors.email} type="email" placeholder="Enter email" />
                    <Form.Text className="text-muted">
                        We'll never share your email with anyone else.
                    </Form.Text>
                </Form.Group>

                <Form.Group controlId="formBasicPassword">
                    <Form.Label>Password</Form.Label>
                    <Form.Control onChange={this.onChange} value={this.state.password} isInvalid={errors.password} type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group>
                    <Button block variant="primary" type="submit">
                        Login
                    </Button>
                </Form.Group>
                <Form.Group>
                    <Form.Text>
                        <Link to='/signup' >New to us? Please, Sign Up Here.</Link>
                    </Form.Text>
                </Form.Group>
                </FadeIn>
            </Form>
        )
    }
}