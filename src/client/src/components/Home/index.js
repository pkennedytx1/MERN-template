import React from 'react' 
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { logoutUser } from '../../actions/authActions'
import { Button, Navbar, Nav } from 'react-bootstrap' 

class Home extends React.Component {
    constructor() {
        super()
        this.state = {

        }
    }

    onLogoutClick = e => {
        e.preventDefault()
        this.props.logoutUser()
    }

    render() {
        const { user } = this.props.auth
        console.log(user)

        return(
            <div>
                <Navbar bg="primary" variant="dark">
                    <Navbar.Brand>Application Name</Navbar.Brand>
                    <Nav className="ml-auto">
                        <Nav.Link href="#home">{user.name}</Nav.Link>
                    </Nav>
                    <Button style={{margin: '0 0 0 10px'}} onClick={this.onLogoutClick} variant="outline-light">Logout</Button>
                </Navbar>
                <br />
                <h1 style={{textAlign: 'center'}} >Welcome Back, {user.name} <span role='img' aria-labelledby='happy emoji'>😄</span></h1>
            </div>
        )
    }
}

Home.propTypes = {
    logoutUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired
}

const mapStateToProps = state => ({
    auth: state.auth
})

export default connect(
    mapStateToProps,
    {  logoutUser }
)(Home)
