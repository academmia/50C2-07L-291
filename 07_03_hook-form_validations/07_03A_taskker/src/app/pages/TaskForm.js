import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppLayout from '../../shared/layout/AppLayout';
import axios from 'axios';

import useFormLogic from '../../shared/hooks/useFormLogic';


const TaskForm = (props) => {

    const [navToList, setNavToList] = useState(false);

    const { values, handleChange, handleSubmit } = useFormLogic(add);

    let taskDefaults = {
        subject: '',
        description: '',
        status: '',
        owner_id: 10,
        owner_name: "James Hansen",
        project_id: 1,
        project_code: "ONE",
        asignee_id: 10,
        asignee_name: "James Hansen",
        created_date: "03/11/2051",
        start_date: "2051-11-03T21:00:00.000Z",
        end_date: "2051-11-07T21:00:00.000Z"
    };

    async function add () {

        let newTask = {
            ...taskDefaults,
            subject: values.subject,
            description: values.description,
            status: values.status,
        }

        try {
            const result = await axios.post(`http://localhost:3355/tasks`, newTask);
            props.history.push('/tasks')
        } catch(error) {
            console.log('NEW_TASK_ERROR: ', error)
        }

    }

    const activateNavToList = () => {
        setNavToList(true);
    }
    if (navToList) return <Redirect to="/tasks" />
    return (
        <AppLayout>
            <div className="page-content">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="card col col-md-10">
                            <div className="card-header d-flex justify-content-between">
                                <h3 className="mt-2" style={{ display: 'inline-block'}}>Task Add</h3>
                                <button onClick={ activateNavToList } 
                                    className="btn btn-info"> Back to list </button>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col col-md-9">
                                            <div className="form-group">
                                                <label className="form-label">Subject</label>
                                                <input name="subject" 
                                                    value={ values.subject || '' } 
                                                    onChange={ handleChange }
                                                    className="form-control" type="text" /></div> 
                                        </div>
                                        <div className="col col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">Status</label>
                                                <input name="status" 
                                                    value={ values.status || '' } 
                                                    onChange={ handleChange }
                                                    className="form-control" type="text" /></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Description</label>
                                                <input name="description" 
                                                    value={ values.description || '' } 
                                                    onChange={ handleChange }
                                                    className="form-control" type="text" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button onClick={ handleSubmit }
                                        className="btn btn-primary ml-3">
                                        Add and close</button></div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default TaskForm;