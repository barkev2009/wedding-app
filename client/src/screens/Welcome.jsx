import React from 'react';
import styles from './screen.module.css';
import { GENDERS } from '../const';
import png from '../images/main.png';
import Rectangle from '../svg/Rectangle';

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
        <div className={[styles.screen, styles.flex_center, styles.flex_toggle_direction].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text, styles.flex, styles.toggle_br].join(' ')}>Григорий <br /> и <br /> Анна</h1>
            <div className={[styles.main_image_group, styles.flex].join(' ')}>
                <Rectangle />
                <img src={png} alt='main' />
            </div>
            <div style={{marginBottom: '3rem'}} className={styles.flex}>
                <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                    {`${dear} ${link.name}!`}
                </h3>
                <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                    {`Мы были рады видеть ${you}`}<br />на нашей свадьбе!
                </h3>
            </div>
        </div>
    )
}

export default Welcome