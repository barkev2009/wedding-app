import React from 'react';
import styles from './screen.module.css';
import { GENDERS } from '../const';
import png from '../images/envelope.png';
import glass from '../images/glass.png';
import { useWineIntersectionObserver } from '../hooks';

const Details = ({ link }) => {

    useWineIntersectionObserver();


    let decide, your, think;
    switch (link.gender) {
        case GENDERS.male.code:
            decide = 'ты решишь';
            your = 'твоему пожеланию в конверте';
            think = 'Не ломай';
            break;
        case GENDERS.female.code:
            decide = 'ты решишь';
            your = 'твоему пожеланию в конверте';
            think = 'Не ломай';
            break;
        default:
            decide = 'вы решите';
            your = 'вашим пожеланиям в конвертах';
            think = 'Не ломайте';
            break;
    }

    return (
        <div className={[styles.screen, styles.flex_center, styles.details].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text].join(' ')}>Детали</h1>
            <div>
                <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                    Приятным комплиментом для нас будет,
                    если вместо живых цветов {decide} подарить нам бутылочку
                    красного полусладкого вина для
                    нашей семейной винотеки.</h3>
                <div className={styles.svgContainer}>
                    <div style={{position: 'relative', overflow: 'hidden'}}>
                        <img height='50px' src={glass} alt='glass' style={{zIndex: 1, position: 'relative'}} />
                        <div className={styles.wine}></div>
                    </div>
                </div>
                <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                    {think} голову над подарком -
                    мы будем рады {your}.</h3>
                <div className={styles.svgContainer}>
                    <img src={png} alt='envelope' />
                </div>
            </div>
        </div>
    )
}

export default Details