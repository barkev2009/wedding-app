import React from 'react';
import styles from '../screens/screen.module.css';

const VisitOption = ({ visitOption, chosenOption, clickHandler }) => {

    return (
        <label className={styles.formRadioHidden} onClick={clickHandler} id={`parent-radio-${visitOption.code}`} htmlFor={`radio-${visitOption.code}`}>
            <input className={styles.formInput} name="visitOption" type="radio" id={`radio-${visitOption.code}`} defaultChecked={visitOption.code === chosenOption.code}/>
            <span className={styles.radio}></span>
            <label className={[styles.white_font].join(' ')} htmlFor={`radio-${visitOption.code}`}>
                {visitOption.value}
            </label>
        </label>
    )
}

export default VisitOption