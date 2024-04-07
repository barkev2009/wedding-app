import React from 'react';
import styles from './screen.module.css';
import { GENDERS } from '../const';

const DressCode = ({ link }) => {

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
        <div className={[styles.screen].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text].join(' ')}>Дресс<span style={{fontFamily: 'Mr De Haviland'}}>-</span>код</h1>
            <h2 className={[styles.green_font, styles.center_text].join(' ')}>
                Для нас главное <br/>
                {your} присутствие!
            </h2>
            <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                Но мы будем рады <br/>
                если в {support} <br/>
                цветовую гамму нашей свадьбы
            </h3>
            <div className={[styles.circles, styles.center_text].join(' ')}>
                <div className={[styles.circle, styles.purple].join(' ')}></div>
                <div className={[styles.circle, styles.green].join(' ')}></div>
                <div className={[styles.circle, styles.brown].join(' ')}></div>
                <div className={[styles.circle, styles.coffee].join(' ')}></div>
            </div>
        </div>
    )
}

export default DressCode