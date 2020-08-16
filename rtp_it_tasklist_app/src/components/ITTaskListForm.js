import React from 'react';

export default class ITTaskListForm extends React.Component {

    state = {
        itTaskText: ""
    }

    handleChange = event => {
        this.setState({
                [event.target.name]: event.target.value
        });
    };

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit({
            itTaskText: this.state.itTaskText,
            itTaskColor: this.state.itTaskColor,
            itTaskComplete: false
        });

        this.setState({
            itTaskText: ""
        });
    };
    
    render () {
        return (
            <form onSubmit={this.state.handleSubmit}>
                <input 
                    name="itTaskText"
                    value={this.state.itTaskText}
                    onChange={this.handleChange}
                    placeholder="New Task..."
                />
                <button onClick={this.handleSubmit}>Add Task</button>
            </form>
        )
    }
}