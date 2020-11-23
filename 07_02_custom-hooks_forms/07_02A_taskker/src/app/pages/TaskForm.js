import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import AppLayout from '../../shared/layout/AppLayout';
import axios from 'axios';


const TaskForm = (props) => {

    const [navToList, setNavToList] = useState(false);

    // form fields - hooks way
    const [subject, setSubject]         = useState("");
    const [description, setDescription] = useState("");
    const [status, setStatus]           = useState("");

    const add = async (e) => {
       
        let task = {
            subject,
            description,
            status,
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

        try {
            const result = await axios.post(`http://localhost:3355/tasks`, task);
            props.history.push('/tasks')
        } catch(error) {
            console.log('NEW_TASK_ERROR: ', error)
        }

    }

    const onAddAndClose = (e) => {
        e.preventDefault();
        add();
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
                                                <input value={ subject } 
                                                    onChange={ ev => setSubject(ev.target.value) }
                                                    className="form-control" type="text" /></div> 
                                        </div>
                                        <div className="col col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">Status</label>
                                                <input value={ status } 
                                                    onChange={ ev => setStatus(ev.target.value) }
                                                    className="form-control" type="text" /></div>
                                        </div>
                                        <div className="col col-md-12">
                                            <div className="form-group">
                                                <label className="form-label">Description</label>
                                                <input value={ description } 
                                                    onChange={ ev => setDescription(ev.target.value) }
                                                    className="form-control" type="text" /></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-footer text-right">
                                    <button onClick={ onAddAndClose }
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