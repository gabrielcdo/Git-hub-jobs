import React from 'react';
import styles from './footer.module.scss'
const Footer = () => {
    return (
        <div className={styles.footer}>
        <ul>
        <li><a href='https://github.blog/'>The GitHub Blog</a></li>
        <li><a href='https://support.github.com/request'>Contact</a></li>
        <li><a href='https://docs.github.com/en/github/site-policy/github-privacy-statement'>Privacy</a></li>
        <li><a href='https://docs.github.com/en/github/site-policy/github-terms-of-service'>Terms</a></li>
        <li><a href='https://jobs.github.com/api'>Api</a></li>
        </ul>
        <img src="https://jobs.github.com/images/layout/invertocat.png" alt="GitHub img"/>
        <p>© 2021 GitHub Inc. All rights reserved.</p>
        </div>
    );
}

export default Footer;
