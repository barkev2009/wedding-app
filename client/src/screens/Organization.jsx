import React from 'react';
import styles from './screen.module.css';
import { GENDERS } from '../const';
import WhatsApp from '../svg/WhatsApp';

const Organization = ({ link }) => {

    let writing, who, guest;
    switch (link.gender) {
        case GENDERS.male.code:
            writing = 'пишет';
            who = 'я';
            guest = 'гость';
            break;
        case GENDERS.female.code:
            writing = 'пишет';
            who = 'я';
            guest = 'гость';
            break;
        default:
            writing = 'пишут';
            who = 'мы';
            guest = 'гости';
            break;
    }
    const generatedText = `Здравствуйте, Алена! Вам ${writing} ${link.name}, ${who} - ${guest} на свадьбе Ани и Гриши.`.split(' ').join('%20');

    return (
        <div className={[styles.screen, styles.flex_center, styles.organization].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text].join(' ')}>Организация</h1>
            <div className={[styles.center_text, styles.flex_center].join(' ')}>
                <div className={[styles.green_font, styles.center_text].join(' ')}>
                    <h3>На все вопросы, связанные с
                        торжеством, с радостью ответит наш
                        организатор Алёна:</h3>
                    <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                        <a style={{textDecoration: 'none', borderBottom: '2px solid var(--green)'}} className={[styles.green_font, styles.center_text].join(' ')} href="tel:+79537672033">+7 (953) 767-20-33</a>
                    </h3>
                </div>
                <a className={styles.whatsapp} aria-label="Chat on WhatsApp" href={`https://wa.me/+79537672033?text=${generatedText}`}>
                    <WhatsApp />
                </a>
                <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                    Наш свадебный ужин рассчитан на взрослых, 
                    за исключением только самых родных и 
                    близких маленьких гостей
                </h3>
            </div>
        </div>
    )
}

export default Organization