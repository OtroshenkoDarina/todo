import React, {useState} from 'react';
import Box from '@mui/material/Box';
import Checkbox from '@mui/material/Checkbox';
import styles from './ToDoCard.module.scss'
import {grey} from "@mui/material/colors";
import {useDispatch} from "react-redux";
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import ModeEditOutlineIcon from '@mui/icons-material/ModeEditOutline';
import * as listActions from '../../store/actions/toDoList'
import Button from '@mui/material/Button';
import Modal from '@mui/material/Modal';
import {Field, Form, Formik} from "formik";
import * as yup from "yup";
import MyInput from "../MyInput/MyInput";

const IS_REQUIRED = 'This field is required'

const schema = yup.object().shape({
    title: yup.string().required(IS_REQUIRED)
})

const ToDoCard = ({card}) => {
    const {title, id, completed} = card
    const [openModal, setOpenModal] = useState(false)
    const dispatch = useDispatch()

    const deleteTodo = () => dispatch(listActions.deleteTodo(id))

    const changeCompletedTodo = (e) => {
        dispatch(listActions.setCompletedTodo(id, e?.target?.checked));
    }

    const editTodo = (values) => {
        dispatch(listActions.editTodo(id, values.title))
        setOpenModal(!openModal)
    }

    return (
        <div>
            <Box component="div" className={styles.card} sx={{p: 2}}>
                <p className={styles.title}>{title}</p>
                <div className={styles.icons}>
                    <ModeEditOutlineIcon
                        color='action'
                        sx={{cursor: 'pointer'}}
                        onClick={() => setOpenModal(!openModal)}
                    />
                    <Checkbox
                        checked={completed}
                        onChange={changeCompletedTodo}
                        sx={{
                            color: grey[600],
                            '& .MuiSvgIcon-root': {fontSize: 35},
                            '&.Mui-checked': {color: grey[600]},
                        }}/>
                </div>
                <HighlightOffIcon
                    onClick={deleteTodo}
                    color='action'
                    fontSize='large'
                    className={styles.close}
                />
            </Box>
            <Modal
                open={openModal}
                onClose={() => setOpenModal(!openModal)}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box className={styles.form} sx={{p: 4}}>
                    <Formik
                        initialValues={{title: title}}
                        onSubmit={editTodo}
                        validationSchema={schema}
                    >
                        {
                            ({errors, touched}) => {
                                return (
                                    <Form>
                                        <p className={styles.editTitle}>To edit a todo complete the form below</p>
                                        <Field
                                            className={styles.editInput}
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
                                            className={styles.editButton}>
                                            Edit todo
                                        </Button>
                                    </Form>
                                )
                            }
                        }
                    </Formik>
                </Box>
            </Modal>
        </div>
    )
}

export default ToDoCard;