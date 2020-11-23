import React, { useState, useContext } from 'react';
import { Redirect } from 'react-router-dom';
import AppLayout from '../../shared/layout/AppLayout';

import ProjectContext from '../context/projects/context';

const ProjectForm = (props) => {

    const [navToList, setNavToList] = useState(false);
    const { newProject } = useContext(ProjectContext)

    // form fields - hooks way
    const [code, setCode]               = useState("");
    const [name, setName]               = useState("");
    const [description, setDescription] = useState("");

    const add = (e) => {
        e.preventDefault();
        // saveProject()
        newProject({
            code,
            name,
            description,
            owner_id: 10,
            owner_name: "James Hansen",
            category_id: 54,
            created_date: "09/16/2051",
            end_date: "2051-12-23T21:00:00.000Z"
        });
    }
    const addAndClose = (e) => {
        add(e);
        props.history.push('/projects')
    }

    const activateNavToList = () => {
        setNavToList(true);
    }
    if (navToList) return <Redirect to="/projects" />
    return (
        <AppLayout>
            <div className="page-content">
                <div className="container">
                    <div className="row d-flex justify-content-center">
                        <div className="card col col-md-10">
                            <div className="card-header d-flex justify-content-between">
                                <h3 className="mt-2" style={{ display: 'inline-block'}}>Project Add</h3>
                                <button onClick={ activateNavToList } 
                                    className="btn btn-info"> Back to list </button>
                            </div>
                            <form>
                                <div className="card-body">
                                    <div className="row">
                                        <div className="col col-md-9">
                                            <div className="form-group">
                                                <label className="form-label">Name</label>
                                                <input value={ name } 
                                                    onChange={ ev => setName(ev.target.value) }
                                                    className="form-control" type="text" /></div> 
                                        </div>
                                        <div className="col col-md-3">
                                            <div className="form-group">
                                                <label className="form-label">Code</label>
                                                <input value={ code } 
                                                    onChange={ ev => setCode(ev.target.value) }
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
                                    <button onClick={ addAndClose }
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

export default ProjectForm;