import React, { Component } from 'react'
import { connect } from 'react-redux'
import { addRoom } from '../actions/roomsActions'

class RoomsForm extends Component {
    state = {
        name: ''
    }

    handleChange = event =>{
        this.setState({
            name: event.target.value
        })
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.addRoom(this.state)
    }

    render() {
        return (
            <div>
                <form onSubmit={ event => this.handleSubmit(event)}>
                    <label>Name of Room in Gallery:</label><br />
                    <input type='text' value={this.state.name} onChange={this.handleChange} name="name"/>
                    <input type="submit" name="submit"/>
                </form>
            </div>
        )
    }
}

const mapDispatchToProps = dispatch => {
    return {
        //addRoom: formData => dispatch({type: 'ADD_ROOM', payload: formData})
        addRoom
    }
}

export default connect(null, mapDispatchToProps)(RoomsForm);