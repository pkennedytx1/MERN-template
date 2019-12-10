import React from 'react'
import { Form, Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import FadeIn from 'react-fade-in'

export default function Signup() {
    return(
        <Form style={{ maxWidth: '400px', margin: '100px auto' }}>
            <FadeIn>
            <h1>Thanks for Joining Us!</h1>
            <br />
            <h3>Sign Up</h3>
            <Form.Group>
                <Form.Label>Name</Form.Label>
                <Form.Control type="name" placeholder="Enter Name" />
            </Form.Group>
            <Form.Group controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter Email" />
                <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" />
            </Form.Group>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password2" placeholder="Confirm Password" />
            </Form.Group>
            <Form.Group>
                <Button block variant="primary" type="submit">
                    Sign Up
                </Button>
            </Form.Group>
            <Form.Group>
                <Form.Text>
                    <Link to='/login'>Already a User? Please Sign In Here.</Link>
                </Form.Text>
            </Form.Group>
            </FadeIn>
        </Form>
    )
}