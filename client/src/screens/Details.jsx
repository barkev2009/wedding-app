import React from 'react';
import styles from './screen.module.css';
import { GENDERS } from '../const';

const Details = ({ link }) => {

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
        <div className={[styles.screen].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text].join(' ')}>Детали</h1>
            <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                Приятным комплиментом для нас будет,
                если вместо живых цветов {decide} подарить нам бутылочку
                красного полусладкого вина для
                нашей семейной винотеки.</h3>
            <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                {think} голову над подарком -
                мы будем рады {your}.</h3>
        </div>
    )
}

export default Details