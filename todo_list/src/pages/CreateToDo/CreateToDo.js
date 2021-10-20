import React from 'react';
import {Formik, Form, Field} from 'formik'
import {useHistory} from 'react-router-dom'
import * as yup from 'yup'
import MyInput from "../../components/MyInput/MyInput";
import styles from './CreateToDo.module.scss'
import Button from '@mui/material/Button';
import {useDispatch} from "react-redux";
import * as listActions from '../../store/actions/toDoList'

const IS_REQUIRED = 'This field is required'

const schema = yup.object().shape({
    title: yup.string().required(IS_REQUIRED)
})

const CreateToDo = () => {
    const dispatch = useDispatch()
    const history = useHistory()

    const handleSubmit = (values) => {
        dispatch(listActions.addTodo({...values, id: Date.now(), completed: false}))
        history.push('/')
    }

    return (
        <div>
            <Formik
                initialValues={{title: ''}}
                onSubmit={handleSubmit}
                validationSchema={schema}
            >
                {
                    ({errors, touched}) => {
                        return (
                            <Form className={styles.form}>
                                <p className={styles.formTitle}>To add a todo complete the form below</p>
                                <Field
                                    className={styles.formInput}
                                    component={MyInput}
                                    name='title'
                                    type='text'
                                    placeholder='Enter title of your todo'
                                />
                                <Button
                                    type='submit'
                                    variant="outlined"
                                    color='success'
                                    size="large"
                                    className={styles.submitBtn}
                                >Save todo</Button>
                            </Form>
                        )
                    }
                }
            </Formik>
        </div>
    )
}

export default CreateToDo;