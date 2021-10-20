import React from 'react';
import styles from './MyInput.module.scss'

const MyInput = (props) => {
    const {field, form, ...rest} = props
    const {name} = field
    return (
        <div>
            <input {...rest} {...field}/>
            {form.touched[name] && form.errors[name] && <div className={styles.error}>{form.errors[name]}</div>}
        </div>
    )
}

export default MyInput