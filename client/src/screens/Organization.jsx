import React from 'react';
import styles from './screen.module.css';
import { GENDERS } from '../const';

const Organization = ({ link }) => {

    let pay, ensure, writing;
    switch (link.gender) {
        case GENDERS.male.code:
            pay = 'Обрати';
            ensure = ' позаботься';
            writing = 'пишет';
            break;
        case GENDERS.female.code:
            pay = 'Обрати';
            ensure = ' позаботься';
            writing = 'пишет';
            break;
        default:
            pay = 'Обратите';
            ensure = ' позаботьтесь';
            writing = 'пишут';
            break;
    }
    const generatedText = `Здравствуйте, Алена! Вам ${writing} ${link.name}, мы были гостями на свадьбе Ани и Гриши.`.split(' ').join('%20');

    return (
        <div className={[styles.screen].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text].join(' ')}>Организация</h1>
            <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                На все вопросы связанные с
                торжеством, с радостью ответит наш
                организатор Алёна: </h3>
            <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                <a href="tel:+79537672033">+7 (953) 767-20-33</a></h3>
            <a aria-label="Chat on WhatsApp" href={`https://wa.me/+79537672033?text=${generatedText}`}>
                <div>WHATSAPP</div>
            </a>
            <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                {pay} внимание, что место и
                формат мероприятия не
                предполагают детской площадки и
                аниматоров. Пожалуйста,
                {ensure} о том, чтобы провести
                этот вечер без детей</h3>
        </div>
    )
}

export default Organization