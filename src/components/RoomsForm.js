import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRoom } from '../actions/roomsActions'

class RoomsForm extends Component {
    state = {
        name: ''
    }

    handleChange = event => {
        const { name, value } = event.target
        this.setState({
            [name]: value
        })
    }

    componentWillUnmount = () => {
        this.setState({
            name: ""
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addRoom(this.state)
        this.componentWillUnmount();
    }

   

    render() {
        return (
            <div className="room-form">
                <br /><br />
                <form onSubmit={ event => this.handleSubmit(event)}>
                    <label>Add a Room to the Gallery:</label><br />
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                    <input type="submit" name="submit"/>
                </form>
            </div>
        )
    }
}


export default connect(null, {addRoom})(RoomsForm);