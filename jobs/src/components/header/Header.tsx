import React from 'react'
import styles from './header.module.scss'

export default function Header() {
    return (
        <div className={styles.header}>
            <div className={styles.headerContent}>
            <h2>GitHub Jobs</h2>
            <ul className={styles.headerList}>
                <li><a href="#">All Jobs</a></li>
                <li><a href="#">Api Documentation</a></li>
                <li><a href="#">How it Works</a></li>
            </ul>
            </div>
        </div>
    )
}
