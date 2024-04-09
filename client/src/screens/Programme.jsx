import React from 'react';
import styles from './screen.module.css';

const Programme = () => {
    return (
        <div className={[styles.screen, styles.green, styles.programme].join(' ')}>
            <h1 className={[styles.white_font, styles.center_text].join(' ')}>Программа</h1>
            <div>
                <div className={styles.programmeContainer}>
                    <h2 className={[styles.white_font, styles.center_text].join(' ')}>16:30</h2>
                    <h3 className={[styles.white_font, styles.center_text].join(' ')}>сбор гостей</h3>
                </div>
                <div className={styles.programmeContainer}>
                    <h2 className={[styles.white_font, styles.center_text].join(' ')}>17:00</h2>
                    <h3 className={[styles.white_font, styles.center_text].join(' ')}>банкет</h3>
                </div>
                <div className={styles.programmeContainer}>
                    <h2 className={[styles.white_font, styles.center_text].join(' ')}>22:00</h2>
                    <h3 className={[styles.white_font, styles.center_text].join(' ')}>дискотека</h3>
                </div>
            </div>
        </div>
    )
}

export default Programme