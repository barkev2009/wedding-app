import React from 'react';
import styles from './screen.module.css';

const TimePlace = () => {
    return (
        <div className={[styles.screen, styles.green, styles.flex_toggle_direction, styles.flex_center].join(' ')}>
            <h1 className={[styles.white_font, styles.center_text].join(' ')}>Место и дата <br /> проведения</h1>
            <div>
                <h2 className={[styles.white_font, styles.center_text, styles.date].join(' ')}>18.07.2024</h2>
                <h2 className={[styles.white_font, styles.center_text, styles.restaurant].join(' ')}>
                    Ресторан <br />
                    Paris в Double Tree <br />
                    by Hilton Hotel
                </h2>
                <h3 className={[styles.white_font, styles.center_text].join(' ')}>
                    г. Новосибирск, ул. Каменская, 7/1
                </h3>
            </div>
        </div>
    )
}

export default TimePlace