import React from 'react';
import styles from './screen.module.css';

const Form = ({ link }) => {
    return (
        <div className={[styles.screen, styles.green].join(' ')}>
            <h1 className={[styles.white_font, styles.center_text].join(' ')}>Анкета гостя</h1>
        </div>
    )
}

export default Form