import React, { useRef } from 'react';
import styles from './screen.module.css';
import { GENDERS } from '../const';
import png from '../images/envelope.png';
import glass from '../images/glass.png';
import ym from 'react-yandex-metrika';

const Details = ({ link }) => {

    const timeouts = useRef([]);

    let options = {
        root: document.querySelector(styles.details),
        rootMargin: "0px",
        threshold: 1.0,
    };

    const callback = (entries) => {
        entries.forEach(entry => {
            const wine = document.querySelector('.' + styles.wine);
            let timeout;
            if (entry.isIntersecting) {
                for (let i = 10; i < 43; i++) {
                    timeout = setTimeout(
                        () => {
                            wine.style.height = `${i}px`;
                        }, (i - 10) * 100
                    )
                    timeouts.current.push(timeout);
                }
            } else {
                timeouts.current.forEach(t => clearTimeout(t));
                timeouts.current = []
                wine.style.height = `10px`;
            }
        })
    }

    let observer = new IntersectionObserver(callback, options);
    setTimeout(
        () => {
            observer.observe(document.querySelector('.' + styles.svgContainer));
        }, 1000
    );

    const clickGlassHandler = () => {
        ym('reachGoal','click-glass')
        timeouts.current.forEach(t => clearTimeout(t));
        timeouts.current = [];
        const wine = document.querySelector('.' + styles.wine);
        const curValue = Number(wine.style.height.replace('px', ''))
        let timeout;
        for (let i = 10; i < curValue; i++) {
            timeout = setTimeout(
                () => {
                    wine.style.height = `${curValue - i + 10}px`;
                }, (i - 10) * 10
            )
            timeouts.current.push(timeout);
        }
        for (let i = 10; i < 43; i++) {
            timeout = setTimeout(
                () => {
                    wine.style.height = `${i}px`;
                }, (curValue - 10) * 10 + (i - 10) * 100
            )
            timeouts.current.push(timeout);
        }
    }


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
                        <img onClick={clickGlassHandler}  height='50px' src={glass} alt='glass' style={{zIndex: 1, position: 'relative'}} />
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