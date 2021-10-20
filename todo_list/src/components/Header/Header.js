import React from 'react';
import {NavLink} from "react-router-dom";
import styles from './Header.module.scss';

const Header = () => {
    return (
        <div className={styles.header}>
            <NavLink exact to='/' className={styles.link} activeClassName={styles.active}>Todos</NavLink>
            <NavLink exact to='/create' className={styles.link} activeClassName={styles.active}>Create todo
                form</NavLink>
        </div>
    )
}

export default Header