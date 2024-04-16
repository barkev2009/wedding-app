import React from 'react';
import styles from './screen.module.css';
import ArrowDown from '../svg/ArrowDown';
import ym from 'react-yandex-metrika';

const Start = () => {

  const clickHandler = (e) => {
    ym('reachGoal','click-start');
    const elem = document.createElement('div');
    elem.style.left = e.clientX + "px";
    elem.style.top = e.clientY + "px";
    elem.style.transition = "all .5s";
    // elem.style.backgroundColor = 'var(--green)';
    // elem.style.border = '4px solid var(--white)';
    // elem.style.width = '20px';
    // elem.style.height = '20px';
    elem.classList.add(styles.dot);
    elem.classList.add(styles.main);
    document.getElementById('start_screen').appendChild(elem);
    for (let i = 0; i < e.clientY + 100; i++) {
      setTimeout(
        () => {
          elem.style.top = e.clientY - i + "px";
        }, i * 10
      );
    }
    setTimeout(
      () => {
        elem.remove()
      }, (e.clientY + 100) * 10
    );
  }

  return (
    <div id="start_screen" onClick={clickHandler} className={[styles.screen, styles.flex_center, styles.green].join(' ')}>
      <h1 className={[styles.white_font, styles.g_letter].join(' ')}>G</h1>
      <h1 style={{ fontFamily: 'Mr De Haviland' }} className={[styles.white_font, styles.and_letter].join(' ')}>&</h1>
      <h1 className={[styles.white_font, styles.a_letter].join(' ')}>A</h1>

      <div style={{ animationDuration: '10s', animationDelay: '7s', left: '14%' }} className={[styles.dot, styles.main].join(' ')}></div>
      <div style={{ animationDuration: '8s', animationDelay: '6s', left: '25%' }} className={[styles.dot, styles.main].join(' ')}></div>
      <div style={{ animationDuration: '12s', animationDelay: '5s', left: '55%' }} className={[styles.dot, styles.main].join(' ')}></div>
      <div style={{ animationDuration: '11s', animationDelay: '14s', left: '85%' }} className={[styles.dot, styles.main].join(' ')}></div>
      <div style={{ animationDuration: '10s', animationDelay: '10s', left: '5%' }} className={[styles.dot, styles.main].join(' ')}></div>
      <div style={{ animationDuration: '8s', animationDelay: '11s', left: '95%' }} className={[styles.dot, styles.main].join(' ')}></div>
      <div style={{ animationDuration: '12s', animationDelay: '8s', left: '38%' }} className={[styles.dot, styles.main].join(' ')}></div>
      <div style={{ animationDuration: '11s', animationDelay: '9s', left: '67%' }} className={[styles.dot, styles.main].join(' ')}></div>

      <div style={{ animationDuration: '18s', animationDelay: '8s', left: '32%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '20s', animationDelay: '9s', left: '71%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '19s', animationDelay: '6s', left: '66%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '21s', animationDelay: '9s', left: '90%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '20s', animationDelay: '10s', left: '20%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '18s', animationDelay: '4s', left: '40%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '17s', animationDelay: '5s', left: '60%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '22s', animationDelay: '20s', left: '95%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '20s', animationDelay: '13s', left: '10%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '18s', animationDelay: '14s', left: '50%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '17s', animationDelay: '11s', left: '30%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '22s', animationDelay: '12s', left: '75%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '20s', animationDelay: '8s', left: '3%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '18s', animationDelay: '9s', left: '83%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '17s', animationDelay: '6s', left: '54%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <div style={{ animationDuration: '22s', animationDelay: '7s', left: '71%' }} className={[styles.dot, styles.back].join(' ')}></div>
      <ArrowDown />
    </div>
  )
}

export default Start