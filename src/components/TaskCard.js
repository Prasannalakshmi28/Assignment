import React from 'react';

const TaskCard = ({ task, provided }) => {
    return (
        <div
            className="task-card"
            {...provided.draggableProps}
            {...provided.dragHandleProps}
            ref={provided.innerRef}
        >
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Due: {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : 'N/A'}</p>
        </div>
    );
};

export default TaskCard;
