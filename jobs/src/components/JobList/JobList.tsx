import React from 'react';
import { useState , useEffect } from 'react'
import axios from 'axios'
import JobCard from '../JobCard/JobCard';

const JobList = () => {

    const [jobsList , setJobsList] = useState(null)
    useEffect(() => {
        axios.get('http://localhost:3333/jobs').then(
            (response) => {
                setJobsList(response.data)})
    },[])

    return (
        
        <div>
            {jobsList ? (
                <ul>
                {
                jobsList.map(job=>(
                 <JobCard job={job}/>
                ))
                }
                </ul>
            ) : (<h1>Não Carregou</h1>)}
        </div>
    );
}

export default JobList;
