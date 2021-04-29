import React from 'react'
import styles from './jobCard.module.scss'


export default function JobCard( {job}) {
    return (
        <div className={styles.jobCard}>
            <div>
            <h3>{job.title}</h3>
            <span>{job.company}</span>{job.type === 'Full Time' && (<span style={{color: "#2d8cf0"}}> Full Time</span>)}
            </div>
            <img src={job.company_logo} alt={job.type}/>
        </div>
    )
}
