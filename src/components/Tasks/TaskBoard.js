import React, { useContext } from 'react';
import { DragDropContext } from 'react-beautiful-dnd';
import { TaskContext } from '../../context/TaskContext';
import TaskColumn from './TaskColumn';

const TaskBoard = () => {
    const { tasks, updateTask } = useContext(TaskContext);

    const columns = {
        todo: tasks.filter(task => task.status === 'todo'),
        'in-progress': tasks.filter(task => task.status === 'in-progress'),
        done: tasks.filter(task => task.status === 'done')
    };

    const handleDragEnd = (result) => {
        const { source, destination } = result;
        if (!destination) return;

        const task = columns[source.droppableId][source.index];
        task.status = destination.droppableId;
        updateTask(task._id, task);
    };

    return (
        <DragDropContext onDragEnd={handleDragEnd}>
            <div className="task-board">
                {Object.keys(columns).map(columnId => (
                    <TaskColumn key={columnId} id={columnId} tasks={columns[columnId]} />
                ))}
            </div>
        </DragDropContext>
    );
};

export default TaskBoard;
