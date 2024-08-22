import React, { createContext, useState, useContext, useEffect } from 'react';
import axios from 'axios';
import { AuthContext } from './AuthContext';

export const TaskContext = createContext();

export const TaskProvider = ({ children }) => {
    const { user } = useContext(AuthContext);
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        if (user) {
            axios.get(`${process.env.REACT_APP_API_URL}/tasks`)
                .then(res => setTasks(res.data))
                .catch(err => console.error(err));
        }
    }, [user]);

    const addTask = async (task) => {
        const res = await axios.post(`${process.env.REACT_APP_API_URL}/tasks`, task);
        setTasks([...tasks, res.data]);
    };

    const updateTask = async (id, updatedTask) => {
        const res = await axios.put(`${process.env.REACT_APP_API_URL}/tasks/${id}`, updatedTask);
        setTasks(tasks.map(task => task._id === id ? res.data : task));
    };

    const deleteTask = async (id) => {
        await axios.delete(`${process.env.REACT_APP_API_URL}/tasks/${id}`);
        setTasks(tasks.filter(task => task._id !== id));
    };

    return (
        <TaskContext.Provider value={{ tasks, addTask, updateTask, deleteTask }}>
            {children}
        </TaskContext.Provider>
    );
};
