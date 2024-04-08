import React from 'react';
import styles from '../screens/screen.module.css';

const NoData = () => {
  return (
    <div className={[styles.green, styles.screen].join(' ')}>
      <h1 className={[styles.white_font, styles.center_text].join(' ')}>
      <span style={{fontSize: '7rem'}}>404</span> <br />
      Упс...<br />
      Кажется, что эта ссылка никуда не ведет, попробуйте другую)
      </h1>
    </div>
  )
}

export default NoData