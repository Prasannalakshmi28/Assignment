import React from 'react';
import { Droppable } from 'react-beautiful-dnd';
import TaskItem from './TaskItem';

const TaskColumn = ({ id, tasks }) => {
    return (
        <Droppable droppableId={id}>
            {(provided) => (
                <div
                    className="task-column"
                    {...provided.droppableProps}
                    ref={provided.innerRef}
                >
                    <h2>{id.toUpperCase()}</h2>
                    {tasks.map((task, index) => (
                        <TaskItem key={task._id} task={task} index={index} />
                    ))}
                    {provided.placeholder}
                </div>
            )}
        </Droppable>
    );
};

export default TaskColumn;
