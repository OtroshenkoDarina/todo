import React, {useEffect} from 'react';
import Header from "../../components/Header/Header";
import styles from './MainLayout.module.scss'
import {useDispatch, useSelector} from "react-redux";
import * as listActions from "../../store/actions/toDoList";
import {localStorageGet, localStorageSet} from "../../utils/localStorage";

const MainLayout = ({children}) => {
    const list = useSelector(state => state.toDoList.data)
    const dispatch = useDispatch()

    useEffect(() => {
        if (list?.length) return
        else if (localStorageGet('todoList')) dispatch(listActions.getToDoListFromLS())
        else dispatch(listActions.getToDoList())
    }, [])

    useEffect(() => {
        localStorageSet('todoList', list)
    }, [list])

    return (
        <div className={styles.container}>
            <Header/>
            {children}
        </div>

    );
};

export default MainLayout;