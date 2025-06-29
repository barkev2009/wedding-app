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

    const clickEnvelopeHandler = () => {
        ym('reachGoal', 'click-envelope')
        document.getElementById('envelope').innerHTML += '$';
        document.getElementById('envelope').classList.add(styles.animate);
        document.getElementById('envelope_img').classList.add(styles.animate);
        setTimeout(
            () => {
                document.getElementById('envelope').classList.remove(styles.animate);
                document.getElementById('envelope_img').classList.remove(styles.animate);
            }, 900
        );
    }


    let decide, your, think;
    switch (link.gender) {
        case GENDERS.male.code:
            decide = 'ты решил';
            your = 'твоему пожеланию в конверте';
            think = 'ты не ломал';
            break;
        case GENDERS.female.code:
            decide = 'ты решила';
            your = 'твоему пожеланию в конверте';
            think = 'ты не ломала';
            break;
        default:
            decide = 'вы решили';
            your = 'вашим пожеланиям в конвертах';
            think = 'вы не ломали';
            break;
    }

    return (
        <div className={[styles.screen, styles.flex_center, styles.details].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text].join(' ')}>Детали</h1>
            <div>
                <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                    Для нас было приятным комплиментом,
                    если вместо живых цветов {decide} подарить нам бутылочку
                    красного полусладкого вина для
                    нашей семейной винотеки</h3>
                <div className={styles.svgContainer}>
                    <div style={{position: 'relative', overflow: 'hidden'}}>
                        <img onClick={clickGlassHandler}  height='50px' src={glass} alt='glass' style={{zIndex: 1, position: 'relative'}} />
                        <div className={styles.wine}></div>
                    </div>
                </div>
                <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                    Если {think} голову над подарком,
                    мы были рады {your}</h3>
                <div className={styles.svgContainer}>
                    <h2 id='envelope' className={[styles.money].join(' ')}>+</h2>
                    <img id='envelope_img' onClick={clickEnvelopeHandler} className={[styles.envelope].join(' ')} src={png} alt='envelope' />
                </div>
            </div>
        </div>
    )
}

export default Details