import React from 'react';
import {useSelector} from "react-redux";
import ToDoCard from "../ToDoCard/ToDoCard";
import styles from './ToDoList.module.scss'


const ToDoList = () => {
    const list = useSelector(state => state.toDoList.data)


    return (
        <div className={styles.list}>
            {list?.map(item => <ToDoCard card={item} key={item.id}/>)}
        </div>
    );
};

export default ToDoList;