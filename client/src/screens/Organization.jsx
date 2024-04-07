import React from 'react';
import styles from './screen.module.css';
import { GENDERS } from '../const';

const Organization = ({ link }) => {

    let pay, ensure;
    switch (link.gender) {
        case GENDERS.male.code:
            pay = 'Обрати';
            ensure = ' позаботься';
            break;
        case GENDERS.female.code:
            pay = 'Обрати';
            ensure = ' позаботься';
            break;
        default:
            pay = 'Обратите';
            ensure = ' позаботьтесь';
            break;
    }

    return (
        <div className={[styles.screen].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text].join(' ')}>Организация</h1>
            <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                На все вопросы связанные с
                торжеством, с радостью ответит наш
                организатор Алёна: </h3>
            <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                <a href="tel:+79537672033">+7 (953) 767-20-33</a></h3>
            <a aria-label="Chat on WhatsApp" href="https://wa.me/+79537672033?text=Здравствуйте,%20Алена!">
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