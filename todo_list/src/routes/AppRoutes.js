import React from 'react';
import {Switch, Route} from "react-router-dom";
import TodoListPage from "../pages/TodoListPage/TodoListPage";
import Error404 from "../pages/Error404/Error404";
import CreateToDo from "../pages/CreateToDo/CreateToDo";
import MainLayout from "../layouts/MainLayout/MainLayout";

const AppRoutes = () => {
    return (
        <div>
            <Switch>
                <Route exact path='/'><MainLayout><TodoListPage /></MainLayout></Route>
                <Route exact path='/create'><MainLayout><CreateToDo /> </MainLayout></Route>
                <Route path='*'><Error404/></Route>
            </Switch>
        </div>
    );
};

export default AppRoutes;