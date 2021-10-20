import React from 'react';
import styles from './Error404.module.scss'
import {Link} from "react-router-dom";

const Error404 = () => {
    return (
        <div className={styles.container}>
            <div className={styles.error}>
                <h2 className={styles.errorText}>Sorry, there is no such page</h2>
                <Link to='/' className={styles.errorText}>Go to main page</Link>
            </div>
        </div>
    );
};

export default Error404;