import React from 'react';
import styles from './screen.module.css';
import { useIntersectionObserver } from '../hooks';
import { GENDERS } from '../const';

const DressCode = ({ link }) => {

    useIntersectionObserver();

    const clickHandler = (e) => {
        const ITER = 20, SCALE_COUNT = 100;
        const newElem = document.createElement('div');
        let target = e.target;
        if (!e.target.classList.contains(styles.purple) && !e.target.classList.contains(styles.greenc) && !e.target.classList.contains(styles.brown) && !e.target.classList.contains(styles.coffee)) {
            target = e.target.parentNode;
        }
        newElem.classList.add(styles.circle);

        const color = window.getComputedStyle(target).backgroundColor;
        newElem.style.border = `5px solid ${color}`;
        target.appendChild(newElem);
        for (let i = 1; i < SCALE_COUNT; i++) {
            setTimeout(
                () => {
                    newElem.style.transform = `scale(${i})`;
                }, ITER * i
            );
        }
        setTimeout(
            () => {
                newElem.style.transition = 'all 0s';
                newElem.style.transform = 'scale(1)';
                newElem.style.border = 'none';
            }, SCALE_COUNT * ITER
        );
    }

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
        <div className={[styles.screen, styles.dressCode].join(' ')}>
            <h1 className={[styles.green_font, styles.center_text, styles.flex].join(' ')}>Дресс<span style={{ fontFamily: 'Mr De Haviland' }}>-</span>код</h1>
            <div className={styles.flex}>
                <h2 className={[styles.green_font, styles.center_text, styles.dressCodeFirst].join(' ')}>
                    Для нас главное <br />
                    {your} присутствие!
                </h2>
                <h3 className={[styles.green_font, styles.center_text].join(' ')}>
                    Но мы будем рады <br />
                    если в {support} <br />
                    цветовую гамму нашей свадьбы
                </h3>
                <div className={[styles.circles, styles.center_text].join(' ')}>
                    <div onClick={clickHandler} className={[styles.circleMain, styles.purple].join(' ')}></div>
                    <div onClick={clickHandler} className={[styles.circleMain, styles.greenc].join(' ')}></div>
                    <div onClick={clickHandler} className={[styles.circleMain, styles.brown].join(' ')}></div>
                    <div onClick={clickHandler} className={[styles.circleMain, styles.coffee].join(' ')}></div>
                </div>
            </div>
        </div>
    )
}

export default DressCode