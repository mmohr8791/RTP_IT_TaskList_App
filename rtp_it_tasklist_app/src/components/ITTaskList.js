import React from 'react';
import ITTaskListForm from './ITTaskListForm';
import ITTask from './ITTask';
import logo from '../rtp_logo.JPG';

export default class ITTaskList extends React.Component
{
    state = {
        itTasks: [],
        displayITTasks: "all",
        itTaskColor: 'red',
    }

    addITTask = itTask => {
        this.setState({
            itTasks: [...this.state.itTasks, itTask]
        });
    };

    toggleITTaskComplete = itTaskText => {
        this.setState({
            itTasks: this.state.itTasks.map(itTask => {
               if (itTask.itTaskText === itTaskText) {
                // update 
                return {
                    ...itTask,
                    itTaskComplete: !itTask.itTaskComplete
                    };
                } else {
                return itTask;
                }
            })
        });
    }

    updateDisplayITTasks = (s) => {
        this.setState({
            displayITTasks: s
        })
    }

    render () {
        let itTasks=[];

        return (
            <div style={{display: "flex-box"}}>
                <img src={logo} className="App-logo" alt="logo" />           
                <h1>RTP - IT TaskList</h1> 
                <ITTaskListForm onSubmit={this.addITTask} />
                {itTasks.map(itTask => (
                    <ITTask
                        key={itTask.itTaskText}
                        toggleITTaskComplete={() => this.toggleITTaskComplete(itTask.itTaskText)}
                    />
                ))}
            </div>
        )
    }
}