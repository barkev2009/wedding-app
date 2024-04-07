import React from 'react';
import styles from './screen.module.css';

const Organization = ({ link }) => {
    return (
        <div className={[styles.screen].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text].join(' ')}>Организация</h1>
        </div>
    )
}

export default Organization