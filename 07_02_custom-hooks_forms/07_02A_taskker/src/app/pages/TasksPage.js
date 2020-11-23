import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import AppLayout from '../../shared/layout/AppLayout';
import axios from 'axios';

import Loader from '../../shared/components/Loader';
import LoaderContentList from '../../shared/components/LoaderContentList';

const TasksPage = (props) => {

    const [tasks, setTasks] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const getTasks = async () => {
            setLoading(true);
    
            const results = await axios.get(`http://localhost:3355/tasks`);
            setTasks(results.data)   
    
            setLoading(false);
        };
        getTasks();
    }, []); // run once only when mounted - like componentDidMount()
    // daca lipsesc [] atunci se ruleaza dupa fiecare render (loop)

    return (
        <AppLayout>
            <div className="page-content">
                <div className="container">
                    <div className="page-header">
                        <h1 className="page-title">Tasks</h1>
                    </div>
                    <div className="row">
                        <div className="col col-12">
                            <div className="card">
                                <div className="card-header">
                                    <h3 className="card-title">
                                        <Link to="/tasks/add"
                                            className="btn btn-info text-white"> 
                                            Add new task</Link>
                                    </h3>
                                </div>
                                <Loader loading={loading} content={ <LoaderContentList/> }>
                                <div className="table-responsive">
                                        <table className="table card-table table-hover table-outline table-vcenter text-nowrap">
                                            <thead className="">
                                                <tr className="">
                                                    <th className="text-center w-1"><i className="icon-people"></i></th>
                                                    <th className="">Task</th>
                                                    <th className="">Completed</th>
                                                    <th className="text-center">Status</th>
                                                    <th className="">Project</th>
                                                    <th className="text-center">Assignee</th>
                                                    <th className="text-center"><i className="icon-settings"></i></th>
                                                </tr>
                                            </thead>
                                            <tbody className="">

                                            {   tasks && tasks.map( task => (
                                                <tr className="">
                                                    <td className="text-center"><span className="avatar d-block" 
                                                        style={{ backgroundImage: `url('./images/faces/female/25.jpg')` }}><span className="avatar-status bg-green"></span></span>
                                                    </td>
                                                    <td className="">
                                                        <div>{ task.subject }</div>
                                                        <div className="sm text-muted">Created: { task.created_date }</div>
                                                    </td>
                                                    <td className="">
                                                        <div className="clearfix">
                                                            <div className="float-left"><strong>42%</strong></div>
                                                            <div className="float-right"><small className="sm text-muted">deadline: Mar 19, 2052</small></div>
                                                        </div>
                                                        <div className="progress progress-xs">
                                                            <div className="progress-bar bg-yellow" 
                                                                style={{ width: `42%` }}></div>
                                                        </div>
                                                    </td>
                                                    <td className="text-center"> { task.status } </td>
                                                    <td className="">
                                                        <div className="sm text-muted">Asignee</div>
                                                        <div>{task.asignee_name}</div>
                                                    </td>
                                                    <td className="text-center">Project: {task.project_code}</td>
                                                    <td className="text-center">
                                                        <div className="dropdown"><a href="/"   className=""><i className="fe fe-more-vertical"></i> </a></div>
                                                    </td>
                                                </tr>
                                            ))
                                            }

                                                
                                            </tbody>
                                        </table>
                                    </div>
                                </Loader>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </AppLayout>
    )
}

export default TasksPage;