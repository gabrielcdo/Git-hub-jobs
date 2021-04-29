import React from 'react'
import styles from './search.module.scss'
export default function SearchField() {
    return (
        <div className={styles.searchBar}>
            <div>
            <h3>Job Description</h3>
            <input className={styles.searchBarInput}type="text" placeholder="Filter by title, benefits, companies, expertise"/>

            <h3>Location</h3>
            <input className={styles.searchBarInput} type="text" placeholder="filter by city,state, zip code or country"/>
            </div>
            <div>
                <span>Full time only</span>
                <input type="checkbox"/>
                <button type="button">Search</button>

            </div>
        </div>
    )
}
