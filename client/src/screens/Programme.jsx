import React from 'react';
import styles from './screen.module.css';
import { useBanguetTimeIntersectionObserver, useDiscoTimeIntersectionObserver, useGuestTimeIntersectionObserver, useRegistrationTimeIntersectionObserver } from '../hooks';

const Programme = ({ link }) => {

    useGuestTimeIntersectionObserver();
    useBanguetTimeIntersectionObserver();
    useDiscoTimeIntersectionObserver();
    useRegistrationTimeIntersectionObserver();

    return (
        <div className={[styles.screen, styles.green, styles.programme].join(' ')}>
            <h1 className={[styles.white_font, styles.center_text].join(' ')}>Программа</h1>
            <div className='programmeBlocks'>
                {
                    link.is_official &&
                    <div className={styles.programmeContainer}>
                        <h2 style={{ transition: 'all .3s' }} className={[styles.white_font, styles.center_text, 'registrationTime'].join(' ')}>14:30</h2>
                        <h3 className={[styles.white_font, styles.center_text].join(' ')}>регистрация в ЗАГС</h3>
                    </div>
                }
                <div className={styles.programmeContainer}>
                    <h2 style={{ transition: 'all .3s' }} className={[styles.white_font, styles.center_text, 'guestTime'].join(' ')}>16:30</h2>
                    <h3 className={[styles.white_font, styles.center_text].join(' ')}>сбор гостей</h3>
                </div>
                <div className={styles.programmeContainer}>
                    <h2 style={{ transition: 'all .3s' }} className={[styles.white_font, styles.center_text, 'banquetTime'].join(' ')}>17:00</h2>
                    <h3 className={[styles.white_font, styles.center_text].join(' ')}>банкет</h3>
                </div>
                <div className={styles.programmeContainer}>
                    <h2 style={{ transition: 'all .3s' }} className={[styles.white_font, styles.center_text, 'discoTime'].join(' ')}>22:00</h2>
                    <h3 className={[styles.white_font, styles.center_text].join(' ')}>дискотека</h3>
                </div>
            </div>
        </div>
    )
}

export default Programme