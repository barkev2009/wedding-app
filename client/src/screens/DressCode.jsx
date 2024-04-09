import React from 'react';
import styles from './screen.module.css';
import {useIntersectionObserver} from '../hooks';
import { GENDERS } from '../const';

const DressCode = ({ link }) => {

    useIntersectionObserver();

    let your, support;
    switch (link.gender) {
        case GENDERS.male.code:
            your = 'твое';
            support = 'своем наряде ты поддержишь';
            break;
        case GENDERS.female.code:
            your = 'твое';
            support = 'своем наряде ты поддержишь';
            break;
        default:
            your = 'ваше';
            support = 'своих нарядах вы поддержите';
            break;
    }

    return (
        <div className={[styles.screen, styles.dressCode].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text, styles.flex].join(' ')}>Дресс<span style={{ fontFamily: 'Mr De Haviland' }}>-</span>код</h1>
            <div className={styles.flex}>
                <h2 className={[styles.green_font, styles.center_text, styles.dressCodeFirst].join(' ')}>
                    Для нас главное <br />
                    {your} присутствие!
                </h2>
                <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                    Но мы будем рады <br />
                    если в {support} <br />
                    цветовую гамму нашей свадьбы
                </h3>
                <div className={[styles.circles, styles.center_text].join(' ')}>
                    <div className={[styles.circle, styles.purple].join(' ')}></div>
                    <div className={[styles.circle, styles.green].join(' ')}></div>
                    <div className={[styles.circle, styles.brown].join(' ')}></div>
                    <div className={[styles.circle, styles.coffee].join(' ')}></div>
                </div>
            </div>
        </div>
    )
}

export default DressCode