import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { AuthProvider } from './context/AuthContext';
import { TaskProvider } from './context/TaskContext';
import Navbar from './components/Layout/Navbar';
import PrivateRoute from './components/Layout/PrivateRoute';
import Login from './components/Auth/Login';
import Register from './components/Auth/Register';
import TaskBoard from './components/Tasks/TaskBoard';
import UserProfile from './components/Profile/UserProfile';

function App() {
    return (
        <AuthProvider>
            <TaskProvider>
                <Router>
                    <Navbar />
                    <Switch>
                        <Route path="/login" component={Login} />
                        <Route path="/register" component={Register} />
                        <PrivateRoute path="/" exact component={TaskBoard} />
                        <PrivateRoute path="/profile" component={UserProfile} />
                    </Switch>
                </Router>
            </TaskProvider>
        </AuthProvider>
    );
}

export default App;
