import React from 'react';
import styles from './screen.module.css';
import { useDressCodeIntersectionObserver } from '../hooks';
import { GENDERS } from '../const';
import { clickDressHandler } from '../handlers';

const DressCode = ({ link }) => {

    useDressCodeIntersectionObserver();

    let your, support;
    switch (link.gender) {
        case GENDERS.male.code:
            your = 'твое';
            support = 'своем наряде ты поддержал';
            break;
        case GENDERS.female.code:
            your = 'твое';
            support = 'своем наряде ты поддержала';
            break;
        default:
            your = 'ваше';
            support = 'своих нарядах вы поддержали';
            break;
    }

    return (
        <div className={[styles.screen, styles.dressCode].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text, styles.flex].join(' ')}>Дресс<span style={{ fontFamily: 'Mr De Haviland' }}>-</span>код</h1>
            <div className={styles.flex}>
                <h2 className={[styles.green_font, styles.center_text, styles.dressCodeFirst].join(' ')}>
                    Для нас было главным <br />
                    {your} присутствие!
                </h2>
                <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                    И мы были рады, <br />
                    если в {support} <br />
                    цветовую гамму нашей свадьбы
                </h3>
                <div className={[styles.circles, styles.center_text].join(' ')}>
                    <div onClick={clickDressHandler} className={[styles.circleMain, styles.purple].join(' ')}></div>
                    <div onClick={clickDressHandler} className={[styles.circleMain, styles.greenc].join(' ')}></div>
                    <div onClick={clickDressHandler} className={[styles.circleMain, styles.brown].join(' ')}></div>
                    <div onClick={clickDressHandler} className={[styles.circleMain, styles.coffee].join(' ')}></div>
                </div>
            </div>
        </div>
    )
}

export default DressCode