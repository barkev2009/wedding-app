import React from 'react';
import styles from './screen.module.css';
import { GENDERS } from '../const';

const Welcome = ({ link }) => {

    let dear, you;
    switch (link.gender) {
        case GENDERS.male.code:
            dear = 'Дорогой';
            you = 'тебя';
            break;
        case GENDERS.female.code:
            dear = 'Дорогая';
            you = 'тебя';
            break;
        default:
            dear = 'Дорогие';
            you = 'вас';
            break;
    }

    return (
        <div className={[styles.screen].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text].join(' ')}>Григорий и Анна</h1>
            <div>IMAGE</div>
            <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                {`${dear} ${link.name} !`}
            </h3>
            <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                {`Мы приглашаем ${you}`}<br />на нашу свадьбу.
            </h3>
        </div>
    )
}

export default Welcome