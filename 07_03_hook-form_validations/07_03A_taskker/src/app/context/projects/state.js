import React, { useReducer } from 'react';
import axios from 'axios';
import ProjectContext from './context';
import ProjectReducer from './reducer';
import { GET_PROJECTS, SET_LOADING, NEW_PROJECT } from '../action-types';

const ProjectState = props => {
    const initialState = {
        projects: [],
        loading: false
    }

    const [state, dispatch] = useReducer(ProjectReducer, initialState);

    // get projects
    const getProjects = async () => {
        setLoading();

        const result = await axios.get(`http://localhost:3355/projects`);
        // setProjects(result.data)   
        dispatch({
            type: GET_PROJECTS,
            payload: result.data
        })

    };

    // add project
    const newProject = async (project) => {
        setLoading();

        try {
            const result = await axios.post(`http://localhost:3355/projects`, project);
            
            dispatch({
                type: NEW_PROJECT,
                payload: result.data
            })
        } catch(error) {
            // dispatch({ type: 'NEW_PROJECT_ERROR'});
            console.log('NEW_PROJECT_ERROR: ', error)
        }

        // setProjects(result.data)  


    };

    // set loading
    const setLoading = () => dispatch({ type: SET_LOADING});

    return (
        <ProjectContext.Provider
            value={{
                projects: state.projects,
                loading: state.loading,
                getProjects,
                newProject
            }}>
            {props.children}
        </ProjectContext.Provider>
    )
}

export default ProjectState;
