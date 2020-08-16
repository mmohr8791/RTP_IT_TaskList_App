import React from 'react';

export default props => (
    <div style={{display: "flex"}}>
        <div style={{
            fontWeight: props.itTask.itTaskComplete ? "" : 'bold',
            color: props.itTask.itTaskComplete ? 'grey' : 'blue',
            textDecoration: props.itTaskComplete ? 'line-through' : ""
            }}>
        </div>
    </div>
)